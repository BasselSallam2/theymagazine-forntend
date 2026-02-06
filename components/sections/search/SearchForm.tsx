"use client";

import React from "react";
import { useTransition } from "react";
import { useState } from "react";
import DeferredSearchInput from "@/components/ui/DeferredSearchInput";
import { performSearch } from "@/app/actions/search";
import { Article } from "@/types";

interface SearchFormProps {
    categories?: Array<{ id: string; name: string }>;
    authors?: Array<{ id: string; name: string }>;
    className?: string;
    placeholder?: string;
    showAdvancedSearch?: boolean;
    articles?: Article[];
}

interface FormErrors {
    [key: string]: string;
}

export default function SearchForm({ categories = [], authors = [], className = "", placeholder = "Search for articles, topics, or keywords...", showAdvancedSearch = true, articles = [] }: SearchFormProps) {
    const [isPending, startTransition] = useTransition();
    const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
    const [errors, setErrors] = useState<FormErrors>({});
    const [showAdvanced, setShowAdvanced] = useState(false);
    const [searchResults, setSearchResults] = useState<Article[]>([]);

    const handleSubmit = async (formData: FormData) => {
        // Clear previous messages and errors
        setMessage(null);
        setErrors({});

        startTransition(async () => {
            try {
                const result = await performSearch(formData);

                if (result.success) {
                    setMessage({ type: "success", text: result.message });
                    // You could redirect to search results page or update the current page
                    // window.location.href = `/search?q=${formData.get('query')}`;
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

    const handleSearchResultsChange = (results: Article[]) => {
        setSearchResults(results);
    };

    return (
        <div className={`search-form ${className}`}>
            <form action={handleSubmit} className="search-form-container">
                <div className="search-input-section">
                    <DeferredSearchInput items={articles} searchKey="title" onResultsChange={handleSearchResultsChange} placeholder={placeholder} className="deferred-search-input" />
                </div>

                {showAdvancedSearch && (
                    <div className="advanced-search-section">
                        <button type="button" onClick={() => setShowAdvanced(!showAdvanced)} className="advanced-toggle">
                            {showAdvanced ? "Hide" : "Show"} Advanced Search
                        </button>

                        {showAdvanced && (
                            <div className="advanced-options">
                                <div className="form-group">
                                    <label htmlFor="category">Category</label>
                                    <select name="category" id="category" className="form-control">
                                        <option value="">All Categories</option>
                                        {categories.map((category) => (
                                            <option key={category.id} value={category.id}>
                                                {category.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="author">Author</label>
                                    <select name="author" id="author" className="form-control">
                                        <option value="">All Authors</option>
                                        {authors.map((author) => (
                                            <option key={author.id} value={author.id}>
                                                {author.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="date">Date Range</label>
                                    <input type="date" name="date" id="date" className="form-control" />
                                </div>
                            </div>
                        )}
                    </div>
                )}

                <button type="submit" disabled={isPending} className="search-submit-btn">
                    {isPending ? "Searching..." : "Search"}
                </button>
            </form>

            {/* Display search results */}
            {searchResults.length > 0 && (
                <div className="search-results-preview">
                    <h4>Quick Results ({searchResults.length})</h4>
                    <div className="results-list">
                        {searchResults.slice(0, 5).map((article) => (
                            <div key={article.id} className="result-item">
                                <h5>{article.title}</h5>
                                <p>{article.excerpt}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {message && <div className={`message ${message.type}`}>{message.text}</div>}

            {Object.keys(errors).length > 0 && (
                <div className="errors">
                    {Object.entries(errors).map(([field, error]) => (
                        <div key={field} className="error">
                            {field}: {error}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
