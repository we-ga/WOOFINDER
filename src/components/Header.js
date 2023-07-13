import React from "react";
import "../styles/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header">
      <div>
        <FontAwesomeIcon className="icon-paw" icon={faPaw} />
        <span class="woof">WOOFinder</span>
      </div>
    </div>
  );
};

export default Header;
