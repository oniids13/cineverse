import {
  Movie as MovieIcon,
  AccessTime as ClockIcon,
  TrendingUp as TrendingUpIcon,
  ArrowBack as ArrowBackIcon,
  Tv as TvIcon,
  PlayCircle as PlayCircleIcon,
  Star as StarIcon,
  CheckCircle as CheckCircleIcon,
} from "@mui/icons-material";

import { Link, useLocation } from "react-router-dom";

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
  voteAverage,
  voteCount,
  imdbId,
  tagline,
  budget,
  revenue,
  productionCompanies,
  originalLanguage,
  status,
  homepage,
  releaseDate,
  createdBy,
  networks,
  firstAirDate,
  lastAirDate,
  inProduction,
  lastEpisode,
  nextEpisode,
  episodeRunTime,
  seasons,
  originCountry,
  spokenLanguages,
  showType,
}) => {
  const location = useLocation();
  const fromPage = location.state?.from;
  const isFromSearch = fromPage === "search";
  const isFromHome = fromPage === "home";

  const searchQuery = location.state?.searchQuery;
  const searchMediaType = location.state?.mediaType;

  const getBackLink = () => {
    if (isFromSearch && searchQuery) {
      return `/search/${searchMediaType}?q=${encodeURIComponent(searchQuery)}`;
    } else if (isFromHome) {
      return `/`;
    }

    return `/${type}${type === "tv" ? "-shows" : "s"}`;
  };

  const getBackButtonText = () => {
    if (isFromSearch) {
      return "Search Results";
    } else if (isFromHome) {
      return "Home";
    }
    return `${type}${type === "tv" ? " shows" : "s"}`;
  };

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

            {tagline && (
              <p className="text-lg italic text-gray-600 mb-4">"{tagline}"</p>
            )}

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-gray-600 mb-6">
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
              {voteAverage && (
                <div className="flex items-center">
                  <StarIcon className="mr-1" />
                  <span>
                    {voteAverage.toFixed(1)}/10 ({voteCount?.toLocaleString()}{" "}
                    votes)
                  </span>
                </div>
              )}
              <div className="flex items-center">
                <CheckCircleIcon className="mr-1" />
                <span>{status}</span>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 mb-6">
              <h4 className="text-xl font-semibold mb-4 text-primary flex items-center">
                <div className="w-1 h-6 bg-secondary rounded mr-3"></div>
                Overview
              </h4>
              <p className="text-gray-700 leading-relaxed text-justify">
                {description}
              </p>
            </div>

            {/* Creator Information - TV Shows Only */}
            {type === "tv" && createdBy?.length > 0 && (
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3">Created By</h4>
                <div className="flex flex-wrap gap-4">
                  {createdBy.map((creator) => (
                    <div
                      key={creator.id}
                      className="flex items-center bg-gray-100 p-3 rounded"
                    >
                      {creator.profile_path && (
                        <img
                          src={`https://image.tmdb.org/t/p/w92${creator.profile_path}`}
                          alt={creator.name}
                          className="w-12 h-12 rounded-full mr-3"
                        />
                      )}
                      <span className="font-medium">{creator.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Networks - TV Shows Only */}
            {type === "tv" && networks?.length > 0 && (
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3">Networks</h4>
                <div className="flex flex-wrap gap-4">
                  {networks.map((network) => (
                    <div
                      key={network.id}
                      className="flex items-center bg-gray-100 p-2 rounded"
                    >
                      {network.logo_path && (
                        <img
                          src={`https://image.tmdb.org/t/p/w92${network.logo_path}`}
                          alt={network.name}
                          className="h-8 mr-2"
                        />
                      )}
                      <span>{network.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Air Dates & Status - TV Shows Only */}
            {type === "tv" && (
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3">
                  Series Information
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {firstAirDate && (
                    <div className="bg-gray-100 p-3 rounded">
                      <span className="font-semibold">First Aired:</span>{" "}
                      {new Date(firstAirDate).toLocaleDateString()}
                    </div>
                  )}
                  {lastAirDate && (
                    <div className="bg-gray-100 p-3 rounded">
                      <span className="font-semibold">Last Aired:</span>{" "}
                      {new Date(lastAirDate).toLocaleDateString()}
                    </div>
                  )}
                  {showType && (
                    <div className="bg-gray-100 p-3 rounded">
                      <span className="font-semibold">Type:</span> {showType}
                    </div>
                  )}
                  {episodeRunTime?.length > 0 && (
                    <div className="bg-gray-100 p-3 rounded">
                      <span className="font-semibold">Episode Runtime:</span>{" "}
                      {episodeRunTime.join(", ")} minutes
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Box Office - Movies Only */}
            {type === "movie" && (budget > 0 || revenue > 0) && (
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3">Box Office</h4>
                <div className="flex gap-4">
                  {budget > 0 && (
                    <div className="bg-gray-100 p-3 rounded">
                      <span className="font-semibold">Budget:</span> $
                      {budget.toLocaleString()}
                    </div>
                  )}
                  {revenue > 0 && (
                    <div className="bg-gray-100 p-3 rounded">
                      <span className="font-semibold">Revenue:</span> $
                      {revenue.toLocaleString()}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Production Companies */}
            {productionCompanies?.length > 0 && (
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3">Production</h4>
                <div className="flex flex-wrap gap-4">
                  {productionCompanies.map((company) => (
                    <div
                      key={company.id}
                      className="flex items-center bg-gray-100 p-2 rounded"
                    >
                      {company.logo_path && (
                        <img
                          src={`https://image.tmdb.org/t/p/w92${company.logo_path}`}
                          alt={company.name}
                          className="h-8 mr-2"
                        />
                      )}
                      <span>{company.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Last Episode - TV Shows Only */}
            {type === "tv" && lastEpisode && (
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3">Latest Episode</h4>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-start gap-4">
                    {lastEpisode.still_path && (
                      <img
                        src={`https://image.tmdb.org/t/p/w300${lastEpisode.still_path}`}
                        alt={lastEpisode.name}
                        className="w-32 h-18 object-cover rounded"
                      />
                    )}
                    <div>
                      <h5 className="font-semibold text-lg">
                        S{lastEpisode.season_number}E
                        {lastEpisode.episode_number}: {lastEpisode.name}
                      </h5>
                      <p className="text-gray-600 text-sm mb-2">
                        Aired:{" "}
                        {new Date(lastEpisode.air_date).toLocaleDateString()}
                      </p>
                      <p className="text-gray-700">{lastEpisode.overview}</p>
                      {lastEpisode.vote_average > 0 && (
                        <div className="flex items-center mt-2">
                          <StarIcon className="w-4 h-4 mr-1" />
                          <span className="text-sm">
                            {lastEpisode.vote_average.toFixed(1)}/10
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Seasons Overview - TV Shows Only */}
            {type === "tv" && seasons?.length > 0 && (
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3">Seasons</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {seasons
                    .filter((season) => season.season_number > 0)
                    .map((season) => (
                      <div
                        key={season.id}
                        className="bg-gray-50 p-4 rounded-lg"
                      >
                        <div className="flex items-start gap-3">
                          {season.poster_path && (
                            <img
                              src={`https://image.tmdb.org/t/p/w154${season.poster_path}`}
                              alt={season.name}
                              className="w-16 h-24 object-cover rounded"
                            />
                          )}
                          <div>
                            <h5 className="font-semibold">{season.name}</h5>
                            <p className="text-sm text-gray-600">
                              {season.episode_count} episodes
                            </p>
                            {season.air_date && (
                              <p className="text-sm text-gray-600">
                                {new Date(season.air_date).getFullYear()}
                              </p>
                            )}
                            {season.vote_average > 0 && (
                              <div className="flex items-center mt-1">
                                <StarIcon className="w-3 h-3 mr-1" />
                                <span className="text-xs">
                                  {season.vote_average.toFixed(1)}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}

            {/* External Links */}
            <div className="flex gap-4 mb-6">
              {imdbId && (
                <a
                  href={`https://www.imdb.com/title/${imdbId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600"
                >
                  View on IMDB
                </a>
              )}
              {homepage && (
                <a
                  href={homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Official Website
                </a>
              )}
            </div>

            {/* Additional Information Section */}
            <div className="mb-6 mt-5">
              <h4 className="text-l font-semibold mb-3">
                Additional Information
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {originalLanguage && (
                  <div className="bg-gray-100 p-3 rounded">
                    <span className="font-semibold">Original Language:</span>{" "}
                    {originalLanguage.toUpperCase()}
                  </div>
                )}
                {originCountry?.length > 0 && (
                  <div className="bg-gray-100 p-3 rounded">
                    <span className="font-semibold">Origin Country:</span>{" "}
                    {originCountry.join(", ")}
                  </div>
                )}
                {type === "movie" && releaseDate && (
                  <div className="bg-gray-100 p-3 rounded">
                    <span className="font-semibold">Release Date:</span>{" "}
                    {new Date(releaseDate).toLocaleDateString()}
                  </div>
                )}
                {type === "tv" && inProduction !== undefined && (
                  <div className="bg-gray-100 p-3 rounded">
                    <span className="font-semibold">In Production:</span>{" "}
                    {inProduction ? "Yes" : "No"}
                  </div>
                )}
              </div>
            </div>

            {/* Spoken Languages */}
            {spokenLanguages?.length > 0 && (
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {spokenLanguages.map((language) => (
                    <span
                      key={language.iso_639_1}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                    >
                      {language.english_name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Next Episode - TV Shows Only */}
            {type === "tv" && nextEpisode && (
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3">Next Episode</h4>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h5 className="font-semibold text-lg text-green-800">
                    S{nextEpisode.season_number}E{nextEpisode.episode_number}:{" "}
                    {nextEpisode.name}
                  </h5>
                  <p className="text-green-700 text-sm mb-2">
                    Airs: {new Date(nextEpisode.air_date).toLocaleDateString()}
                  </p>
                  <p className="text-green-700">{nextEpisode.overview}</p>
                </div>
              </div>
            )}

            {/* Back Button */}
            <div className="mt-6">
              <Link to={getBackLink()}>
                <Button>
                  <ArrowBackIcon className="mr-2" />
                  Back to {getBackButtonText()}
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
