import React from "react";

const CardTestimonials = ({img,alt,testimony,name,position}) => {
  return (
    <>
      {/* Testimonial 1 */}
      <div className="w-full flex-shrink-0 px-4">
        <div className="bg-white p-8 rounded-xl shadow-md text-center">
          <img
            src={img}
            alt={alt}
            className="size-20 mx-auto mb-4 object-cover rounded-full"
          />
          <p className="text-gray-600 italic mb-4">
            " <span> {testimony}</span> "
          </p>
          <h4 className="font-bold">{name}</h4>
          <p className="text-gray-500 text-sm">{position}</p>
        </div>
      </div>
    </>
  );
};

export default CardTestimonials;
