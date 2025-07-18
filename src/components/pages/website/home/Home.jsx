import React from "react";
import About from "../../developer/home/about/About";
import Services from "../../developer/home/services/Services";
import Testimonials from "../../developer/home/testimonials/Testimonials";
import Banner from "../../developer/home/banner/Banner";
import GetInTouch from "../../developer/home/getintouch/GetInTouch";
import DashboardHome from "../../developer/home/DashboardHome";
import Header from "../../../partials/Header";
import Footer from "../../../partials/Footer";

const Home = () => {
  return (
    <>
      <div className="page-container">
        <div className="content-wrap">
          <Header />
          <Banner />
          <Services />
          <About />
          <Testimonials />
          <GetInTouch />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
