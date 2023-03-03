import React, { useState, useContext, useEffect } from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { GlobalContext } from '../../Contexts';

const Filter = () => {
  const { filter, setFilter, search, setSearch } = useContext(GlobalContext);
  const [currentFilter, setCurrentFilter] = useState(filter);
  const [currentSearch, setCurrentSearch] = useState('');
  <FontAwesomeIcon icon="fa-solid fa-filter" />;
  const handleFilterChange = (e) => {
    setCurrentFilter(e.target.value);
    setFilter(e.target.value);
  };

  const handleSearchChange = (e) => {
    setCurrentSearch(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearch(currentSearch);
  };

  useEffect(() => {
    setCurrentFilter('All');
    setCurrentSearch('');
  }, []);

  return (
    <div className="filter">
      {/* <i className="fas fa-filter" /> */}
      <select
        className="filter-select"
        value={currentFilter}
        onChange={handleFilterChange}
      >
        <option value="All">All</option>
        <option value="Registered">Registered</option>
        <option value="Bookmarked">Bookmarked</option>
        <option value="SeatsAvailable">Seats Available</option>
      </select>
      <div className="search">
        <input
          className="filter-search"
          type="text"
          value={currentSearch}
          onChange={handleSearchChange}
          placeholder="Search"
        />
        <button className="filter-search-btn" onClick={handleSearchSubmit}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Filter;
