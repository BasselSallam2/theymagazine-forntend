import LoadingSpinner from "@/components/elements/LoadingSpinner"

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <LoadingSpinner size="lg" color="primary" className="mb-4" />
        <h1 className="font-weight-bold text-2xl mb-2">News Board</h1>
        <p className="text-uppercase text-gray-600">Loading...</p>
      </div>
    </div>
  )
}
