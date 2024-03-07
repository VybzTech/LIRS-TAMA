import * as Yup from "yup";
import Input from "./Input";
import Toppest from "./Toppest.tsx";
import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import Requirements from "./Requirements.tsx";
import { useStatus } from "../context/StatusContext.js";
import { useVerify } from "../context/VerificationContext.tsx";
import ErrorInfo from "./ErrorInfo.tsx";
import { IoCheckmarkCircle } from "react-icons/io5";
import { companyInfo } from "../Api.js";
import toast from "react-hot-toast";

type CompanyProps = {
  Cid: string;
  companyMail: string;
  companyName: string;
  companyNo: number;
};

const Container3 = () => {
  const { status, setStatus } = useStatus();
  const [submitted, setSubmitted] = useState(false);
  const { Uerrors, setUerrors, Utouched, setUtouched } = useVerify();
  // const [Cname, setCname] = useState<string>("");
  const [changeCount, setChangeCount] = useState<number>(0);
  // const [companyInformation, setCompanyInformation] = useState<CompanyProps[]>(
  //   []
  // );

  const handlePrevious = (e: any) => {
    // e.preventDefault();
    console.log(status);
    setStatus("Verified");
    console.log(status);
  };

  useEffect(() => {
    // console.log(Cname);
    // console.log(document?.getElementsByName("companyName")[0]);
    // let CnameInput =
    // document?.getElementsByName("companyName")[0];
    // CnameInput.value = Cname
    // console.log(document?.getElementsByName("companyName")[0]?.value);
    // console.log(CnameInput);
    // name={"companyName"}
  }, [status]);

  const initialValues = {
    companyID: "",
    companyName: "",
    companyEmail: "",
    companyNo: "",
    companyHistory: "",
    // REQUIREMENTS INIT VALUES
    cacDoc: "",
    financial3yrs: "",
    efccForm: "",
    formalLetter: "",
    regFee: "",
    businessPrem: "",
  };

  const validationSchema = Yup.object().shape({
    companyID: Yup.string()
      .min(4, "Incomplete Payer ID")
      .matches(/^c-\d{3,}$/i, "Invalid Payer ID format")
      .required("Please provide a valid company ID"),
    companyName: Yup.string()
      .min(3, "Incomplete Company Name")
      .required("Kindly confirm your Company's name"),
    companyEmail: Yup.string()
      .email("Invalid email format")
      .required("Kindly provide your Company's email"),
    companyNo: Yup.string()
      .matches(/^(0|\+?234)?\d{9,}$/, "Invalid Phone number")
      .required("Kindly provide your Company's phone number"),
    companyHistory: Yup.string().min(10).trim().notRequired(),
    // REQUIREMENTS INIT VALUES
    cacDoc: Yup.mixed().required("Upload appropiate document"),
    financial3yrs: Yup.mixed().required("Upload appropiate document"),
    efccForm: Yup.mixed().required("Upload appropiate document"),
    formalLetter: Yup.mixed().required("Upload appropiate document"),
    regFee: Yup.mixed().required("Upload appropiate document"),
    businessPrem: Yup.mixed().required("Upload appropiate document"),
  });
  const submitForm = async (values, actions) => {
    setSubmitted(true);
    console.log(values);
    setStatus("Uploaded");
  };

  const manageID = async (
    e: any,
    fieldSetter: (
      field: string,
      value: any,
      shouldValidate?: boolean | undefined
    ) => void
  ) => {
    // setChangeCount((prev) => prev + 1);
    // console.log(changeCount);
    // console.log(e?.target?.value);
    // const manageID = (e: unknown) => {
    // console.log("performing side effects");
    // console.log("Changed Value", e?.target?.value);
    //run side effects here
    let response;
    try {
      response = await companyInfo();
      // console.log("RES", response);
      // PULLED COMPANY INFO

      const compInfo: CompanyProps[] = response?.filter(
        (res) => res?.Cid?.toLowerCase() === e?.target?.value.toLowerCase()
      );
      console.log("company Information", compInfo);
      // console.log(companyInformation)
      // setCompanyInformation(compInfo);
      // console.log(companyInformation)
      // console.log(companyInformation);
      console.log(compInfo.length);
      if (compInfo.length > 0) {
        const { Cid, companyMail, companyName, companyNo } = compInfo[0];
        console.table(Cid);
        // setCname(companyName);
        fieldSetter("companyName", companyName, true);
        fieldSetter("companyNo", companyNo, true);
        fieldSetter("companyEmail", companyMail, true);
      } else if (compInfo.length < 1) {
        fieldSetter("companyName", "", false);
        fieldSetter("companyNo", "", false);
        fieldSetter("companyEmail", "", false);
        // if (changeCount > 10) {
        toast.success("This company information has not been pulled", {
          position: "top-right",
        });
        //   console.log("This company information....");
        //   setChangeCount((prev) => prev - 5);
        // }
      }
    } catch (err) {
      console.error("Error validating info:", err);
      toast.error("Error Validating TCC nos", { position: "top-right" });
      setSubmitted(false);
      throw err;
    }
  };

  return (
    <>
      <Toppest handlePrevious={handlePrevious} />
      <div className="container 3">
        <p className="mb-10 tracking-[-0.15px]">
          Company Information
          <span className="tracking-[-2px] opacity-50 mx-4">___________ </span>
          <span className="opacity-50">Other Requirements</span>
        </p>
        <p className="mb-2 font-semibold text-[0.95rem] text-slate-800">
          Company's Information
        </p>
        <hr />
        <div className="my-6 justify-start flexMe gap-7 [&>form]:w-full">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            validateOnChange
            onSubmit={submitForm}
            // enableReinitialize={false}
            key={"UploadForm"}
            // validateOnBlur={true}
          >
            {(formik) => {
              const {
                errors,
                // isSubmitting,
                touched,
                values,
                setFieldValue,
                // handleSubmit,
                handleBlur,
                // handleChange,
                isValid,
                dirty,
                // handleChange,
              } = formik;
              // console.log(isSubmitting);
              // console.log(values);
              // setSubmitted(isSubmitting);
              setUerrors(errors);
              setUtouched(touched);
              return (
                <Form>
                  <div className="my-6 justify-start flexMe gap-12">
                    {/* <Input 
                      label="Payer ID"
                      placeholder="C-****414"
                      name="companyID"
                      asComponent=""
                      err={Uerrors?.companyID && Utouched?.companyID}
                      errorMsg={Uerrors?.companyID}
                    />
                    HAD TO CALL THE INPUT COMPONENT MANUALLY BECAUSE OF SIDE EFFECTS 
                    */}
                    <div className="w-full">
                      <div className="flex items-center justify-between mb-1.5">
                        <label
                          className="text-[13.5px] text-[#111]"
                          htmlFor="companyID"
                        >
                          Payer ID
                        </label>
                        {Uerrors?.companyID && Utouched?.companyID && (
                          <ErrorInfo info={Uerrors?.companyID} />
                        )}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Field
                          autoComplete="off"
                          name="companyID"
                          className="text-zinc-500 w-full border border-[1.75px] border-solid border-[#ccc] px-4 py-3 rounded rounded-md focus:border-1 placeholder:text-[12px] tracking-[0.2px] placeholder:font-light"
                          placeholder="C-****414"
                          onBlur={(e: unknown) => {
                            handleBlur(e);
                            manageID(e, setFieldValue);
                          }}
                          // onChange={(e: unknown) => {
                          //   handleChange(e);
                          //   manageID(e, setFieldValue);
                          // }}
                        />
                        <IoCheckmarkCircle className="w-7 h-7 fill-green-600 mr-[-1.8rem]" />
                      </div>
                    </div>
                    <Input
                      label="Company Name"
                      placeholder="ABC"
                      name={"companyName"}
                      asComponent={""}
                      err={Uerrors?.companyName && Utouched?.companyName}
                      errorMsg={Uerrors?.companyName}
                    />
                  </div>
                  <div className="my-6 justify-start flexMe gap-12">
                    <Input
                      asComponent="email"
                      label="Email Address"
                      placeholder="johndoe@example.com"
                      name={"companyEmail"}
                      err={Uerrors?.companyEmail && Utouched?.companyEmail}
                      errorMsg={Uerrors?.companyEmail}
                    />
                    <Input
                      label="Phone Number"
                      placeholder="08023456789"
                      name={"companyNo"}
                      asComponent={""}
                      err={Uerrors?.companyNo && Utouched?.companyNo}
                      errorMsg={Uerrors?.companyNo}
                    />
                  </div>
                  <Input
                    asComponent="textarea"
                    label="Company History"
                    placeholder="Lorem ipsum dolor "
                    name={"companyHistory"}
                    err={Uerrors?.companyHistory && Utouched?.companyHistory}
                    errorMsg={Uerrors?.companyHistory}
                  />
                  <Requirements />
                  <div className="flexMe justify-end gap-7 mt-20">
                    <button
                      onClick={handlePrevious}
                      className="bg-transparent rounded rounded-md font-semibold py-3.5 px-10 border-2 border-blue-500 text-blue-500"
                    >
                      Previous
                    </button>
                    <button
                      type="submit"
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
      </div>
    </>
  );
};

export default Container3;
