import React from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import CardTestimonials from "../../../../partials/CardTestimonials";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  return (
    <>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Client Testimonials
          </h2>

          {/* testimonials Slider */}
          <div className="relative max-w-4xl mx-auto">
            {/* slides */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                <CardTestimonials
                  img={"images/testimonials-1.webp"}
                  alt={"Sarah Johnson"}
                  testimony={
                    "The team delivered our project ahead of schedule with exceptional quality. Our online sales increased by 120% within three months!"
                  }
                  name={"Sarah Johnson"}
                  position={" Marketing Direcotr, TechCorp"}
                />
                <CardTestimonials
                  img={"/images/testimonials-2.webp"}
                  alt={"Michael Chen image"}
                  testimony={
                    "From design to deployment, their attention to detail was impressive. They became true partners in our digital transformation journey."
                  }
                  name={"Michael Chen"}
                  position={"CEO, StartupHub"}
                />
                <CardTestimonials
                  img={"/images/testimonials-3.webp"}
                  alt={"Emma Rodriguez"}
                  testimony={
                    "Their SEO strategy tripled our organic traffic in 6 months. We've seen a dramatic improvement in lead quality and conversion rates."
                  }
                  name={"Emma Rodriguez"}
                  position={"CMO, GrowthSolutions"}
                />
                {/* Testimonial 1 */}
                {/* <div className="w-full flex-shrink-0 px-4">
                  <div className="bg-white p-8 rounded-xl shadow-md text-center">
                    <img
                      src="images/testimonials-1.webp"
                      alt="Sarah Johnson"
                      className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                    />
                    <p className="text-gray italic mb-4">
                      "The Team delivered our project ahead of schedule with
                      exceptional quality. Our online sales increased by 120-%
                      within 3 months!"
                    </p>
                    <h4 className="font-bold">Sarah Johnson</h4>
                    <p className="text-gray text-sm">
                      Marketing Director, TechCorp
                    </p>
                  </div>
                </div> */}
                {/* Testimonial 2 */}
                {/* <div className="w-full flex-shrink-0 px-4">
                  <div className="bg-white p-8 rounded-xl shadow-md text-center">
                    <img
                      src="images/testimonials-2.webp"
                      alt="Michael Chen Image"
                      className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                    />
                    <p className="text-gray italic mb-4">
                      "From design to deployment, their attention to detail was
                      impressive. They became true partners in our digital
                      transformation journey."
                    </p>
                    <h4 className="font-bold">Michael Chen</h4>
                    <p className="text-gray text-sm">CEO, StartupHub</p>
                  </div>
                </div> */}
                {/* Testimonial 3 */}
                {/* <div className="w-full flex-shrink-0 px-4">
                  <div className="bg-white p-8 rounded-xl shadow-md text-center">
                    <img
                      src="images/testimonials-3.webp"
                      alt="Emma Rodriguez Image"
                      className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                    />
                    <p className="text-gray italic mb-4">
                      "Their SEO strategy tripled our organic traffic in 6
                      months. We've seen a dramtic improvement in lead quality
                      and conversion rates."
                    </p>
                    <h4 className="font-bold">Emma Rodriguez</h4>
                    <p className="text-gray text-sm">CMO, GrowthSolutions</p>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={() =>
                setCurrentSlide((prev) => (prev === 0 ? 2 : prev - 1))
              }
              className="absolute left-0 top-1/2 -translate-y-1/2 ml-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
            >
              <HiOutlineChevronLeft className="w-6 h-6text-gray-600" />
            </button>
            <button
              onClick={() =>
                setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1))
              }
              className="absolute right-0 top-1/2 -translate-y-1/2 ml-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
            >
              <HiOutlineChevronRight className="w-6 h-6text-gray-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentSlide === index ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;

{
  /* <section className="bg-gray-50 py-12 md:py-20">
        <div className="container">
          <h2 className="title text-center">Client Testimonials</h2>
          <div className="max-w-3xl mx-auto">
            <div className="testimonialsSlider">
              <div className="testimonialsItem">
                <img
                  src="../images/testimonials-1.webp"
                  alt="Sarah Johnson Image"
                />
                <p>
                  "The Team delivered our project ahead of schedule with
                  exceptional quality. Our online sales increased by 120-%
                  within 3 months!"
                </p>
                <h6>Sarah Johnson</h6>
                <small>Marketing Director, TechCorp</small>
              </div>
              <div className="testimonialsItem">
                <img
                  src="../images/testimonials-2.webp"
                  alt="Michael Chen Image"
                />
                <p>
                  "From design to deployment, their attention to detail was
                  impressive. They became true partners in our digital
                  transformation journey."
                </p>
                <h6>Michael Chen</h6>
                <small>CEO, StartupHub</small>
              </div>
              <div className="testimonialsItem">
                <img
                  src="../images/testimonials-3.webp"
                  alt="Emma Rodriguez Image"
                />
                <p>
                  "Their SEO strategy tripled our organic traffic in 6 months.
                  We've seen a dramtic improvement in lead quality and
                  conversion rates."
                </p>
                <h6>Emma Rodriguez</h6>
                <small>CMO, GrowthSolutions</small>
              </div>
            </div>
            <div id="controls" className="relative">
              <a className="prev">
                <div className="absolute bottom-40 -left-5 transform -translate-y-1/2 z-30">
                  <button className="bg-white shadow-md size-10 rounded-full flex items-center justify-center text-2xl text-black/90 hover:text-black/80">
                    &lt;
                  </button>
                </div>
              </a>
              <a className="next">
                <div className="absolute bottom-40 -right-5 transform -translate-y-1/2 z-30">
                  <button className="bg-white shadow-md size-10 rounded-full flex items-center justify-center text-2xl text-black/90 hover:text-black/80">
                    &gt;
                  </button>
                </div>
              </a>
            </div>
          </div>
          <div className="tns-nav"></div>
        </div>
      </section> */
}
