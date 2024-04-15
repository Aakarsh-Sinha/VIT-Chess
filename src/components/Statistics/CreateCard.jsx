import React from "react";
import Grid from "./Grid";
import handleClick from "./PlayerLink";
import players from "./Rating";

function createCard(player, handleClick) {
  return (
    <Grid
      key={player.id}
      name={player.name}
      onClick={() => handleClick(player.name)} // Pass player name to handleClick function
      username={player.username}
      average_rating={player.average_rating}
      blitz_rating={player.blitz_rating}
      bullet_rating={player.bullet_rating}
      total_points={player.total_points}
      mean_points={player.mean_points}
    />
  );
}

export default createCard;
