import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image1 from "../../assets/Carousel/1.jpg";
import image2 from "../../assets/Carousel/2.jpg";
import image3 from "../../assets/Carousel/3.jpg";
import image4 from "../../assets/Carousel/4.jpg";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Carouselcontent() {
  return (
    <Carousel responsive={responsive}>
      <div>
        <img alt="img1" src={image1} />
      </div>
      <div>
        <img alt="img2" src={image2} />
      </div>
      <div>
        <img alt="img3" src={image3} />
      </div>
      <div>
        <img alt="img4" src={image4} />
      </div>
    </Carousel>
  );
}

export default Carouselcontent;
