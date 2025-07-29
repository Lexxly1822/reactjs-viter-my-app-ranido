import React from "react";
import { FaPencil, FaTrash } from "react-icons/fa6";

const ContactTable = ({
  isLoading,
  isFetching,
  error,
  dataContact,
  handleAdd,
  handleEdit,
  handleDelete,
}) => {
  return (
    <>
      <table>
        <thead>
          <th>#</th>
          <th>Name</th>
          <th>Adress</th>
          <th>Message</th>
          <th>Action</th>
        </thead>
        <tbody>
          {dataContact?.data.map((item, index) => {
            return (
              <tr>
                <td>{index + 1}.</td>
                <td>{item.contact_fullname}</td>
                <td>{item.contact_address}</td>
                <td>{item.contact_message}</td>
                <td>
                  <div className="flex items-center justify-end mr-5 gap-x-3">
                    <button
                      type="button"
                      data-tooltip="Edit"
                      className=" tooltip"
                      onClick={() => handleEdit(item)}
                    >
                      <FaPencil className="size-4 " />
                    </button>
                    <button //3
                      type="button"
                      data-tooltip="Delete"
                      className="  tooltip"
                      onClick={() => handleDelete(item)}
                    >
                      <FaTrash className="size-4" />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ContactTable;
