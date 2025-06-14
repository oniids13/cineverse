import HeroSection from "../sections/HeroSection";
import MediaGridSection from "../sections/MediaGridSection";
import { fetchTopTVshows, fetchTrendingTVshows } from "../API/data";
import { useState, useEffect } from "react";

const TvShows = () => {
  const [topTVshows, setTopTVshows] = useState([]);
  const [trendingTVshows, setTrendingTVshows] = useState([]);

  useEffect(() => {
    fetchTopTVshows().then((data) => setTopTVshows(data));
    fetchTrendingTVshows().then((data) => setTrendingTVshows(data));
  }, []);

  return (
    <>
      <div>
        <HeroSection
          title="Explore TV Shows"
          content="Discover top-rated and trending TV shows from around the world."
        />
      </div>
      <div>
        <MediaGridSection
          content="Top Rated"
          mediaType="TV shows"
          mediaList={topTVshows}
        />
        <MediaGridSection
          content="Trending"
          mediaType="TV shows"
          mediaList={trendingTVshows}
        />
      </div>
    </>
  );
};

export default TvShows;
