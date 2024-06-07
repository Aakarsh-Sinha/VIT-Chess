import handleClick from "./PlayerLink";
import "./css/grid.css";
import {useState} from 'react';

export default function Grid(props) {

  const [isHovering, setIsHovering] = useState(false);

  
  const handleLinkHover = () => {
    setIsHovering(true);
  };

  const handleLinkOut = () => {
    setIsHovering(false);
  };

  const [hoverTextX, setHoverTextX] = useState(0);
  const [hoverTextY, setHoverTextY] = useState(0);
  const [isHoveringText, setIsHoveringText] = useState(false);

  const handleHoverText = () => {
    setIsHoveringText(true);
  };

  document.addEventListener('mousemove', (event) => {
    setHoverTextX(event.clientX);
    setHoverTextY(event.clientY);
  });

  return (
    <div>
      <div className="player-grid">
        <div>{props.name}</div>
        <div onClick={() => handleClick(props.username)} onMouseOver={handleLinkHover} onMouseOut={handleLinkOut}>{props.username}</div>
        {isHovering && <div id="hover-text" style={{ left: hoverTextX + 'px', top: hoverTextY + 'px' }}>Visit profile</div>}
        <div>{props.average_rating}</div>
        <div>{props.blitz_rating}</div>
        <div>{props.bullet_rating}</div>
        <div>{props.total_points}</div>
        <div>{props.mean_points}</div>
      </div>
    </div>
  );
}
