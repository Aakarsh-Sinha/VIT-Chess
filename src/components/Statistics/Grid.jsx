import "./css/grid.css";

const Grid = ({ props, onClick }) => {
  return (
    <div>
      <div className="player-grid" onClick={onClick}>
        <div>{props.name}</div>
        <div>{props.username}</div>
        <div>{props.average_rating}</div>
        <div>{props.blitz_rating}</div>
        <div>{props.bullet_rating}</div>
        <div>{props.total_points}</div>
        <div>{props.mean_points}</div>
      </div>
    </div>
  );
};

export default Grid;
