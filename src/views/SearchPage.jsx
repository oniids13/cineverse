import { useState, useEffect } from "react";
import { fetchMovieSearch, fetchTvSearch } from "../API/data";
import { useSearchParams, useParams } from "react-router-dom";
import MediaGridSection from "../sections/MediaGridSection";
import HeroSection from "../sections/HeroSection";
import LoadingSpinner from "../components/LoadingSpinner";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const { mediaType } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const [sortedResults, setSortedResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("desc"); // 'desc' or 'asc'

  useEffect(() => {
    const query = searchParams.get("q");
    if (query) {
      setLoading(true);
      const searchFunction =
        mediaType === "movie" ? fetchMovieSearch : fetchTvSearch;
      searchFunction(query)
        .then((results) => {
          setSearchResults(results);
          setSortedResults(results);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching search results:", error);
          setLoading(false);
        });
    }
  }, [searchParams, mediaType]);

  // Sort results when sort order changes
  useEffect(() => {
    const sorted = [...searchResults].sort((a, b) => {
      const yearA = parseInt(a.mediaYear) || 0;
      const yearB = parseInt(b.mediaYear) || 0;
      return sortOrder === "desc" ? yearB - yearA : yearA - yearB;
    });
    setSortedResults(sorted);
  }, [sortOrder, searchResults]);

  const query = searchParams.get("q");
  const title = `Search Results for "${query}"`;
  const content = `Showing results for ${
    mediaType === "movie" ? "movies" : "TV shows"
  } matching "${query}"`;

  return (
    <div>
      <HeroSection title={title} content={content} />

      {/* Sort Filter */}
      <div className="container mx-auto px-4 mt-6">
        <div className="flex items-center justify-center gap-4">
          <label
            htmlFor="sortOrder"
            className="text-lg font-semibold text-gray-700"
          >
            Sort by Year:
          </label>
          <select
            id="sortOrder"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="desc">Newest First</option>
            <option value="asc">Oldest First</option>
          </select>
        </div>
      </div>

      {loading ? (
        <LoadingSpinner text="Searching for movies..." />
      ) : (
        <MediaGridSection
          content="Search Results"
          mediaType={mediaType === "movie" ? "Movies" : "TV shows"}
          mediaList={sortedResults.map((media) => ({
            ...media,
            state: {
              from: "search",
              searchQuery: query,
              mediaType: mediaType,
            },
          }))}
        />
      )}
    </div>
  );
};

export default SearchPage;
