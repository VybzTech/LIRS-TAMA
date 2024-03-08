import * as Yup from "yup";
import Top from "./Top.tsx";
import { useState } from "react";
import toast from "react-hot-toast";
import { pullInfo } from "../Api.js";
import { Form, Formik } from "formik";
import { PulseLoader } from "react-spinners";
import DirectorForm from "./DirectorForm.jsx";
import toastImg from "../assets/images/Logo.png";
import { useStatus } from "../context/StatusContext.tsx";
import PrincipalOfficerForm from "./PrincipalOfficerForm.jsx";
import { useVerify } from "../context/VerificationContext.tsx";

const Container1 = () => {
  const [submitted, setSubmitted] = useState(false);
  const { setStatus } = useStatus();
  const {
    setVerrors,
    setVtouched,
    Vdirectors,
    setVdirectors,
    Vofficers,
    setVofficers,
  } = useVerify();

  const showInfoImg = () => {
    toast.custom(
      (t) => (
        <div
          className={`animate-enter ${
            t.visible ? "animate-enter" : "animate-leave"
          } flex-col items-center justify-center`}
        >
          <img src={toastImg} alt="TCC image template" />
          <span className="font-light text-xs">
            Pls Locate your TCC ID on your TCC.
          </span>
        </div>
      ),
      {
        duration: 3000,
        position: "top-right",
        // Aria
        ariaProps: {
          role: "prompt",
          "aria-live": "polite",
        },
      }
    );
  };

  const returnTCCInfo = (arr, name) =>
    arr.filter((obj) => obj?.name === name)[0]?.info?.tccNo;

  const initialValues = {
    director1: returnTCCInfo(Vdirectors, "director 1") ?? "",
    director2: returnTCCInfo(Vdirectors, "director 2") ?? "",
    Officer1: returnTCCInfo(Vofficers, "officer 1") ?? "",
    Officer2: returnTCCInfo(Vofficers, "officer 2") ?? "",
    Officer3: returnTCCInfo(Vofficers, "officer 3") ?? "",
  };

  const validationSchema = Yup.object().shape({
    director1: Yup.string()
      .matches(/^la\/tcc\/[a-zA-Z0-9]{5,}$/i, "Invalid TCC format")
      .required("Kindly verify your 1st Director's TCC no"),
    director2: Yup.string()
      .matches(/^la\/tcc\/[a-zA-Z0-9]{5,}$/i, "Invalid TCC format")
      .required("Kindly verify your 2nd Director's TCC no"),
    Officer1: Yup.string()
      .matches(/^la\/tcc\/[a-zA-Z0-9]{5,}$/i, "Invalid TCC format")
      .required("Kindly verify your 1st Officer's TCC no"),
    Officer2: Yup.string()
      .matches(/^la\/tcc\/[a-zA-Z0-9]{5,}$/i, "Invalid TCC format")
      .required("Kindly verify your 2nd Officer's TCC no"),
    Officer3: Yup.string()
      .matches(/^la\/tcc\/[a-zA-Z0-9]{5,}$/i, "Invalid TCC format")
      .required("Kindly verify your 3rd Officer2's TCC no"),
  });

  const submitForm = async (values, actions) => {
    //    SET SUBMITTED STATE ONCE BUTTON IS CLICKED
    setSubmitted(true);
    let response;
    try {
      response = await pullInfo(values);
    } catch (err) {
      console.error("Error validating info:", err);
      toast.error("Error Validating TCC nos", { position: "top-right" });
      setSubmitted(false);
      throw err;
    }

    //  CREATE DIRECTOR & OFFICER OBJECTS FROM VERIFIED TCC NOs
    let Director1Info = {
      name: "director 1",
      info: response?.filter((res) => res?.tccNo === values?.director1)[0],
    };
    let Director2Info = {
      name: "director 2",
      info: response?.filter((res) => res?.tccNo === values?.director2)[0],
    };
    let Officer1Info = {
      name: "officer 1",
      info: response?.filter((res) => res?.tccNo === values?.Officer1)[0],
    };
    let Officer2Info = {
      name: "officer 2",
      info: response?.filter((res) => res?.tccNo === values?.Officer2)[0],
    };
    let Officer3Info = {
      name: "officer 3",
      info: response?.filter((res) => res?.tccNo === values?.Officer3)[0],
    };

    //  SET OBJECTS AS CONTEXT VARIABLES
    setVdirectors([Director1Info, Director2Info]);
    setVofficers([Officer1Info, Officer2Info, Officer3Info]);

    setTimeout(() => {
      setSubmitted(false);
      setStatus("Verified");
    }, 750);
  };

  return (
    <>
      <Top />
      <div className="container 1">
        <Formik
          key={"VerificationForm"}
          validateOnChange
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={submitForm}
        >
          {(formik) => {
            const { errors, touched, isValid, dirty } = formik;
            setVerrors(errors);
            setVtouched(touched);
            return (
              <Form>
                <DirectorForm showInfoImg={showInfoImg} />
                <PrincipalOfficerForm showInfoImg={showInfoImg} />
                <button
                  type="submit"
                  className={`textShade bg-blue-500 text-white rounded 
                  rounded-md px-5 py-4 w-full text-[0.925rem] capitalize
                  font-semibold my-5 transition-all ease duration-300
                  ease-in-out tracking-[0.1px] hover:bg-blue-700
                  cursor-pointer ${!(dirty && isValid) ? "disabled-btn" : ""}`}
                >
                  {submitted ? (
                    <>
                      verifying
                      <PulseLoader
                        size={7}
                        className="ml-3"
                        speedMultiplier={0.6}
                        color="#fff"
                      />
                    </>
                  ) : (
                    "verify details"
                  )}
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
};

export default Container1;
