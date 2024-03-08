import Toppest from "./Toppest.tsx";
import Requirements2 from "./Requirements2.tsx";
import { useStatus } from "../context/StatusContext.js";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { useUpload } from "../context/UploadContext.tsx";
import { useState } from "react";
import { ClipLoader } from "react-spinners";

const Container4 = () => {
  const { setStatus } = useStatus();

  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState<boolean>(false);

  const { setUploads, setU2errors, setU2touched } = useUpload();
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
  const submitForm = async (values) => {
    setSubmitted(true);
    setUploads(values);
    setTimeout(() => {
      setSubmitted(false);
      setStatus("Completed");
      navigate("/Completed");
    }, 2500);
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
        key={"UploadedForm"}
        validateOnChange
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitForm}
      >
        {(formik) => {
          const { errors, touched, isValid, dirty } = formik;
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
                  className={`bg-blue-500 rounded rounded-md font-semibold py-3.5 px-10
                  text-white ${!(dirty && isValid) ? "disabled-btn" : ""}`}
                  type="submit"
                >
                  {submitted ? (
                    <>
                      Please wait
                      <ClipLoader
                        size={13}
                        className="ml-1.5"
                        speedMultiplier={0.7}
                        color="#fff"
                      />
                    </>
                  ) : (
                    "Complete"
                  )}
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Container4;
