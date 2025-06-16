import Card from "../components/Card";

const MediaGridSection = ({ content, mediaType, mediaList, from }) => {
  return (
    <section className="mt-10 flex-col justify-center items-center">
      <h2 className="section-title">
        {content} {mediaType}
      </h2>
      <div className="media-grid">
        {mediaList.map((media) => (
          <Card
            key={media.mediaId || media.id}
            {...media}
            state={{ from: from || "default" }}
          />
        ))}
      </div>
    </section>
  );
};

export default MediaGridSection;
