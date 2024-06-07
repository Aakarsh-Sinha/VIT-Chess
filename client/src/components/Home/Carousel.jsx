import Carousel from "react-bootstrap/Carousel";
import img1 from "./ExampleCarouselImage/SZ_Team.jpg";
import img2 from "./ExampleCarouselImage/cropped-SZ_Trophy_1.jpg";
import img3 from "./ExampleCarouselImage/Pegasus_Individual.jpg";

function CarouselHome() {
  return (
    <div height="50%">
      <Carousel>
        <Carousel.Item>
          <img
            src={img2}
            class="d-block w-100"
            alt="couple"
            height="650px"
          ></img>
          <Carousel.Caption>
            <h3>South Zonals 2024</h3>
            <p>Third position</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={img1}
            class="d-block w-100"
            alt="couple"
            height="650px"
          ></img>
          <Carousel.Caption>
            <h3>VIT South Zonals Teams</h3>
            <p>Vellore - Left AP - Right</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={img3}
            class="d-block w-100"
            alt="couple"
            height="650px"
          ></img>
          <Carousel.Caption>
            <h3>CMC Pegasus 2023</h3>
            <p>Team - First Individual - First</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselHome;
