import React from "react";
import CardServices from "../../../../partials/CardServices";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

const ServicesList = ({
  isLoading,
  isFetching,
  error,
  dataServices,
  handleAdd,
  handleEdit,
  handleDelete,
}) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {dataServices?.data.map((item, key) => {
          return (
            <div key={key} className="relative">
              <div className="absolute -top-5 right-3">
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
              <CardServices item={item} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ServicesList;
