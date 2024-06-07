import React from "react";
import "./css/card.css";

function Card(props) {
  return (
    <div className="container_about">
      <div>{props.name}</div>
      <div>{props.username}</div>
    </div>
  );
}

export default Card;
