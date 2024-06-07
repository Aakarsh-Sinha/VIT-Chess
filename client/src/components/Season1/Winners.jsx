import img from "./images/winner.png";
import "./css/winners.css";

function Winners() {
  return (
    <div>
      <ol className="list">
        <li>
          <img
            src={img}
            title="award icon"
            alt="First"
            width={80}
            height={80}
          ></img>
          MVL
        </li>
      </ol>
    </div>
  );
}

export default Winners;
