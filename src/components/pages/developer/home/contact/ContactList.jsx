import { Form, Formik } from "formik";
import React from "react";
import { InputText, InputTextArea } from "../../../../helpers/FormInputs";
import * as Yup from "yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiVersion } from "../../../../helpers/function-general";
import { queryData } from "../../../../custom-hooks/queryData";

const ContactList = ({
  isLoading,
  isFetching,
  error,
  itemEdit,
  dataContact,
  handleAdd,
  handleEdit,
  handleDelete,
}) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `${apiVersion}/controllers/developer/contact/contact.php?id=${itemEdit.contact_aid}`
          : `${apiVersion}/controllers/developer/contact/contact.php
          `,
        itemEdit
          ? "put" //update
          : "post", //create
        values
      ),

    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["contact"] });

      if (!data.success) {
        alert(data.error);
      } else {
        alert(`Successfully created.`);
        // setIsModal(false);
      }
    },
  });

  const initVal = {
    contact_fullname: itemEdit ? itemEdit.contact_fullname : "",
    contact_email: itemEdit ? itemEdit.contact_email : "",
    contact_message: itemEdit ? itemEdit.contact_message : "",

   
  };

  const yupSchema = Yup.object({
    contact_fullname: Yup.string().required("required"),
  });
  return (
    <>
      <div className="">
        <Formik
          initialValues={initVal}
          validationSchema={yupSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            console.log(values);

            mutation.mutate(values);
            resetForm();
          }}
        >
          {(props) => {
            return (
              <Form>
                <div className="modal-overflow">
                  <div className="relative mt-3 mb-5">
                    <InputText
                      label="Full Name"
                      name="contact_fullname"
                      type="text"
                    />
                  </div>
                  <div className="relative mt-3 mb-5">
                    <InputText
                      label="Email Address"
                      name="contact_email"
                      type="text"
                    />
                  </div>
                  <div className="relative mt-3 mb-5">
                    <InputTextArea
                      label="Your Message"
                      name="contact_message"
                      type="text"
                    />
                    <div className="pt-4">
                      <button className="btn btn--blue w-full" type="submit">
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
};

export default ContactList;
