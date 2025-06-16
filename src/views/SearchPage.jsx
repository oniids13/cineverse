import { useState, useEffect } from "react";
import { fetchMovieSearch, fetchTvSearch } from "../API/data";
import { useSearchParams, useParams } from "react-router-dom";
import MediaGridSection from "../sections/MediaGridSection";
import HeroSection from "../sections/HeroSection";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const { mediaType } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = searchParams.get("q");
    if (query) {
      setLoading(true);
      const searchFunction =
        mediaType === "movie" ? fetchMovieSearch : fetchTvSearch;
      searchFunction(query)
        .then((results) => {
          setSearchResults(results);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching search results:", error);
          setLoading(false);
        });
    }
  }, [searchParams, mediaType]);

  const query = searchParams.get("q");
  const title = `Search Results for "${query}"`;
  const content = `Showing results for ${
    mediaType === "movie" ? "movies" : "TV shows"
  } matching "${query}"`;

  return (
    <div>
      <HeroSection title={title} content={content} />
      {loading ? (
        <div className="text-center py-8">Loading...</div>
      ) : (
        <MediaGridSection
          content="Search Results"
          mediaType={mediaType === "movie" ? "Movies" : "TV shows"}
          mediaList={searchResults}
        />
      )}
    </div>
  );
};

export default SearchPage;
