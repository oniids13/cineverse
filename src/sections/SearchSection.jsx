import SearchItem from "../components/SearchItem";

const SearchSection = () => {
  return (
    <section className="flex justify-center items-center">
      <div className="search-section w-full max-w-6xl flex flex-col md:flex-row justify-evenly items-center p-4 md:p-10 bg-card-bg rounded-lg gap-8 md:gap-4 shadow-lg">
        <SearchItem
          title="Find Movies"
          placeholder="Search Movie"
          mediaType="movie"
        />
        <SearchItem
          title="Find TV shows"
          placeholder="Search TV show"
          mediaType="tv"
        />
      </div>
    </section>
  );
};

export default SearchSection;
