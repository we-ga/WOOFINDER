import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDog, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import "../styles/styles.css";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/home"; // Sprawdza, czy bieżący adres URL odpowiada stronie głównej
  const isSearchPage = location.pathname === "/search"; // Sprawdza, czy bieżący adres URL odpowiada stronie wyszukiwania

  return (
    <div className="footer">
      <Link to="/home">
        <FontAwesomeIcon
          className={`icon ${isHomePage ? "active" : ""}`}
          icon={faDog}
        />
      </Link>
      <Link to="/search">
        <FontAwesomeIcon
          className={`icon ${isSearchPage ? "active" : ""}`}
          icon={faSearch}
        />
      </Link>
    </div>
  );
};

export default Footer;
