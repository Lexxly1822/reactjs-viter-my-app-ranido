import React from "react";

const CardServices = ({img,title,description,button}) => {
  return (
    <>
      <div className="card">
        <img
          src={img}
          alt="Web Development Image"
        />
        <h3>{title}</h3>
        <p>
        {description}
        </p>
        <a href="#">{button} &rarr;</a>
      </div>
    </>
  );
};

export default CardServices;
