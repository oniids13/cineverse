import React from "react";
import { Link } from "react-router-dom";

const Card = ({
  mediaId,
  mediaType,
  mediaPoster,
  mediaTitle,
  mediaYear,
  state,
}) => {
  return (
    <div className="media-card bg-card-bg rounded-lg overflow-hidden shadow-md h-full">
      <Link to={`/${mediaType}/${mediaId}`} state={state}>
        <img
          src={mediaPoster}
          alt={mediaTitle}
          className="media-poster rounded-t-lg w-full h-[300px]"
        />
        <div className="media-body p-4">
          <h5 className="media-title font-semibold overflow-hidden text-ellipsis text-base">
            {mediaTitle}
          </h5>
          <p className="text-sm text-card-year">{mediaYear}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
