"use client";

import { useState, useTransition } from "react";
import { submitContactForm } from "@/app/actions/contact";
import { ContactFormData } from "@/app/actions/contact";
import { useFormReset } from "@/hooks/useFormReset";
import { NoScript } from "@/components/elements/NoScriptFallback";

interface ContactFormProps {
    formConfig?: {
        namePlaceholder: string;
        emailPlaceholder: string;
        phonePlaceholder: string;
        messagePlaceholder: string;
        submitText: string;
    };
    className?: string;
}

interface FormErrors {
    [key: string]: string;
}

export default function ContactForm({
    formConfig = {
        namePlaceholder: "Name",
        emailPlaceholder: "Email",
        phonePlaceholder: "Phone",
        messagePlaceholder: "Message",
        submitText: "Send message",
    },
    className = "",
}: ContactFormProps) {
    const [isPending, startTransition] = useTransition();
    const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
    const [errors, setErrors] = useState<FormErrors>({});
    const { resetKey, resetForm } = useFormReset();

    const handleSubmit = async (formData: FormData) => {
        // Clear previous messages and errors
        setMessage(null);
        setErrors({});

        startTransition(async () => {
            try {
                const result = await submitContactForm(formData);

                if (result.success) {
                    setMessage({ type: "success", text: result.message });
                    resetForm(); // Reset form using React state
                } else {
                    setMessage({ type: "error", text: result.message });

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
                    type: "error",
                    text: "Something went wrong. Please try again later.",
                });
            }
        });
    };

    return (
        <div className={`contact-form-container ${className}`}>
            {/* Success/Error Message */}
            {message && <div className={`alert ${message.type === "success" ? "alert-success" : "alert-danger"} mb-4`}>{message.text}</div>}

            <form key={resetKey} id="contactForm" action={handleSubmit} className="form-contact comment_form">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="mb-3">
                            <input className={`form-control ${errors.name ? "is-invalid" : ""}`} name="name" id="name" type="text" placeholder={formConfig.namePlaceholder} required disabled={isPending} />
                            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="mb-3">
                            <input className={`form-control ${errors.email ? "is-invalid" : ""}`} name="email" id="email" type="email" placeholder={formConfig.emailPlaceholder} required disabled={isPending} />
                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="mb-3">
                            <input className={`form-control ${errors.phone ? "is-invalid" : ""}`} name="phone" id="phone" type="tel" placeholder={formConfig.phonePlaceholder} disabled={isPending} />
                            {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="mb-3">
                            <textarea className={`form-control w-100 ${errors.message ? "is-invalid" : ""}`} name="message" id="message" cols={30} rows={9} placeholder={formConfig.messagePlaceholder} required disabled={isPending} defaultValue="" />
                            {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <button type="submit" className="button button-contactForm" disabled={isPending}>
                        {isPending ? (
                            <>
                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                Sending...
                            </>
                        ) : (
                            formConfig.submitText
                        )}
                    </button>
                </div>
                <NoScript>
                    <div className="mt-3">
                        <div className="alert alert-info">
                            <p className="mb-0">
                                <strong>Note:</strong> For enhanced form features and real-time validation, please enable JavaScript.
                            </p>
                        </div>
                    </div>
                </NoScript>
            </form>
        </div>
    );
}
