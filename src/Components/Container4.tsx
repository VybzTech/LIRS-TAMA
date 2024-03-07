// import React from "react";
// import Input from "./Input";
// import UploadDetails from "./CompanyInfo.jsx";
import Requirements2 from "./Requirements2.tsx";
import Toppest from "./Toppest.tsx";
// import DirectorForm from "./DirectorForm.jsx";
import { useVerify } from "../context/VerificationContext.tsx";
// import UploadDetails from "./CompanyInfo.jsx";
import { useStatus } from "../context/StatusContext.js";
import { Link, Navigate, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";

const Container4 = () => {
  const { status, setStatus } = useStatus();

  const navigate = useNavigate();

  const { U2errors, setU2errors, U2touched, setU2touched } = useVerify();
  // const handleCompletion = (e: any) => {
  //   e.preventDefault();
  //   setStatus("Completed");
  // };
  const handlePrevious = (e: any) => {
    e.preventDefault();
    setStatus("Validated");
  };

  const initialValues = { dirCert: "", lasCard: "", techEvidence: "" };

  const validationSchema = Yup.object().shape({
    dirCert: Yup.mixed().required("Upload appropiate document"),
    lasCard: Yup.mixed().required("Upload appropiate document"),
    techEvidence: Yup.mixed().required("Upload appropiate document"),
  });
  const submitForm = async (values, actions) => {
    console.log(values);
    // console.log(actions);
    setStatus("Completed");
    setTimeout(() => {
      navigate("/Completed");
    }, 2500);
    // setTimeout(() => {Navigate({ to: "/Completed" })}, 500);
  };
  return (
    <div className="container 4">
      <Toppest handlePrevious={handlePrevious} />
      <p className="mb-10 tracking-[-0.15px]">
        <span className="opacity-50">Company Information</span>
        <span className="tracking-[-2px] opacity-50 mx-4">___________ </span>
        Other Requirements
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnChange
        onSubmit={submitForm}
        // enableReinitialize={false}
        key={"UploadedForm"}
        // validateOnBlur={true}
      >
        {(formik) => {
          const {
            errors,
            // isSubmitting,
            touched,
            // handleSubmit,
            // handleBlur,
            handleChange,
            isValid,
            dirty,
            // handleChange,
          } = formik;
          // console.log(isSubmitting);
          // setSubmitted(isSubmitting);
          setU2errors(errors);
          setU2touched(touched);
          return (
            <Form>
              <Requirements2 />

              <div className="flexMe justify-end gap-7 mt-24">
                <button
                  onClick={handlePrevious}
                  className="bg-transparent rounded rounded-md font-semibold py-3.5 px-10 border-2 border-blue-500 text-blue-500"
                >
                  Previous
                </button>
                <button
                  className="bg-blue-500 rounded rounded-md font-semibold py-3.5 px-10 text-white"
                  type="submit"
                >
                  Complete
                </button>
                {/* <Link
                  to={"/Completed"}
                  className="bg-blue-500 rounded rounded-md font-semibold py-3.5 px-10 text-white"
                >
                  Complete
                </Link> */}
              </div>
            </Form>
          );
        }}
      </Formik>

      {/* <button
          onClick={() => {
            location.href = "/confirmation";
            // handleCompletion;
          }}
          className="bg-blue-500 rounded rounded-md font-semibold py-3.5 px-10 text-white"
        >
          Complete
        </button> */}
    </div>

    // #25a26b
  );
};

export default Container4;
