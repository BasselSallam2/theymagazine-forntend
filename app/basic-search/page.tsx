import { Suspense } from "react";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { performSearchServer } from "@/app/actions/forms";

interface BasicSearchPageProps {
    searchParams: Promise<{
        q?: string;
        type?: string;
    }>;
}

async function BasicSearchResults({ query }: { query: string }) {
    if (!query) {
        return (
            <div className="text-center py-5">
                <h3>Enter a search term to find articles</h3>
                <p className="text-muted">Use the search form above to find content on our website.</p>
            </div>
        );
    }

    // Create a FormData object to simulate form submission
    const formData = new FormData();
    formData.append("query", query);

    try {
        const result = await performSearchServer(formData);

        if (result.success) {
            return (
                <div className="search-results">
                    <h3>Search Results for: "{query}"</h3>
                    <p className="text-muted mb-4">Found results (basic search mode)</p>

                    {/* Placeholder for actual search results */}
                    <div className="alert alert-info">
                        <p>This is a basic search interface. For enhanced search features including:</p>
                        <ul>
                            <li>Real-time search suggestions</li>
                            <li>Advanced filtering options</li>
                            <li>Search within specific categories</li>
                            <li>Search by author or date</li>
                        </ul>
                        <p>Please enable JavaScript in your browser.</p>
                    </div>

                    {/* You can add actual search results here */}
                    <div className="row">
                        <div className="col-md-8">
                            <div className="alert alert-warning">
                                <strong>Note:</strong> This is a simplified search interface. For the full search experience, please enable JavaScript.
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Search Tips</h5>
                                    <ul className="list-unstyled">
                                        <li>• Use specific keywords</li>
                                        <li>• Try different search terms</li>
                                        <li>• Check spelling</li>
                                        <li>• Use quotes for exact phrases</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="alert alert-danger">
                    <h4>Search Error</h4>
                    <p>{result.message}</p>
                </div>
            );
        }
    } catch (error) {
        return (
            <div className="alert alert-danger">
                <h4>Search Error</h4>
                <p>An error occurred while performing the search. Please try again.</p>
            </div>
        );
    }
}

export default async function BasicSearchPage({ searchParams }: BasicSearchPageProps) {
    const params = await searchParams;
    const query = params.q || "";

    return (
        <Layout>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="mb-4">Basic Search</h1>

                        {/* Basic search form */}
                        <div className="card mb-4">
                            <div className="card-body">
                                <form action="/basic-search" method="GET">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <input type="text" name="q" className="form-control" placeholder="Enter your search terms..." defaultValue={query} required />
                                        </div>
                                        <div className="col-md-4">
                                            <button type="submit" className="btn btn-primary w-100">
                                                Search
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Search results */}
                        <Suspense fallback={<div>Searching...</div>}>
                            <BasicSearchResults query={query} />
                        </Suspense>

                        {/* Alternative options */}
                        <div className="mt-5">
                            <h4>Alternative Options</h4>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Browse Categories</h5>
                                            <p className="card-text">Explore articles by category instead of searching.</p>
                                            <Link href="/category" className="btn btn-outline-primary">
                                                Browse Categories
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Contact Us</h5>
                                            <p className="card-text">Can't find what you're looking for? Contact us for help.</p>
                                            <Link href="/contact" className="btn btn-outline-primary">
                                                Contact Us
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
