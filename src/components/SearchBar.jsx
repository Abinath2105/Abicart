// components/SearchBar.js
import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch, loading }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    onSearch(value);
  };

  const handleClear = () => {
    setInputValue('');
    onSearch('');
  };

  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <i className="fas fa-search search-icon"></i>
        <input
          type="text"
          placeholder="Search for products, brands and more..."
          value={inputValue}
          onChange={handleInputChange}
          className="search-input"
        />
        {loading && (
          <div className="loading-spinner">
            <i className="fas fa-spinner fa-spin"></i>
          </div>
        )}
        {inputValue && !loading && (
          <button className="clear-btn" onClick={handleClear}>
            <i className="fas fa-times"></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;