import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [searchs, setSearhs] = useState();
  const setSearchsHandler = (e) => {
    e.preventDefault();
    setSearhs(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //리덕스에 저장?굳이 할필요가 있는지 고민
    //db에서 불러와서 뿌려주면된다.
  };

  useEffect(() => {
    console.log("search contents", searchs);
  }, [searchs]);
  return (
    <span>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchs} onChange={setSearchsHandler} />
        <button>
          <FaSearch></FaSearch>
        </button>
      </form>
    </span>
  );
};

export default SearchBar;
