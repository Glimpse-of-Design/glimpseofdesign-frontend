import React from "react";
import Carousel from "./Carousel";
import Projects from "./Projects";
import AboutUs from "./AboutUs";
import Services from "./Services";


const Home = () => {
  return (
    <div>
      <Carousel />
      <Projects />
      <Services />
      <AboutUs />
    </div>
  );
};

export default Home;
