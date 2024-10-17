import React from 'react';
import '/home/jayanthan/Desktop/rx group/my-react-app/src/styles/navbar.css'; // Ensure to style the navbar appropriately
import searchIcon from '/home/jayanthan/Desktop/rx group/my-react-app/src/assets/search.svg'; // Path to your search icon

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <input
          type="text"
          placeholder="Search Drugs"
          className="search-input"
        />
        <input
          type="text"
          placeholder="Search Rx Group"
          className="search-input"
        />
      </div>
      <div className="navbar-right">
        <button className="nav-button">All Drugs</button>
        <button className="nav-button">Rx Group</button>
        <span className="separator">|</span>
        <img src={searchIcon} alt="Search" className="search-icon" />
      </div>
    </nav>
  );
}

export default Navbar;
