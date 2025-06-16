import HeroSection from "../sections/HeroSection";
import MediaGridSection from "../sections/MediaGridSection";
import { fetchTopMovies, fetchTrendingMovies } from "../API/data";
import LoadingSpinner from "../components/LoadingSpinner";

import { useState, useEffect } from "react";

const Movies = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [topMoviesData, trendingMoviesData] = await Promise.all([
          fetchTopMovies(),
          fetchTrendingMovies(),
        ]);
        setTopMovies(topMoviesData);
        setTrendingMovies(trendingMoviesData);
      } catch (error) {
        console.error("Error fetching movies data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div>
        <HeroSection
          title="Explore Movies"
          content="Discover top-rated and trending movies from around the world."
        />
      </div>
      {loading ? (
        <LoadingSpinner text="Loading movies..." />
      ) : (
        <>
          <div>
            <MediaGridSection
              content="Top Rated"
              mediaType="Movies"
              mediaList={topMovies}
              from="movies"
            />
          </div>
          <div>
            <MediaGridSection
              content="Trending"
              mediaType="Movies"
              mediaList={trendingMovies}
              from="movies"
            />
          </div>
        </>
      )}
    </>
  );
};

export default Movies;
