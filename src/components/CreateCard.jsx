import React from "react";
import Card from "./Card";

function createCard(player) {
  return <Card key={player.id} name={player.name} username={player.username} />;
}

export default createCard;
