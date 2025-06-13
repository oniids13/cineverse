import axios from "axios";

const API_KEY = "e51b75b59a928ffc4d072a95927442c9";
const API_AUTH =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTFiNzViNTlhOTI4ZmZjNGQwNzJhOTU5Mjc0NDJjOSIsIm5iZiI6MTcyOTE3NDI4My42NjIzMjgsInN1YiI6IjY2NTA0MWNkNDY2NzQ0MGY4OTM1MGM2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VUuTbZPtRaYLT8FN-wbCfESkfWdeezIs7cK1m8-DIPA";

// API Links
const POPULAR_MOVIE_URL = "https://api.themoviedb.org/3/movie/popular";
const POPULAR_TV_URL = "https://api.themoviedb.org/3/tv/popular";

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

export { fetchPopularMovies, fetchPopularTVshows };
