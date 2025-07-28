import React from "react";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import CardTestimonials from "../../../../partials/CardTestimonials";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

const TestimonialsList = ({
  isLoading,
  isFetching,
  error,
  dataTestimonials,
  handleAdd,
  handleEdit,
  handleDelete,
  setCurrentSlide,
  currentSlide,
}) => {
  return (
    <>
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
                  <CardTestimonials
                    item={item}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    currentSlide={currentSlide}
                  />
                </React.Fragment>
              );
            })}
          </div>
        </div>
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
    </>
  );
};

export default TestimonialsList;
