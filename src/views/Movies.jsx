import HeroSection from "../sections/HeroSection";
import MediaGridSection from "../sections/MediaGridSection";
import { fetchTopMovies, fetchTrendingMovies } from "../API/data";

import { useState, useEffect } from "react";

const Movies = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    fetchTopMovies().then((data) => setTopMovies(data));
    fetchTrendingMovies().then((data) => setTrendingMovies(data));
  }, []);

  return (
    <>
      <div>
        <HeroSection
          title="Explore Movies"
          content="Discover top-rated and trending movies from around the world."
        />
      </div>
      <div>
        <MediaGridSection
          content="Top Rated"
          mediaType="Movies"
          mediaList={topMovies}
        />
      </div>
      <div>
        <MediaGridSection
          content="Trending"
          mediaType="Movies"
          mediaList={trendingMovies}
        />
      </div>
    </>
  );
};

export default Movies;
