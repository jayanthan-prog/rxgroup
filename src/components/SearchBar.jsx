// File path: src/components/SearchBar.js

import React, { useState } from 'react';
import './SearchBar.css'; // Add necessary styling here.

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedDrugs, setSelectedDrugs] = useState(0);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search drugs / Rx Group"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="filter-buttons">
          <button
            className={`filter-button ${activeFilter === 'All' ? 'active' : ''}`}
            onClick={() => handleFilterChange('All')}
          >
            All
          </button>
          <button
            className={`filter-button ${activeFilter === 'Drugs' ? 'active' : ''}`}
            onClick={() => handleFilterChange('Drugs')}
          >
            Drugs
          </button>
          <button
            className={`filter-button ${activeFilter === 'Rx Group' ? 'active' : ''}`}
            onClick={() => handleFilterChange('Rx Group')}
          >
            Rx Group
          </button>
        </div>
        <button className="search-icon">
          <span role="img" aria-label="Search">🔍</span>
        </button>
      </div>  
      <div className="selected-drugs">
        Selected drugs ({selectedDrugs})
      </div>
    </div>
  );
};

export default SearchBar;
