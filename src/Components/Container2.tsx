import DirectorDetails from "./DirectorDetails.tsx";
import PrincipalOfficerDetails from "./PrincipalOfficerDetails.jsx";
import Topper from "./Topper.js";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useStatus } from "../context/StatusContext.js";
import { useVerify } from "../context/VerificationContext.tsx";

const Container2 = () => {
  const { setStatus } = useStatus();
  const { Vdirectors, Vofficers } = useVerify<object>();
  const {
    setVAerrors,
    VAtouched,
    setVAtouched,
    VAerrors,
    // Vdirectors,
    // setVdirectors,
    // Vofficers,
    // setVofficers,
  } = useVerify();

  const returnfullName: object = (arr: object[], name: string) => {
    return arr.filter((obj) => obj?.name === name)[0]?.info?.fullName;
  };

  const returnID: object = (arr: object[], name: string) => {
    return arr.filter((obj) => obj?.name === name)[0]?.info?.PayerID;
  };

  const initialValues = {
    director1Details_ID: returnID(Vdirectors, "director 1"),
    director1Details: returnfullName(Vdirectors, "director 1"),
    director2Details_ID: returnID(Vdirectors, "director 2"),
    director2Details: returnfullName(Vdirectors, "director 2"),
    Officer1Details_ID: returnID(Vofficers, "officer 1"),
    Officer1Details: returnfullName(Vofficers, "officer 1"),
    Officer2Details_ID: returnID(Vofficers, "officer 2"),
    Officer2Details: returnfullName(Vofficers, "officer 2"),
    Officer3Details_ID: returnID(Vofficers, "officer 3"),
    Officer3Details: returnfullName(Vofficers, "officer 3"),
  };
  // LA/TCC/42RF34DH34H9027M2D
  // LA/TCC/DVFERFV3V13VREV3I
  // LA/TCC/7M2DH34H902FDH34H
  //  la/tcc/ADJHCV35324FR4B4487G4T
  //  la/tcc/TEB3GF24fE4B4WFBEFU4fe
  const validationSchema = Yup.object().shape({
    director1Details_ID: Yup.string()
      .min(4, "Incomplete Payer ID")
      .matches(/^N-\w{3,}$/i, "Invalid Payer ID format")
      .required("Kindly verify your Director's Payer ID"),
    director1Details: Yup.string()
      .min(5, "Incomplete details")
      .required("Kindly verify your 1st Director's details"),
    director2Details_ID: Yup.string()
      .min(4, "Incomplete Payer ID")
      .matches(/^N-\w{3,}$/i, "Invalid Payer ID format")
      .required("Kindly verify your Director's Payer ID"),
    director2Details: Yup.string()
      .min(5, "Incomplete details")
      .required("Kindly verify your 2nd Director's details"),
    Officer1Details_ID: Yup.string()
      .min(4, "Incomplete Payer ID")
      .matches(/^N-\w{3,}$/i, "Invalid Payer ID format")
      .required("Kindly verify your Officer's Payer ID"),
    Officer1Details: Yup.string()
      .min(5, "Incomplete details")
      .required("Kindly verify your 1st Officer's details"),
    Officer2Details_ID: Yup.string()
      .min(4, "Incomplete Payer ID")
      .matches(/^N-\w{3,}$/i, "Invalid Payer ID format")
      .required("Kindly verify your Officer's Payer ID"),
    Officer2Details: Yup.string()
      .min(5, "Incomplete details")
      .required("Kindly verify your 2nd Officer's details"),
    Officer3Details_ID: Yup.string()
      .min(4, "Incomplete Payer ID")
      .matches(/^N-\w{3,}$/i, "Invalid Payer ID format")
      .required("Kindly verify your Officer's Payer ID"),
    Officer3Details: Yup.string()
      .min(5, "Incomplete details")
      .required("Kindly verify your 3rd Officer's details"),
  });

  // const handleValidation = (e) => {
  //   e.preventDefault();
  //   setStatus("Validated");
  // };

  const handlePrevious = (e: unknown) => {
    e.preventDefault();
    setStatus("");
    // console.log(Vdirectors);
    // console.log(Vofficers);
  };

  const submitForm = async (values: object) => {
    // (values) => {
    // e.preventDefault();
    // console.log("Values", values);

    // try {
    //   const response = await pullInfo(values);
    //   console.log(response);
    // } catch (error) {
    //   console.error("Error validating info:", error);
    // }
    setTimeout(() => {
      console.log(JSON.stringify(values));
      setStatus("Validated");
    }, 2500);
  };

  return (
    <>
      <Topper handlePrevious={handlePrevious} />
      <div className="container 2">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          validateOnChange
          onSubmit={submitForm}
          // validateOnBlur={true}
        >
          {(formik) => {
            const {
              errors,
              touched,
              // handleSubmit,
              isValid,
              dirty,
              // handleChange,
            } = formik;
            // console.log("errors", errors);
            // console.log(touched);
            setVAerrors(errors);
            setVAtouched(touched);
            return (
              <Form>
                <DirectorDetails
                  name="director1Details_ID"
                  fullName="director1Details"
                  head="Director 1"
                  idPlaceholder="N-****452"
                  fullNamePlaceholder="Ade...... A.... Adetou.."
                  err={
                    VAerrors?.director1Details && VAtouched?.director1Details
                  }
                  errMsg={VAerrors?.director1Details}
                  idErr={
                    VAerrors?.director1Details_ID &&
                    VAtouched?.director1Details_ID
                  }
                  idErrMsg={VAerrors?.director1Details_ID}
                />
                <DirectorDetails
                  name="director2Details_ID"
                  fullName="director2Details"
                  head="Director 2"
                  idPlaceholder="N-****302"
                  fullNamePlaceholder="Kha...... I.... Musaf.."
                  err={
                    VAerrors?.director2Details && VAtouched?.director2Details
                  }
                  errMsg={VAerrors?.director2Details}
                  idErr={
                    VAerrors?.director2Details_ID &&
                    VAtouched?.director2Details_ID
                  }
                  idErrMsg={VAerrors?.director2Details_ID}
                />
                <PrincipalOfficerDetails
                  name="Officer1Details_ID"
                  fullName="Officer1Details"
                  head="Principal 1"
                  idPlaceholder="N-****230"
                  fullNamePlaceholder="Ada...... E.... Fata.."
                  err={VAerrors?.Officer1Details && VAtouched?.Officer1Details}
                  errMsg={VAerrors?.Officer1Details}
                  idErr={
                    VAerrors?.Officer1Details_ID &&
                    VAtouched?.Officer1Details_ID
                  }
                  idErrMsg={VAerrors?.Officer1Details_ID}
                />
                <PrincipalOfficerDetails
                  name="Officer2Details_ID"
                  fullName="Officer2Details"
                  head="Principal 2"
                  idPlaceholder="N-****735"
                  fullNamePlaceholder="Gaf...... Q.... Atib.."
                  err={VAerrors?.Officer2Details && VAtouched?.Officer2Details}
                  errMsg={VAerrors?.Officer2Details}
                  idErr={
                    VAerrors?.Officer2Details_ID &&
                    VAtouched?.Officer2Details_ID
                  }
                  idErrMsg={VAerrors?.Officer2Details_ID}
                />
                <PrincipalOfficerDetails
                  name="Officer3Details_ID"
                  fullName="Officer3Details"
                  head="Principal 3"
                  idPlaceholder="N-****639"
                  fullNamePlaceholder="Mob...... D.... Ogun.."
                  err={VAerrors?.Officer3Details && VAtouched?.Officer3Details}
                  errMsg={VAerrors?.Officer3Details}
                  idErr={
                    VAerrors?.Officer3Details_ID &&
                    VAtouched?.Officer3Details_ID
                  }
                  idErrMsg={VAerrors?.Officer3Details_ID}
                />
                <div className="flexMe justify-end gap-7">
                  <button
                    onClick={handlePrevious}
                    className="bg-transparent rounded rounded-md font-semibold py-3.5 px-10 border-2 border-blue-500 text-blue-500 transition-all ease ease-in-out duration-150 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-700"
                  >
                    Previous
                  </button>
                  <button
                    // onClick={handleValidation}
                    className={`bg-blue-500 rounded rounded-md font-semibold py-3.5 px-10
                     text-white ${!(dirty && isValid) ? "disabled-btn" : ""}`}
                  >
                    Continue
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
};

export default Container2;
