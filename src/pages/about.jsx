import React from "react";
// import Card from "../components/Card";
import players from "../components/PlayerList";
import createCard from "../components/CreateCard";

const About = () => {
  return (
    <div>
      <h1>VIT Chess League</h1>
      {players.map(createCard)}
    </div>
  );
};

export default About;
