import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <LocalMoviesIcon />
            <h1 className="text-2xl font-bold">Cineverse</h1>
          </div>
          <nav>
            <Link to="/">
              <button>Home</button>
            </Link>
            <Link to="/movies">
              <button>Movies</button>
            </Link>
            <Link to="/tv-shows">
              <button>TV shows</button>
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
