import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { DataSlider } from "./DetailSlider";

const CarouselSlider = () => {
  return (
    <div>
      <Carousel
        showArrows={true}
        autoPlay={true}
        interval={4000}
        infiniteLoop={true}
      >
        {DataSlider.map((e) => (
          <div className="h-[700px]" key={e.id}>
            <img
              src={e.image}
              className="bg-cover bg-center bg-no-repeat w-full h-full"
            />
            <p className="legend">{e.description}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselSlider;
