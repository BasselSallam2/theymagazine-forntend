'use client';

import { useState, useTransition } from 'react';
import { loginUser } from '@/app/actions/auth';
import Link from 'next/link';

interface LoginFormProps {
    className?: string;
    redirectTo?: string;
}

interface FormErrors {
    [key: string]: string;
}

export default function LoginForm({
    className = "",
    redirectTo = "/"
}: LoginFormProps) {
    const [isPending, startTransition] = useTransition();
    const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
    const [errors, setErrors] = useState<FormErrors>({});

    const handleSubmit = async (formData: FormData) => {
        // Clear previous messages and errors
        setMessage(null);
        setErrors({});

        startTransition(async () => {
            try {
                const result = await loginUser(formData);

                if (result.success) {
                    setMessage({ type: 'success', text: result.message });
                    // Redirect after successful login
                    setTimeout(() => {
                        window.location.href = redirectTo;
                    }, 1500);
                } else {
                    setMessage({ type: 'error', text: result.message });

                    // Set field-specific errors if available
                    if (result.errors) {
                        const fieldErrors: FormErrors = {};
                        result.errors.forEach((error: { field: string; message: string }) => {
                            fieldErrors[error.field] = error.message;
                        });
                        setErrors(fieldErrors);
                    }
                }
            } catch (error) {
                setMessage({
                    type: 'error',
                    text: 'Something went wrong. Please try again later.'
                });
            }
        });
    };

    return (
        <div className={`login-form-container ${className}`}>
            {/* Success/Error Message */}
            {message && (
                <div className={`alert ${message.type === 'success' ? 'alert-success' : 'alert-danger'} mb-4`}>
                    {message.text}
                </div>
            )}

            <form action={handleSubmit} className="login-form">
                <div className="mb-3">
                    <input
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        disabled={isPending}
                    />
                    {errors.email && (
                        <div className="invalid-feedback">{errors.email}</div>
                    )}
                </div>

                <div className="mb-3">
                    <input
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                        disabled={isPending}
                    />
                    {errors.password && (
                        <div className="invalid-feedback">{errors.password}</div>
                    )}
                </div>

                <div className="mb-3">
                    <button
                        type="submit"
                        className="btn btn-primary w-100"
                        disabled={isPending}
                    >
                        {isPending ? (
                            <>
                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                Logging in...
                            </>
                        ) : (
                            'Login'
                        )}
                    </button>
                </div>

                <div className="text-center">
                    <p className="mb-0">
                        Don't have an account?{' '}
                        <Link href="/signup" className="text-primary">
                            Sign up here
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    );
} 