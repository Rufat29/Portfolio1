import "./Title.scss";
import React from "react";

const Title = (props) => {
  return (
    <div className="title-wrapper">
      <p className="count">{props.count}</p>
      <h2 className="title">{props.title}</h2>
    </div>
  );
};

export default Title;
