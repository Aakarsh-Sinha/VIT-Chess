import Carousel from "react-bootstrap/Carousel";
import img1 from "./ExampleCarouselImage/SZ_Team.jpg";
import img2 from "./ExampleCarouselImage/cropped-SZ_Trophy_1.jpg";
import img3 from "./ExampleCarouselImage/Pegasus_Individual.jpg";

function Carousel_Home() {
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
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carousel_Home;
