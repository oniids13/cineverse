import {
  Movie as MovieIcon,
  AccessTime as ClockIcon,
  TrendingUp as TrendingUpIcon,
  ArrowBack as ArrowBackIcon,
  Tv as TvIcon,
  PlayCircle as PlayCircleIcon,
} from "@mui/icons-material";

import { Link } from "react-router-dom";

import Button from "../components/Button";

const SpecificMediaSection = ({
  imgUrl,
  title,
  year,
  description,
  genre,
  popularity,
  runtime,
  type,
  noOfSeasons,
  noOfEpisodes,
}) => {
  return (
    <div>
      <div className="container mx-auto py-5">
        <div className="relative">
          <div className="relative">
            <img
              className="w-full h-[500px] object-fit"
              src={imgUrl}
              alt={title}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(3,37,65,0.1)] to-[rgba(3,37,65,0.8)]" />
          </div>

          <div className="px-4 py-6">
            <h1 className="text-3xl font-bold mb-3">
              {title}
              <span className="text-gray-500 text-xl ml-2">({year})</span>
            </h1>

            <div className="flex gap-6 text-gray-600">
              <div className="flex items-center">
                <MovieIcon className="mr-1" />
                <span>{genre}</span>
              </div>
              <div className="flex items-center">
                <ClockIcon className="mr-1" />
                <span>{runtime}</span>
              </div>
              <div className="flex items-center">
                <TrendingUpIcon className="mr-1" />
                <span>{popularity}</span>
              </div>
              {type === "tv" && (
                <>
                  <div className="flex items-center">
                    <TvIcon className="mr-1" />
                    <span>
                      {noOfSeasons} {noOfSeasons !== 1 ? "Seasons" : "Season"}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <PlayCircleIcon className="mr-1" />
                    <span>
                      {noOfEpisodes}{" "}
                      {noOfEpisodes !== 1 ? "Episodes" : "Episode"}
                    </span>
                  </div>
                </>
              )}
            </div>

            <h4 className="text-xl font-semibold mt-6 mb-3">Overview</h4>
            <p className="text-gray-700 leading-relaxed">{description}</p>

            {/* Back Button */}
            <div className="mt-6">
              <Link to={`/${type}${type === "tv" ? "-shows" : "s"}`}>
                <Button>
                  <ArrowBackIcon className="mr-2" />
                  Back to {type}
                  {type === "tv" ? " shows" : "s"}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecificMediaSection;
