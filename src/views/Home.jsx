import { useState, useEffect } from "react";

import HeroSection from "../sections/HeroSection";
import SearchSection from "../sections/SearchSection";
import MediaGridSection from "../sections/MediaGridSection";

// API Data
import { fetchPopularMovies, fetchPopularTVshows } from "../API/data";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularTVshows, setPopularTVshows] = useState([]);

  useEffect(() => {
    fetchPopularMovies().then((data) => setPopularMovies(data));
    fetchPopularTVshows().then((data) => setPopularTVshows(data));
  }, []);

  return (
    <div>
      <HeroSection
        title="Welcome to CineVerse"
        content="Discover thousands of movies and TV shows, get detailed information, and stay updated with what's trending."
      />
      <SearchSection />
      <MediaGridSection
        content="Popular"
        mediaType="Movies"
        mediaList={popularMovies}
      />
      <MediaGridSection
        content="Popular"
        mediaType="TV shows"
        mediaList={popularTVshows}
      />
    </div>
  );
};

export default Home;
