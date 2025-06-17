import Card from "../components/Card";

const MediaGridSection = ({
  content,
  mediaType,
  mediaList,
  from,
  searchQuery,
  searchMediaType,
}) => {
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
            state={{
              from: from || "default",
              ...(from === "search" && {
                searchQuery: searchQuery,
                mediaType: searchMediaType,
              }),
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default MediaGridSection;
