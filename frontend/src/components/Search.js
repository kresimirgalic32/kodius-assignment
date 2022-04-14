import React from "react";
import { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  const searchHandler = (e) => {
    e.preventDefault();
    let searchName = search;
  };
  return (
    <div>
      <form className="form" onSubmit={searchHandler}></form>
      <input
        type="text"
        id="search"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="primary">
        Search
      </button>
    </div>
  );
};

export default Search;
