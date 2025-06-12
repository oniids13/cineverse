import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import { Link } from "react-router-dom";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="bg-primary">
        <div className="flex items-center justify-around">
          <div className="flex items-center gap-2">
            <LocalMoviesIcon sx={{ color: "#01b4e4" }} />
            <h1 className="text-3xl font-bold text-light">Cineverse</h1>
          </div>

          {/* Hamburger menu */}

          <button className="md:hidden text-light" onClick={toggleMenu}>
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>

          {/* Desktop View */}

          <nav className="hidden md:flex text-light  gap-4">
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

        {/* Mobile View */}

        <div
          className={`md:hidden fixed inset-0 bg-primary z-50 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8">
            <Link to="/" onClick={toggleMenu}>
              <button className="text-2xl text-light hover:text-secondary">
                Home
              </button>
            </Link>
            <Link to="/movies" onClick={toggleMenu}>
              <button className="text-2xl text-light hover:text-secondary">
                Movies
              </button>
            </Link>
            <Link to="/tv-shows" onClick={toggleMenu}>
              <button className="text-2xl text-light hover:text-secondary">
                TV shows
              </button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
