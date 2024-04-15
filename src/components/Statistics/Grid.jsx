import handleClick from "./PlayerLink";
import "./css/grid.css";

export default function Grid(props) {
  return (
    <div>
      <div className="player-grid">
        <div>{props.name}</div>
        <div onClick={() => handleClick(props.username)}>{props.username}</div>
        <div>{props.average_rating}</div>
        <div>{props.blitz_rating}</div>
        <div>{props.bullet_rating}</div>
        <div>{props.total_points}</div>
        <div>{props.mean_points}</div>
      </div>
    </div>
  );
}
