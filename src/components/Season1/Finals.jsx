import finals_blitz from "./images/finals_blitz.png";
import finals_bullet from "./images/finals_bullet.png";
import "./css/finals.css";

function Finals() {
  return (
    <div className="image-container">
      <img src={finals_blitz} height={500} width={400} className="image"></img>
      <img src={finals_bullet} height={500} width={400} className="image"></img>
    </div>
  );
}

export default Finals;
