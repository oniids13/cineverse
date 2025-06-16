import { useParams } from "react-router-dom";
import { fetchSpecificMovie, fetchSpecificTv } from "../API/data";
import { useState, useEffect } from "react";
import SpecificMediaSection from "../sections/SpecificMediaSection";

const MediaPage = () => {
  const { mediaType, mediaId } = useParams();
  const [specificMedia, setSpecificMedia] = useState(null);

  useEffect(() => {
    if (mediaType === "movie") {
      fetchSpecificMovie(mediaId).then((data) => setSpecificMedia(data));
    } else if (mediaType === "tv") {
      fetchSpecificTv(mediaId).then((data) => setSpecificMedia(data));
    }
  }, [mediaType, mediaId]);

  return (
    <div>
      <SpecificMediaSection {...specificMedia} />
    </div>
  );
};

export default MediaPage;
