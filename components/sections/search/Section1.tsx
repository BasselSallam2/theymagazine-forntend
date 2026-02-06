import Link from "next/link";

interface SearchSection1Props {
  searchQuery?: string;
  totalResults?: number;
  className?: string;
}

export default function Section1({
  searchQuery = "",
  totalResults = 0,
  className = ""
}: SearchSection1Props) {
  const hasQuery = searchQuery.trim().length > 0;
  const hasResults = totalResults > 0;

  return (
    <>
      {/*archive header*/}
      <div className={`archive-header text-center mt-30 ${className}`}>
        {!hasQuery && (
          <>
            <div className="breadcrumb font-small mb-15">Start by typing a search term</div>
            <h2 className="font-weight-bold">
              <span className="font-family-normal">Search our articles</span>
            </h2>
          </>
        )}
        {hasQuery && (
          <>
            <div className="breadcrumb font-small mb-15">
              {hasResults ? "We found" : "No results for"} {totalResults.toLocaleString()} {hasResults ? "results for:" : "matches for:"}
            </div>
            <h2 className="font-weight-bold">
              <span className="font-family-normal">"{searchQuery}"</span>
            </h2>
          </>
        )}
        <span className="line-dots mt-30 mb-30" />
      </div>
    </>
  );
}
