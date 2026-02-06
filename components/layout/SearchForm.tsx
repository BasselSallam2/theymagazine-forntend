"use client";

import { useState, useEffect, useCallback } from "react";
import SearchTypeSelect from "@/util/CustomSelect";
import Link from "next/link";
import { NoScript } from "@/components/elements/NoScriptFallback";

// تعريف أنواع البيانات المستلمة من الـ API للاقتراحات
interface ApiSuggestionPost {
    _id: string;
    title: string;
    slug: string;
    category: {
        slug: string;
        name: string;
    };
    image: string[];
}

interface ApiSearchResponse {
    posts: ApiSuggestionPost[];
}

interface Suggestion {
    label: string; // Post title
    href: string; // Full post link
}

interface SearchFormProps {
    className?: string;
    placeholder?: string;
    onSubmit?: (query: string, type: string) => void;
}

// عنوان الـ API (تم تثبيته الآن ليتضمن /api)
const API_BASE_URL = process.env.NEXT_PUBLIC_API_SERVER || 'http://localhost:8080/api';

export default function SearchForm({
    className = "",
    placeholder = "Type your key words and hit enter",
    onSubmit
}: SearchFormProps) {
    const [searchType, setSearchType] = useState("");
    const [query, setQuery] = useState(""); // 1. حالة لتخزين استعلام البحث الحالي
    const [suggestions, setSuggestions] = useState<Suggestion[]>([]); // 2. حالة لتخزين الاقتراحات
    const [isSearching, setIsSearching] = useState(false);

    // 🚀 دالة جلب الاقتراحات من الـ API
    const fetchSuggestions = useCallback(async (searchQuery: string) => {
        if (!searchQuery || searchQuery.length < 3) {
            setSuggestions([]);
            return;
        }

        setIsSearching(true);
        const endpoint = `${API_BASE_URL}/search/autocomplete?query=${encodeURIComponent(searchQuery)}`;

        try {
            const response = await fetch(endpoint);
            
            if (!response.ok) {
                console.error("Autocomplete fetch failed. Status:", response.status);
                setSuggestions([]);
                return;
            }

            const result: ApiSearchResponse = await response.json();

            // تحويل بيانات الـ API إلى تنسيق الفرونت اند المطلوب (Suggestion[])
            const transformedSuggestions: Suggestion[] = result.posts.map(post => ({
                label: post.title,
                // بناء رابط البوست: /category-slug/post-slug مع fallback
                href: post.category ? `/${post.category.slug}/${post.slug}` : `/general/${post.slug}`
            }));

            setSuggestions(transformedSuggestions);

        } catch (error) {
            console.error("Error fetching suggestions:", error);
            setSuggestions([]);
        } finally {
            setIsSearching(false);
        }
    }, []);

    // ⏱️ Debouncing Logic (تنفيذ الـ API بعد توقف الكتابة)
    useEffect(() => {
        // تأخير تنفيذ الجلب لمدة 300 مللي ثانية
        const debounceTimeout = setTimeout(() => {
            fetchSuggestions(query);
        }, 300);

        // وظيفة التنظيف: إلغاء الـ Timeout إذا تغير الـ query قبل انتهاء المهلة
        return () => clearTimeout(debounceTimeout);
    }, [query, fetchSuggestions]);


    // دالة التعامل مع إرسال النموذج (الضغط على Enter أو زر البحث)
    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        // إذا كان هناك onSubmit prop، نفذه
        if (onSubmit) {
            onSubmit(query, searchType);
        } else {
            // إذا لم يكن هناك onSubmit، قم بالتوجيه المباشر إلى صفحة البحث
            window.location.href = `/search?query=${encodeURIComponent(query)}&type=${encodeURIComponent(searchType)}`;
        }
    };

    return (
        <>
            {/*Start search form*/}
            <div className="main-search-form">
                <div className="container">
                    <div className="main-search-form-cover pt-50 pb-50 m-auto">
                        <div className="row mb-20">
                            <div className="col-12">
                                <form
                                    action="/search"
                                    method="GET"
                                    className={`search-header ${className}`}
                                    onSubmit={handleFormSubmit}
                                >
                                    <div className="input-group w-100">
                                        <SearchTypeSelect value={searchType} onChange={setSearchType} />
                                        <input
                                            type="text"
                                            name="query"
                                            className="form-control"
                                            placeholder={placeholder}
                                            required
                                            value={query} // ربط قيمة الإدخال بالـ State
                                            onChange={(e) => setQuery(e.target.value)} // تحديث الـ State عند الكتابة
                                        />
                                        <button className="btn btn-black" type="submit" disabled={isSearching}>
                                            {isSearching ? <i className="ti-reload fa-spin mr-5" /> : <i className="ti-search mr-5" />} Search
                                        </button>
                                    </div>
                                    <NoScript>
                                        <div className="mt-3">
                                            <p className="text-muted small">
                                                <strong>Note:</strong> For enhanced search features, please enable JavaScript.
                                            </p>
                                        </div>
                                    </NoScript>
                                </form>
                            </div>
                        </div>
                        
                        {/* 4. عرض الاقتراحات (Suggestions) */}
                        {suggestions.length > 0 && (
                            <div className="row">
                                <div className="col-12 font-small suggested-area">
                                    <p className="suggested font-heading mb-10">
                                        <strong>Suggested Posts</strong>
                                    </p>
                                    <ul className="list-inline d-inline-block">
                                        {suggestions.map((suggestion, index) => (
                                            <li key={index} className="list-inline-item">
                                                {/* استخدام عنوان المقالة كرابط */}
                                                <Link href={suggestion.href}>{suggestion.label}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}
                        {/* عرض رسالة أثناء البحث (اختياري) */}
                        {isSearching && query.length >= 3 && suggestions.length === 0 && (
                            <div className="row mt-3">
                                <div className="col-12 text-muted">Searching...</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}