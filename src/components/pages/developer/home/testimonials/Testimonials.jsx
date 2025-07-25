import React from "react";
import {
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiPencil,
} from "react-icons/hi";
import ModalAddTestimonials from "./ModalAddTestimonials";
import useQueryData from "../../../../custom-hooks/useQueryData";
import { apiVersion } from "../../../../helpers/function-general";
import CardTestimonials from "../../../../partials/CardTestimonials";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [
    isModalTestimonials, //getter = get data
    setIsModalTestimonials, //setter = set data
  ] = React.useState(false);

  const {
    isLoading,
    isFetching,
    error,
    data: dataTestimonials,
  } = useQueryData(
    `${apiVersion}/controllers/developer/testimonials/testimonials.php`,
    "get",
    "testimonials"
  );

  const handleAdd = () => {
    setIsModalTestimonials(true);
  };

  return (
    <>
      <section id="testimonials" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 ">
          <div className=" flex justify-center items-center mb-4 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-center">
                Client Testimonials
              </h2>
            </div>

            <button
              className="tooltip"
              data-tooltip="Add"
              type="button"
              onClick={handleAdd}
            >
              <HiPencil className="bg-primary text-white size-6 p-1 border transition-all ease-in-out duration-200 rounded-full" />
            </button>
          </div>

          {/* testimonials Slider */}
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {" "}
                {dataTestimonials?.data.map((item, key) => {
                  return (
                    <React.Fragment key={key}>
                      <CardTestimonials item={item} />
                    </React.Fragment>
                  );
                })}
              </div>
            </div>

            {/* slides */}
            {/* <div className="overflow-hidden">
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
              </div>
            </div> */}

            {/* Navigation arrows */}
            <button
              onClick={() =>
                setCurrentSlide((prev) =>
                  prev === 0 ? dataTestimonials.count - 1 : prev - 1
                )
              }
              className="absolute left-0 top-1/2 -translate-y-1/2 ml-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
            >
              <HiOutlineChevronLeft className="w-6 h-6text-gray-600" />
            </button>
            <button
              onClick={() =>
                setCurrentSlide((prev) =>
                  prev == dataTestimonials.count - 1 ? 0 : prev + 1
                )
              }
              className="absolute right-0 top-1/2 -translate-y-1/2 ml-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
            >
              <HiOutlineChevronRight className="w-6 h-6text-gray-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {dataTestimonials?.data.map((item, index) => (
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
      {isModalTestimonials && (
        <ModalAddTestimonials setIsModal={setIsModalTestimonials} />
      )}
      ;
    </>
  );
};

export default Testimonials;
