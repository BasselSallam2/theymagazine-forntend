'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

// Login form validation schema
const LoginFormSchema = z.object({
    email: z.string().email('Please enter a valid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
});

export type LoginFormData = z.infer<typeof LoginFormSchema>;

// Signup form validation schema
const SignupFormSchema = z.object({
    username: z.string().min(3, 'Username must be at least 3 characters').max(30, 'Username must be less than 30 characters'),
    email: z.string().email('Please enter a valid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});

export type SignupFormData = z.infer<typeof SignupFormSchema>;

// Login server action
export async function loginUser(formData: FormData) {
    try {
        // Extract form data
        const rawData = {
            email: formData.get('email') as string,
            password: formData.get('password') as string,
        };

        // Validate form data
        const validatedData = LoginFormSchema.parse(rawData);

        // Simulate processing time
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Here you would typically:
        // 1. Check credentials against database
        // 2. Create session/token
        // 3. Set cookies
        console.log('Login attempt:', { email: validatedData.email });

        // Simulate authentication check
        if (validatedData.email === 'test@example.com' && validatedData.password === 'password123') {
            // Revalidate pages that depend on user state
            revalidatePath('/');
            revalidatePath('/dashboard');

            return {
                success: true,
                message: 'Login successful!',
                data: { email: validatedData.email }
            };
        } else {
            return {
                success: false,
                message: 'Invalid email or password.',
                error: 'Invalid credentials'
            };
        }

    } catch (error) {
        console.error('Login error:', error);

        if (error instanceof z.ZodError) {
            return {
                success: false,
                message: 'Please check your input and try again.',
                errors: error.issues.map((err: z.ZodIssue) => ({
                    field: err.path.join('.'),
                    message: err.message
                }))
            };
        }

        return {
            success: false,
            message: 'Something went wrong. Please try again later.',
            error: 'Internal server error'
        };
    }
}

// Signup server action
export async function signupUser(formData: FormData) {
    try {
        // Extract form data
        const rawData = {
            username: formData.get('username') as string,
            email: formData.get('email') as string,
            password: formData.get('password') as string,
            confirmPassword: formData.get('confirmPassword') as string,
        };

        // Validate form data
        const validatedData = SignupFormSchema.parse(rawData);

        // Simulate processing time
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Here you would typically:
        // 1. Check if user already exists
        // 2. Hash password
        // 3. Create user in database
        // 4. Send welcome email
        console.log('Signup attempt:', {
            username: validatedData.username,
            email: validatedData.email
        });

        // Simulate user creation
        const newUser = {
            id: Date.now().toString(),
            username: validatedData.username,
            email: validatedData.email,
            createdAt: new Date().toISOString()
        };

        // Revalidate pages that depend on user state
        revalidatePath('/');
        revalidatePath('/login');

        return {
            success: true,
            message: 'Account created successfully! Please log in.',
            data: newUser
        };

    } catch (error) {
        console.error('Signup error:', error);

        if (error instanceof z.ZodError) {
            return {
                success: false,
                message: 'Please check your input and try again.',
                errors: error.issues.map((err: z.ZodIssue) => ({
                    field: err.path.join('.'),
                    message: err.message
                }))
            };
        }

        return {
            success: false,
            message: 'Something went wrong. Please try again later.',
            error: 'Internal server error'
        };
    }
} 