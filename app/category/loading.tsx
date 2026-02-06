import SkeletonLoader from "@/components/elements/SkeletonLoader"

export default function CategoryLoading() {
    return (
        <div className="section-padding">
            <div className="container">
                {/* Header skeleton */}
                <div className="mb-8">
                    <div className="animate-pulse">
                        <div className="bg-gray-200 h-8 rounded w-1/3 mb-4"></div>
                        <div className="bg-gray-200 h-4 rounded w-1/2"></div>
                    </div>
                </div>

                {/* Articles grid skeleton */}
                <SkeletonLoader type="grid" count={6} />

                {/* Pagination skeleton */}
                <div className="mt-8">
                    <div className="flex justify-center space-x-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <div key={i} className="bg-gray-200 h-10 w-10 rounded animate-pulse"></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
} 