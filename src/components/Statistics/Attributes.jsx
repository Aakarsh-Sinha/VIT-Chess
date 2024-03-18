import "./css/attributes.css";

export default function Attributes(props) {
  return (
    <div className="containerstats">
      <div className="property">{props.name}</div>
      <div className="property">{props.username}</div>
      <div className="property">{props.average_rating}</div>
      <div className="property">{props.blitz_rating}</div>
      <div className="property">{props.bullet_rating}</div>
      <div className="property">{props.total_points}</div>
      <div className="property">{props.mean_points}</div>
    </div>
  );
}
