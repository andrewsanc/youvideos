import React, { useState } from "react";

const SearchBar = ({ fetchYoutubeVideos }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    fetchYoutubeVideos(searchTerm);
  };

  return (
    <div className='searchBar ui segment'>
      <form onSubmit={(e) => onFormSubmit(e)} className='ui form'>
        <div className='field'>
          <label>Video Search</label>
          <input
            type='text'
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
