import React, { useState, useRef } from "react";
import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = (props) => {
  const down = props.down;
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div id="nav" className="navigation">
      <div className="navigation-container">
        <a href="/" className="brand-name">
          <p>RK</p>
        </a>
        <button
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
          className="hamburger"
        >
          <FontAwesomeIcon icon={isNavExpanded ? faXmark : faBars} />
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <div className="right-nav">
            <ol>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Experience</a>
              </li>
              <li>
                <a>Work</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
              <button>Resume</button>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
