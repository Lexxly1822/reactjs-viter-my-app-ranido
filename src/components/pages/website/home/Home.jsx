import React from "react";
import About from "./about/About";
import Services from "./services/Services";
import Testimonials from "./testimonials/Testimonials";
import Banner from "./banner/Banner";
import GetInTouch from "./getintouch/GetInTouch";

const Home = () => {
  return (
    <>
      <Banner />
      <Services />
      <About />
      <Testimonials />
      <GetInTouch/>
    </>
  );
};

export default Home;
