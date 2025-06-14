import axios from "axios";

const API_KEY = "e51b75b59a928ffc4d072a95927442c9";
const API_AUTH =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTFiNzViNTlhOTI4ZmZjNGQwNzJhOTU5Mjc0NDJjOSIsIm5iZiI6MTcyOTE3NDI4My42NjIzMjgsInN1YiI6IjY2NTA0MWNkNDY2NzQ0MGY4OTM1MGM2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VUuTbZPtRaYLT8FN-wbCfESkfWdeezIs7cK1m8-DIPA";

// API Links
const POPULAR_MOVIE_URL = "https://api.themoviedb.org/3/movie/popular";
const POPULAR_TV_URL = "https://api.themoviedb.org/3/tv/popular";
const MOVIES_TOP_URL = "https://api.themoviedb.org/3/movie/top_rated";
const TV_TOP_URL = "https://api.themoviedb.org/3/tv/top_rated";
const TRENDING_MOVIE_URL = "https://api.themoviedb.org/3/trending/movie/day";
const TRENDING_TV_URL = "https://api.themoviedb.org/3/trending/tv/day";

async function fetchPopularMovies() {
  const popularMovies = [];

  try {
    const response = await axios.get(POPULAR_MOVIE_URL, {
      headers: {
        Authorization: `Bearer ${API_AUTH}`,
      },
    });

    const popularMovieData = response.data.results;
    popularMovieData.forEach((movie) => {
      let popularMovie = {
        mediaTitle: movie.title,
        mediaPoster: "https://image.tmdb.org/t/p/w500" + movie.poster_path,
        mediaYear: movie.release_date.slice(0, 4),
        mediaId: movie.id,
        mediaType: "movie",
      };
      popularMovies.push(popularMovie);
    });

    return popularMovies;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    return [];
  }
}

async function fetchPopularTVshows() {
  const popularTVshows = [];

  try {
    const response = await axios.get(POPULAR_TV_URL, {
      headers: {
        Authorization: `Bearer ${API_AUTH}`,
      },
    });

    const popularTvshowsData = response.data.results;
    popularTvshowsData.forEach((tvShow) => {
      let popularTVshow = {
        mediaTitle: tvShow.name,
        mediaPoster: "https://image.tmdb.org/t/p/w500" + tvShow.poster_path,
        mediaYear: tvShow.first_air_date.slice(0, 4),
        mediaId: tvShow.id,
        mediaType: "tv",
      };
      popularTVshows.push(popularTVshow);
    });

    return popularTVshows;
  } catch (error) {
    console.error("Error fetching popular tv shows:", error);
    return [];
  }
}

const fetchTopMovies = async () => {
  const topMovies = [];

  try {
    const response = await axios.get(MOVIES_TOP_URL, {
      headers: {
        Authorization: `Bearer ${API_AUTH}`,
      },
    });

    const topMovieData = response.data.results;
    topMovieData.forEach((movie) => {
      let topMovie = {
        mediaTitle: movie.title,
        mediaPoster: "https://image.tmdb.org/t/p/w500" + movie.poster_path,
        mediaYear: movie.release_date.slice(0, 4),
        mediaId: movie.id,
        mediaType: "movie",
      };
      topMovies.push(topMovie);
    });
    return topMovies;
  } catch (error) {
    console.error("Error fetching Top Movies:", error);
    return [];
  }
};

const fetchTrendingMovies = async () => {
  const trendingMovies = [];

  try {
    const response = await axios.get(TRENDING_MOVIE_URL, {
      headers: {
        Authorization: `Bearer ${API_AUTH}`,
      },
    });

    const trendingMovieData = response.data.results;
    trendingMovieData.forEach((movie) => {
      let topMovie = {
        mediaTitle: movie.title,
        mediaPoster: "https://image.tmdb.org/t/p/w500" + movie.poster_path,
        mediaYear: movie.release_date.slice(0, 4),
        mediaId: movie.id,
        mediaType: "movie",
      };
      trendingMovies.push(topMovie);
    });
    return trendingMovies;
  } catch (error) {
    console.error("Error fetching Trending Movies:", error);
    return [];
  }
};

const fetchTopTVshows = async () => {
  const topTVshows = [];

  try {
    const response = await axios.get(TV_TOP_URL, {
      headers: {
        Authorization: `Bearer ${API_AUTH}`,
      },
    });

    const topTVshowData = response.data.results;
    topTVshowData.forEach((tv) => {
      let topTVshow = {
        mediaTitle: tv.name,
        mediaPoster: "https://image.tmdb.org/t/p/w500" + tv.poster_path,
        mediaYear: tv.first_air_date.slice(0, 4),
        mediaId: tv.id,
        mediaType: "tv",
      };
      topTVshows.push(topTVshow);
    });
    return topTVshows;
  } catch (error) {
    console.error("Error fetching Top TV shows:", error);
    return [];
  }
};

const fetchTrendingTVshows = async () => {
  const trendingTVshows = [];

  try {
    const response = await axios.get(TRENDING_TV_URL, {
      headers: {
        Authorization: `Bearer ${API_AUTH}`,
      },
    });

    const trendingTVshowData = response.data.results;
    trendingTVshowData.forEach((tv) => {
      let trendingTVshow = {
        mediaTitle: tv.name,
        mediaPoster: "https://image.tmdb.org/t/p/w500" + tv.poster_path,
        mediaYear: tv.first_air_date.slice(0, 4),
        mediaId: tv.id,
        mediaType: "tv",
      };
      trendingTVshows.push(trendingTVshow);
    });
    return trendingTVshows;
  } catch (error) {
    console.error("Error fetching Trending TV shows:", error);
    return [];
  }
};

export {
  fetchPopularMovies,
  fetchPopularTVshows,
  fetchTopMovies,
  fetchTrendingMovies,
  fetchTopTVshows,
  fetchTrendingTVshows,
};
