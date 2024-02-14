import Navbar from "../Navbar/Navbar";
import CarouselSlider from "../CarouselSlider/CarouselSlider";
import OurProduct from "../OurService/OurProduct";
import OtherService from "../OtherService/OtherService";
import Footer from "../Footer/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <CarouselSlider />
      <OurProduct />
      <OtherService />
      <Footer />
    </div>
  );
};

export default Home;
