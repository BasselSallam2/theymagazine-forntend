"use client";

import { useState, useTransition } from "react";
import { submitComment } from "@/app/actions/comments";

interface CommentFormProps {
    articleId: string;
    parentId?: string;
    className?: string;
    placeholder?: string;
    submitText?: string;
}

interface FormErrors {
    [key: string]: string;
}

export default function CommentForm({ articleId, parentId, className = "", placeholder = "Write Comment", submitText = "Post Comment" }: CommentFormProps) {
    const [isPending, startTransition] = useTransition();
    const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
    const [errors, setErrors] = useState<FormErrors>({});

    const handleSubmit = async (formData: FormData) => {
        // Clear previous messages and errors
        setMessage(null);
        setErrors({});

        // Add articleId and parentId to form data
        formData.append("articleId", articleId);
        if (parentId) {
            formData.append("parentId", parentId);
        }

        startTransition(async () => {
            try {
                const result = await submitComment(formData);

                if (result.success) {
                    setMessage({ type: "success", text: result.message });
                    // Reset form
                    const form = document.getElementById("commentForm") as HTMLFormElement;
                    if (form) form.reset();
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
        <div className={`comment-form-container ${className}`}>
            {/* Success/Error Message */}
            {message && <div className={`alert ${message.type === "success" ? "alert-success" : "alert-danger"} mb-4`}>{message.text}</div>}

            <form id="commentForm" action={handleSubmit} className="form-contact comment_form">
                <div className="row">
                    <div className="col-12">
                        <div className="mb-3">
                            <textarea className={`form-control w-100 ${errors.comment ? "is-invalid" : ""}`} name="comment" id="comment" cols={30} rows={9} placeholder={placeholder} required disabled={isPending} defaultValue="" />
                            {errors.comment && <div className="invalid-feedback">{errors.comment}</div>}
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="mb-3">
                            <input className={`form-control ${errors.name ? "is-invalid" : ""}`} name="name" id="name" type="text" placeholder="Name" required disabled={isPending} />
                            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="mb-3">
                            <input className={`form-control ${errors.email ? "is-invalid" : ""}`} name="email" id="email" type="email" placeholder="Email" required disabled={isPending} />
                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="mb-3">
                            <input className={`form-control ${errors.website ? "is-invalid" : ""}`} name="website" id="website" type="url" placeholder="Website (optional)" disabled={isPending} />
                            {errors.website && <div className="invalid-feedback">{errors.website}</div>}
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn button button-contactForm" disabled={isPending}>
                        {isPending ? (
                            <>
                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                Posting...
                            </>
                        ) : (
                            submitText
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}
