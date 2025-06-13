import Card from "../components/Card";

const PopularSection = ({ mediaType, mediaList }) => {
  return (
    <section className="mt-10">
      <h2 className="relative pb-4 mb-8 font-bold text-center">
        Popular {mediaType}
      </h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-6 py-4">
        {mediaList.map((media) => (
          <Card key={media.id} {...media} />
        ))}
      </div>
    </section>
  );
};

export default PopularSection;
