import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header-container">

      <div className="header-left">
        <span className="logo-text">LOGO</span>
      </div>

      <div className="header-middle">
        <div className="search-box">
          <i className="search-icon">&#128269;</i>{" "}
          <input
            type="text"
            placeholder="Search here..."
            className="search-input"
          />
          <div className="filter-section">
            <i className="filter-icon">&#9881;</i>{" "}
            <span className="filter-text">Filter</span>
          </div>
        </div>
      </div>

      <div className="header-right">
        <span className="right-text">Become a Seller</span>
      </div>
    </div>
  );
};

export default Header;
