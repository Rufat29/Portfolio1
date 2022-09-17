import "./Login.scss";
import React, { useState } from "react";

const Login = (props) => {
  const [name, setName] = useState();
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
        <button onClick={() => buttonHandler()}>Confirm</button>
      </div>
    </div>
  );
};

export default Login;
