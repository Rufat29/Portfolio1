import "./Notification.scss";
import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faGithub,
//   faInstagram,
//   faLinkedinIn,
// } from "@fortawesome/free-brands-svg-icons";
import Hello from "../../assets/hello.svg";

const Notification = (props) => {
  const [isNotificationOpen, setNotificationOpen] = useState(true);
  const [welcomeText, setWelcomeText] = useState("Dear friend");

  const isEmpty = props?.childData?.trim().length === 0;

  const text = isEmpty ? welcomeText : props.childData;
  if (text) {
    setTimeout(function () {
      setNotificationOpen(false);
    }, 5000);
  }
  return (
    <div
      className={`notification ${isNotificationOpen ? "visible" : "hidden"}`}
    >
      {/* <button onClick={() => NotificationHandler()}>
        <p>{actionMessage}</p>
      </button> */}
      <div className="notification-content">
        <div className="notification-header">
          <h1>Hello {text} </h1>
          <img src={Hello} alt="Hello" />
        </div>
        <h2>Welcome to my website.</h2>
        {/* <div className="social-notifiaction">
          <a href="https://github.com/Rufat29" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/rufat-karimli/" target="_blank">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="https://www.instagram.com/rufat29/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Notification;
