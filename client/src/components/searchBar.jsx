import React from "react";

const SearchBar = () => {
  return <div className="search-bar form-inline">
      <input className="form-control" type="text" />
      <button className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search" />
      </button>
    </div>;
};

export default SearchBar;
