import React, { useState } from "react";
import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Resume from "../../../documents/Resume.pdf";

const Navbar = (props) => {
  // const down = props.down;
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
                <a href="e">About</a>
              </li>
              <li>
                <a href="e">Experience</a>
              </li>
              <li>
                <a href="r">Work</a>
              </li>
              <li>
                <a href="r">Contact</a>
              </li>
              <a href={Resume} target="_blank" rel="noreferrer">
                <button>Resume</button>
              </a>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
