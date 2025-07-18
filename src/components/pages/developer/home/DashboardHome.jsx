import React from "react";
import DashboardUpperNav from "../../../partials/DashboardUpperNav";
import DashBoardSideNav from "../../../partials/DashBoardSideNav";
import Header from "./header/Header";
import Banner from "../../website/home/banner/Banner";
import Services from "../../website/home/services/Services";
import Testimonials from "../../website/home/testimonials/Testimonials";
import About from "../../website/home/about/About";
import GetInTouch from "../../website/home/getintouch/GetInTouch";
import Footer from "./footer/Footer";

const DashboardHome = () => {
  const [isSideNavOpen, setIsSideNavOpen] = React.useState(true);
  return (
    <>
      <DashboardUpperNav />
      <DashBoardSideNav
        isSideNavOpen={isSideNavOpen}
        setIsSideNavOpen={setIsSideNavOpen}
      />
      <section
        className={`ml-[224px] absolute top-16 w-[calc(100dvw-224px)] h-[calc(100dvh-64px)] overflow-y-scroll transition-all ease-in-out duration-300 ${
          isSideNavOpen ? "" : "!ml-0 !w-full"
        }`}
      >
        <div className="page-container">
          <div className="content-wrap">
            <div className="container max-w-full">
              <Header />
              <Banner />
              <Services />
              <About />
              <Testimonials />
              <GetInTouch />
            </div>
          </div>
          <Footer />
        </div>
      </section>
    </>
  );
};

export default DashboardHome;
