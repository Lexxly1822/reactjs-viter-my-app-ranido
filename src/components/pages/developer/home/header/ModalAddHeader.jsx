import React from "react";
import { Form, Formik } from "formik";
// import { InputText, InputTextArea } from "../../../../helpers/FormInputs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryData } from "../../../../custom-hooks/queryData";
import * as Yup from "yup";
import { apiVersion } from "../../../../helpers/function-general";
import ModalWrapper from "../../../../partials/modal/ModalWrapper";
import { FaTimes } from "react-icons/fa";
import { InputText, InputTextArea } from "../../../../helpers/FormInputs";

//setIsmodal nag c-close
const ModalAddHeader = ({ setIsModal }) => {
  const [animate, setAnimate] = React.useState("translate-x-full");
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        `${apiVersion}/controllers/developer/header/header.php`,
        "post", //CREATE
        values
      ),
    onSuccess: (data) => {
      if (data.success) {
        alert("Successfully Created.");
      } else {
        alert(data.error);
      }
    },
  });

  const handleClose = () => {
    if (mutation.isPending) return; // dont close while query is ongoing
    setAnimate("translate-x-full"); //animate close of modal
    //Delay OF CLOSING MODAL
    setTimeout(() => {
      setIsModal(false); //close upon animation exit
    }, 200);
  };

  const initVal = { header_name: "", header_link: "" };

  const yupSchema = Yup.object({
    header_name: Yup.string().required("required"),
    header_link: Yup.string().required("required"),
  });

  //upon using this modal and all element tag are rendered run this code
  React.useEffect(() => {
    setAnimate("");
  }, []); //[] is dependencies, if you have a value inside re-run the code inside

  return (
    <>
      <ModalWrapper className={`${animate}`} handleClose={handleClose}>
        <div className="modal_header relative mb-4">
          <h3 className="text-sm">Add Header</h3>
          <button
            className="absolute  top-0.5 right-0"
            type="button"
            onClick={handleClose}
          >
            <FaTimes className="size-4" />
          </button>
        </div>

        <div className="modal_body overflow-y-auto overflow-x-hidden max-h-[calc(100dvh-40px)]">
          <Formik
            initialValues={initVal}
            validationSchema={yupSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              console.log(values);
              mutation.mutate(values);
            }}
          >
            {(props) => {
              return (
                <Form>
                  {/* Forms */}
                  <div className="modal-overflow">
                    <div className="relative mt-5 mb-6">
                      <InputText
                        label="Name"
                        name="header_name"
                        type="text"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="relative mt-5 mb-5">
                      <InputText
                        label="Link"
                        name="header_link"
                        type="text"
                        disabled={mutation.isPending}
                      />
                    </div>
                    {/* Modal actions */}
                  </div>
                  <div className="modal__action flex justify-end absolute bottom-0 w-full mt-6 mb-4 gap-2 left-0 px-6">
                    <button
                      type="submit"
                      disabled={mutation.isPending}
                      className="btn-modal-submit"
                    >
                      {mutation.isPending ? "Loading..." : "Add"}
                    </button>
                    <button
                      type="reset"
                      disabled={mutation.isPending}
                      className="btn-modal-cancel"
                      onClick={handleClose}
                    >
                      Cancel
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </ModalWrapper>
    </>
  );
};

export default ModalAddHeader;
