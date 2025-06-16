import Button from "../components/Button";
import SearchIcon from "@mui/icons-material/Search";
import Input from "../components/Input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchItem = ({ title, placeholder, mediaType }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(
        `/search/${mediaType}?q=${encodeURIComponent(searchQuery.trim())}`
      );
    }
  };

  return (
    <div className="w-full md:w-1/2 flex flex-col gap-4 justify-center items-center">
      <h3 className="text-2xl md:text-3xl text-center">{title}</h3>
      <form onSubmit={handleSubmit}>
        <div className=" text-center">
          <Input
            placeholder={placeholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex justify-center items-center mt-4">
          <Button text="Search" btnType="submit">
            <SearchIcon />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SearchItem;
