import React from "react";
import players from "../components/Statistics/Rating";
import createCard from "../components/Statistics/CreateCard";
import Attributes from "../components/Statistics/Attributes";
import Grid from "../components/Statistics/Grid";

const Statistics = () => {
  return (
    <div>
      <Attributes
        name="Name"
        username="Username"
        average_rating="Average Rating"
        blitz_rating="Blitz Rating"
        bullet_rating="Bullet Rating"
        total_points="Total Points"
        mean_points="Mean Points"
      />
      {players.map(createCard)};
    </div>
  );
};

export default Statistics;
