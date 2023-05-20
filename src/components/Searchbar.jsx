import { useAllPrismicDocumentsByType } from "@prismicio/react";
import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

const Searchbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [result, setResult] = useState([]);
  const [posts] = useAllPrismicDocumentsByType("post");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    setResult(() =>
      posts?.filter((item) =>
        item.data.title.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [searchValue]);

  console.log(result);

  return (
    <form className="relative max-w-min" onSubmit={(e) => handleSubmit(e)}>
      <div className="relative">
        <input
          type="text"
          className="bg-thunder-300 h-12 text-21 text-white outline-none rounded-full px-6 py-12 w-[40rem]"
          onChange={(e) => handleChange(e)}
          value={searchValue}
        />
        {result?.length <= 10 ? (
          <div className="absolute -bottom-22 left-0 w-[40rem] bg-thunder-300 text-white overflow-hidden rounded-[3rem] overflow-y-scroll">
            {result.map((item) => (
              <Link
                key={item.data.title}
                className="text-15 block px-6 py-4 hover:bg-thunder-100"
                to={`post/${item.uid}`}
              >
                {item.data.title}
              </Link>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>

      {/* SVG */}
      <div className="absolute top-5 right-5 flex justify-center z-10 bg-thunder-300 w-20 h-14">
        <AiOutlineSearch className="w-12 h-12 text-white" />
      </div>
    </form>
  );
};

export default Searchbar;
