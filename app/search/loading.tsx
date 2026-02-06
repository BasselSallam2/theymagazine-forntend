import SkeletonLoader from "@/components/elements/SkeletonLoader"

export default function SearchLoading() {
    return (
        <div className="section-padding">
            <div className="container">
                {/* Search header skeleton */}
                <div className="mb-8">
                    <div className="animate-pulse">
                        <div className="bg-gray-200 h-8 rounded w-1/3 mb-4"></div>
                        <div className="bg-gray-200 h-4 rounded w-1/2"></div>
                    </div>
                </div>

                {/* Search results skeleton */}
                <div className="row">
                    <div className="col-lg-8">
                        <SkeletonLoader type="list" count={5} />
                    </div>
                    <div className="col-lg-4">
                        <div className="animate-pulse space-y-6">
                            <div>
                                <div className="bg-gray-200 h-6 rounded w-1/2 mb-4"></div>
                                <SkeletonLoader type="list" count={3} />
                            </div>
                        </div>
                    </div>
                </div>

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