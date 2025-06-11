import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App.jsx";
import Home from "../views/Home.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
    </Route>
  )
);

export default router;
