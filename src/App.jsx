import About from "./components/pages/home/about/About";
import Banner from "./components/pages/home/banner/Banner";
import GetInTouch from "./components/pages/home/getintouch/GetInTouch";
import Home from "./components/pages/home/Home";
import Services from "./components/pages/home/services/Services";
import Testimonials from "./components/pages/home/testimonials/Testimonials";
import Footer from "./components/partials/Footer";
import Header from "./components/partials/Header";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Services />
      <About />
      <Testimonials />
      <GetInTouch />
      <Footer />
      <Home />
    </>
  );
}

export default App;
