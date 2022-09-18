import "./Login.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = (props) => {
  const [name, setName] = useState(" ");
  const [error, setError] = useState();
  const [isActive, setIsActive] = useState(false);

  const handleChange = (event) => {
    setName(event.target.value);
  };
  const sendChildData = (userName) => {
    props.passChildData(userName);
  };
  const buttonHandler = () => {
    sendChildData(name);
    setIsActive(true);
  };
  return (
    <div className={`login ${isActive ? "disable" : ""}`}>
      <div className="login-inner">
        <h3>Please enter your name</h3>
        <input type="text" placeholder="Name" onChange={handleChange} />
        <Link to={"/home"} onClick={() => buttonHandler()}>
          Confirm
        </Link>
        <p>{error}</p>
      </div>
    </div>
  );
};

export default Login;
