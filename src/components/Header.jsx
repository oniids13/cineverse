import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header className="bg-primary">
        <div className="flex items-center justify-around">
          <div className="flex items-center gap-2">
            <LocalMoviesIcon sx={{ color: "#01b4e4" }} />
            <h1 className="text-3xl font-bold text-light">Cineverse</h1>
          </div>
          <nav className="text-light flex gap-4">
            <Link to="/">
              <button className="nav-btn hover:text-secondary">Home</button>
            </Link>
            <Link to="/movies">
              <button className="nav-btn hover:text-secondary">Movies</button>
            </Link>
            <Link to="/tv-shows">
              <button className="nav-btn hover:text-secondary">TV shows</button>
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
