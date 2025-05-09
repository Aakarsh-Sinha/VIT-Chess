import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import img1 from "./Cards/img/img1.jpg";
import img2 from "./Cards/img/img2.jpg";
import img3 from "./Cards/img/img3.jpg";
import { Link } from "react-router-dom";
import "./css/card1.css";

function BasicExample() {
  return (
    <div className="card-container">
      <Card>
        <Card.Img variant="top" src={img1} />
        <Card.Body>
          <Card.Title>Season 1</Card.Title>
          <Card.Text>Results and Statistics</Card.Text>
          <Link to="/season1">
            <Button variant="info">Link</Button>
          </Link>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src={img2} />
        <Card.Body>
          <Card.Title>Season 2</Card.Title>
          <Card.Text>Results and Statistics</Card.Text>
          <Link to="/season1">
            <Button variant="info">Link</Button>
          </Link>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src={img3} />
        <Card.Body>
          <Card.Title>Season 3</Card.Title>
          <Card.Text>Results and Statistics</Card.Text>
          <Link to="/season1">
            <Button variant="info">Link</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BasicExample;
