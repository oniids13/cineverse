import Button from "../components/Button";
import SearchIcon from "@mui/icons-material/Search";
import Input from "../components/Input";

const SearchItem = ({ title, placeholder }) => {
  return (
    <div className="w-full md:w-1/2 flex flex-col gap-4 justify-center items-center">
      <h3 className="text-2xl md:text-3xl text-center">{title}</h3>
      <form action="">
        <div className=" text-center">
          <Input placeholder={placeholder} />
        </div>
        <div className="flex justify-center items-center mt-4">
          <Button text="Search">
            <SearchIcon />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SearchItem;
