import { useState, useEffect } from "react";

import HeroSection from "../sections/HeroSection";
import SearchSection from "../sections/SearchSection";
import MediaGridSection from "../sections/MediaGridSection";
import LoadingSpinner from "../components/LoadingSpinner";

// API Data
import { fetchPopularMovies, fetchPopularTVshows } from "../API/data";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularTVshows, setPopularTVshows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [moviesData, tvShowsData] = await Promise.all([
          fetchPopularMovies(),
          fetchPopularTVshows(),
        ]);
        setPopularMovies(moviesData);
        setPopularTVshows(tvShowsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <HeroSection
        title="Welcome to CineVerse"
        content="Discover thousands of movies and TV shows, get detailed information, and stay updated with what's trending."
      />
      <SearchSection />
      {loading ? (
        <LoadingSpinner text="Loading popular content..." />
      ) : (
        <>
          <MediaGridSection
            content="Popular"
            mediaType="Movies"
            mediaList={popularMovies}
            from="home"
          />
          <MediaGridSection
            content="Popular"
            mediaType="TV shows"
            mediaList={popularTVshows}
            from="home"
          />
        </>
      )}
    </div>
  );
};

export default Home;
