import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App.jsx";
import Home from "../views/Home.jsx";
import Movies from "../views/Movies.jsx";
import TvShows from "../views/TvShows.jsx";
import ErrorPage from "../views/ErrorPage.jsx";
import MediaPage from "../views/MediaPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/tv-shows" element={<TvShows />} />
      <Route path="/:mediaType/:mediaId" element={<MediaPage />} />
    </Route>
  )
);

export default router;
