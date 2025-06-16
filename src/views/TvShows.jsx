import HeroSection from "../sections/HeroSection";
import MediaGridSection from "../sections/MediaGridSection";
import { fetchTopTVshows, fetchTrendingTVshows } from "../API/data";
import LoadingSpinner from "../components/LoadingSpinner";
import { useState, useEffect } from "react";

const TvShows = () => {
  const [topTVshows, setTopTVshows] = useState([]);
  const [trendingTVshows, setTrendingTVshows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [topTVshowsData, trendingTVshowsData] = await Promise.all([
          fetchTopTVshows(),
          fetchTrendingTVshows(),
        ]);
        setTopTVshows(topTVshowsData);
        setTrendingTVshows(trendingTVshowsData);
      } catch (error) {
        console.error("Error fetching TV shows data:", error);
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
          title="Explore TV Shows"
          content="Discover top-rated and trending TV shows from around the world."
        />
      </div>
      {loading ? (
        <LoadingSpinner text="Loading TV shows..." />
      ) : (
        <div>
          <MediaGridSection
            content="Top Rated"
            mediaType="TV shows"
            mediaList={topTVshows}
            from="tv-shows"
          />
          <MediaGridSection
            content="Trending"
            mediaType="TV shows"
            mediaList={trendingTVshows}
            from="tv-shows"
          />
        </div>
      )}
    </>
  );
};

export default TvShows;
