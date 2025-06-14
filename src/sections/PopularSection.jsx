import Card from "../components/Card";

const PopularSection = ({ mediaType, mediaList }) => {
  return (
    <section className="mt-10 flex-col justify-center items-center">
      <h2 className="section-title">Popular {mediaType}</h2>
      <div className="media-grid">
        {mediaList.map((media) => (
          <Card key={media.id} {...media} />
        ))}
      </div>
    </section>
  );
};

export default PopularSection;
