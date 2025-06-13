import { useState, useEffect } from "react";

import HeroSection from "../sections/HeroSection";
import SearchSection from "../sections/SearchSection";
import PopularSection from "../sections/PopularSection";

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
      <HeroSection />
      <SearchSection />
      <PopularSection mediaType="Movies" mediaList={popularMovies} />
      <PopularSection mediaType="TV shows" mediaList={popularTVshows} />
    </div>
  );
};

export default Home;
