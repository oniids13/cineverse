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
const SPECIFIC_MOVIE_URL = "https://api.themoviedb.org/3/movie";
const SPECIFIC_TV_URL = "https://api.themoviedb.org/3/tv";
const SEARCH_MOVIE_URL = "https://api.themoviedb.org/3/search/movie";
const SEARCH_TV_URL = "https://api.themoviedb.org/3/search/tv";

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

const fetchSpecificMovie = async (movieId) => {
  try {
    const response = await axios.get(`${SPECIFIC_MOVIE_URL}/${movieId}`, {
      headers: { Authorization: `Bearer ${API_AUTH}` },
    });

    const data = response.data;
    return {
      imgUrl: "https://image.tmdb.org/t/p/w500" + data.backdrop_path,
      title: data.title,
      year: data.release_date?.split("-")[0],
      description: data.overview,
      genre: data.genres?.[0]?.name,
      popularity: Math.round(data.popularity * 100) / 100,
      runtime: data.runtime + " minutes",
      type: "movie",
      voteAverage: data.vote_average,
      voteCount: data.vote_count,
      imdbId: data.imdb_id,
      tagline: data.tagline,
      budget: data.budget,
      revenue: data.revenue,
      productionCompanies: data.production_companies,
      productionCountries: data.production_countries,
      originalLanguage: data.original_language,
      status: data.status,
      homepage: data.homepage,
      releaseDate: data.release_date,
    };
  } catch (error) {
    console.error("Error fetching Specific Movie:", error);
  }
};

const fetchSpecificTv = async (TvId) => {
  try {
    const response = await axios.get(`${SPECIFIC_TV_URL}/${TvId}`, {
      headers: {
        Authorization: `Bearer ${API_AUTH}`,
      },
    });

    const data = response.data;
    return {
      imgUrl: "https://image.tmdb.org/t/p/w500" + data.backdrop_path,
      title: data.name,
      year: data.first_air_date?.split("-")[0],
      description: data.overview,
      genre: data.genres?.[0]?.name,
      popularity: Math.round(data.popularity * 100) / 100,
      noOfSeasons: data.number_of_seasons,
      noOfEpisodes: data.number_of_episodes,
      type: "tv",

      // New TV-specific fields
      voteAverage: data.vote_average,
      voteCount: data.vote_count,
      tagline: data.tagline,
      status: data.status,
      homepage: data.homepage,
      createdBy: data.created_by,
      networks: data.networks,
      firstAirDate: data.first_air_date,
      lastAirDate: data.last_air_date,
      inProduction: data.in_production,
      lastEpisode: data.last_episode_to_air,
      nextEpisode: data.next_episode_to_air,
      episodeRunTime: data.episode_run_time,
      seasons: data.seasons,
      productionCompanies: data.production_companies,
      originCountry: data.origin_country,
      originalLanguage: data.original_language,
      spokenLanguages: data.spoken_languages,
      showType: data.type,
    };
  } catch (error) {
    console.error("Error fetching Specific TV:", error);
  }
};

const fetchMovieSearch = async (query) => {
  const movies = [];
  const config = {
    headers: { Authorization: `Bearer ${API_AUTH}` },
    "Content-Type": "application/json",
    params: {
      api_key: API_KEY,
      query: query,
    },
  };
  try {
    const response = await axios.get(SEARCH_MOVIE_URL, config);
    const movieData = response.data.results;
    movieData.forEach((movie) => {
      let movieSearchData = {
        mediaTitle: movie.title,
        mediaPoster: "https://image.tmdb.org/t/p/w500" + movie.poster_path,
        mediaYear: movie.release_date.slice(0, 4),
        mediaId: movie.id,
        mediaType: "movie",
      };
      movies.push(movieSearchData);
    });

    return movies;
  } catch (error) {
    console.error("Error fetching Movie Search:", error);
    return [];
  }
};

const fetchTvSearch = async (query) => {
  const tvshows = [];
  const config = {
    headers: { Authorization: `Bearer ${API_AUTH}` },
    params: {
      api_key: API_KEY,
      query: query,
    },
  };
  try {
    const response = await axios.get(SEARCH_TV_URL, config);
    const tvData = response.data.results;
    tvData.forEach((tvShow) => {
      let tvSearchData = {
        mediaTitle: tvShow.name,
        mediaPoster: "https://image.tmdb.org/t/p/w500" + tvShow.poster_path,
        mediaYear: tvShow.first_air_date.slice(0, 4),
        mediaId: tvShow.id,
        mediaType: "tv",
      };
      tvshows.push(tvSearchData);
    });
    return tvshows;
  } catch (error) {
    console.error("Error fetching Tv show Search:", error);
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
  fetchSpecificMovie,
  fetchSpecificTv,
  fetchMovieSearch,
  fetchTvSearch,
};
