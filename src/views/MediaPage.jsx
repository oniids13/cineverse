import { useParams } from "react-router-dom";
import { fetchSpecificMovie, fetchSpecificTv } from "../API/data";
import { useState, useEffect } from "react";
import SpecificMediaSection from "../sections/SpecificMediaSection";
import LoadingSpinner from "../components/LoadingSpinner";

const MediaPage = () => {
  const { mediaType, mediaId } = useParams();
  const [specificMedia, setSpecificMedia] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let data;
        if (mediaType === "movie") {
          data = await fetchSpecificMovie(mediaId);
        } else if (mediaType === "tv") {
          data = await fetchSpecificTv(mediaId);
        }
        setSpecificMedia(data);
      } catch (error) {
        console.error("Error fetching specific media:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [mediaType, mediaId]);

  return (
    <div>
      {loading ? (
        <LoadingSpinner text="Loading media details..." />
      ) : (
        <SpecificMediaSection {...specificMedia} />
      )}
    </div>
  );
};

export default MediaPage;
