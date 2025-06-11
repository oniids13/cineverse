import LocalMoviesIcon from "@mui/icons-material/LocalMovies";

const Header = () => {
  return (
    <>
      <header>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <LocalMoviesIcon />
            <h1 className="text-2xl font-bold">Cineverse</h1>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
