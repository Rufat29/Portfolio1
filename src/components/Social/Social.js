import "./Social.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Social = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="social social-left">
        <ul>
          <li>
            <a href="https://github.com/Rufat29" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/rufat-karimli/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/rufat29/" target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
        </ul>
      </div>
      <div className="social social-right">
        <a href="mailto:kerimli2002r@gmail.com" target="_blank">
          kerimli2002r@gmail.com
        </a>
      </div>
      <div className="social-bottom">
        <div className="social-bottom-inner">
          <a href="https://github.com/Rufat29" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/rufat-karimli/" target="_blank">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="https://www.instagram.com/rufat29/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
        <p>Built by Rufat Karimli</p>
        <p>Copyright &copy; {year} All Rights Reserved</p>
      </div>
    </>
  );
};

export default Social;
