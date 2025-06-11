import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
const Footer = () => {
  return (
    <footer className="bg-primary text-light">
      <div className="flex justify-around items-center">
        <div>
          <div className="flex flex-col items-start gap-2">
            <div className="flex items-center gap-2">
              <LocalMoviesIcon sx={{ color: "#01b4e4" }} />
              <p className="text-3m font-bold text-light">Cineverse</p>
            </div>
            <p className="opacity-75">
              Your ultimate destination for exploring movies and TV shows.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="flex gap-3">
            <a href="https://github.com/oniids13" target="_blank">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/oniids/" target="_blank">
              <LinkedInIcon />
            </a>
            <a href="mailto:jdino.baya@gmail.com" target="_blank">
              <EmailIcon />
            </a>
          </div>
          <p className="text-light opacity-75">
            &copy; {new Date().getFullYear()} | Jose Dino Abaya
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
