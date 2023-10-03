// SearchBar.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search cars..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button className="btn btn-primary" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
