import React from "react";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

const CardTestimonials = ({ item,handleDelete, handleEdit }) => {
  return (
    <>
      {/* Testimonial 1 */}
      <div className="w-full flex-shrink-0 px-4 relative">
        <div className="absolute top-5 right-5">
          {" "}
          <button
            type="button"
            data-tooltip="Edit"
            className=" text-white tooltip"
            onClick={() => handleEdit(item)}
          >
            <FaPencil className="p-1 bg-primary rounded-full" />
          </button>
          <button //3
            type="button"
            data-tooltip="Delete"
            className=" text-red-600 tooltip"
            onClick={() => handleDelete(item)}
          >
            <FaTrash className="p-1 bg-primary rounded-full" />
          </button>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-md text-center">
          <img
            src={item.testimonials_image}
            alt={item.testimonials_name}
            className="size-20 mx-auto mb-4 object-cover rounded-full"
          />
          <p className="text-gray-600 italic mb-4">
            " <span> {item.testimonials_description}</span> "
          </p>
          <h4 className="font-bold">{item.testimonials_name}</h4>
          <p className="text-gray-500 text-sm">{item.testimonials_position}</p>
        </div>
      </div>
    </>
  );
};

export default CardTestimonials;
