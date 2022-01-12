import React, {useState} from 'react';

function SearchBar(props) {
const {handleChange, searchText} = props;

  return (
    <div>
        <input
        className="search-input"
        id="search-bar"
        type="search"
        placeholder="Search for your favorite superheroes here..."
        onChange={handleChange}
        value={searchText}
      />
    </div>
  );
}

export default SearchBar;
