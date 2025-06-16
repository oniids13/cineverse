import { Link } from "react-router-dom";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import Button from "../components/Button";

const ErrorPage = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <div className="mb-8">
        <ErrorOutlineIcon sx={{ fontSize: 120, color: "#01b4e4" }} />
      </div>

      <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
        404 - Page Not Found
      </h1>

      <p className="text-gray-600 text-lg md:text-xl max-w-md mb-8">
        Oops! The page you're looking for seems to have vanished into the
        cinematic void.
      </p>

      <div>
        <Link to="/">
          <Button text="Return Home">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
