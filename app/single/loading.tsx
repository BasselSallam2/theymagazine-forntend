import SkeletonLoader from "@/components/elements/SkeletonLoader"

export default function SingleArticleLoading() {
    return (
        <div className="section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        {/* Article header skeleton */}
                        <div className="mb-6">
                            <div className="animate-pulse">
                                <div className="bg-gray-200 h-2 rounded w-1/4 mb-4"></div>
                                <div className="bg-gray-200 h-8 rounded w-3/4 mb-4"></div>
                                <div className="bg-gray-200 h-4 rounded w-1/2 mb-4"></div>
                                <div className="bg-gray-200 h-64 rounded-lg"></div>
                            </div>
                        </div>

                        {/* Article content skeleton */}
                        <div className="mb-8">
                            <SkeletonLoader type="text" count={8} />
                        </div>

                        {/* Related articles skeleton */}
                        <div className="mb-8">
                            <div className="bg-gray-200 h-6 rounded w-1/3 mb-4"></div>
                            <SkeletonLoader type="grid" count={3} />
                        </div>
                    </div>

                    <div className="col-lg-4">
                        {/* Sidebar skeleton */}
                        <div className="animate-pulse space-y-6">
                            <div>
                                <div className="bg-gray-200 h-6 rounded w-1/2 mb-4"></div>
                                <SkeletonLoader type="list" count={4} />
                            </div>
                            <div>
                                <div className="bg-gray-200 h-6 rounded w-1/2 mb-4"></div>
                                <SkeletonLoader type="list" count={3} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 