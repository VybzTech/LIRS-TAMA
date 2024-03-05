import * as Yup from "yup";
import Input from "./Input";
import Toppest from "./Toppest.tsx";
import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import Requirements from "./Requirements.tsx";
import UploadDetails from "./CompanyInfo.jsx";
import { useStatus } from "../context/StatusContext.js";

const Container3 = () => {
  const { status, setStatus } = useStatus();
  const [submitted, setSubmitted] = useState(false);

  const handleUpload = (e: any) => {
    e.preventDefault();
    setStatus("Uploaded");
  };
  const handlePrevious = (e: any) => {
    // e.preventDefault();
    console.log(status);
    setStatus("Verified");
    console.log(status);
  };

  useEffect(() => {}, [status]);

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
    companyID: Yup.string().required("sample required msg"),
    companyName: Yup.string().required("sample required msg"),
    companyEmail: Yup.string().required("sample required msg"),
    companyNo: Yup.string().required("sample required msg"),
    companyHistory: Yup.string().required("sample required msg"),
    // REQUIREMENTS INIT VALUES
    cacDoc: Yup.string().required("sample required msg"),
    financial3yrs: Yup.string().required("sample required msg"),
    efccForm: Yup.string().required("sample required msg"),
    formalLetter: Yup.string().required("sample required msg"),
    regFee: Yup.string().required("sample required msg"),
    businessPrem: Yup.string().required("sample required msg"),
  })
  const submitForm = async (values, actions) => {
    setSubmitted(true);
  }

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
        <div className="my-6 justify-start flexMe gap-7">
          {/* <Input
            label="Payer ID"
            placeholder="C-****414"
            name={""}
            asComponent={""}
            errorMsg={""}
            err={false}
          />
          <Input
            label="Company Name"
            placeholder="ABC"
            name={""}
            asComponent={""}
            errorMsg={""}
            err={false}
          /> */}
        </div>
        <div className="my-6 justify-start flexMe gap-7">
          {/* <Input
            asComponent="email"
            label="Email Address"
            placeholder="johndoe@example.com"
            name={""}
            errorMsg={""}
            err={false}
          />
          <Input
            label="Phone Number"
            placeholder="08023456789"
            name={""}
            asComponent={""}
            errorMsg={""}
            err={false}
          /> */}
        </div>

        {/* <Input
          asComponent="textarea"
          label="Company History"
          placeholder="Lorem ipsum dolor "
          name={""}
          errorMsg={""}
          err={false}
        /> */}

        {/* <Requirements /> */}
        <div className="flexMe justify-end gap-7">
          <button
            onClick={handlePrevious}
            className="bg-transparent rounded rounded-md font-semibold py-3.5 px-10 border-2 border-blue-500 text-blue-500"
          >
            Previous
          </button>
          <button
            onClick={handleUpload}
            className="bg-blue-500 rounded rounded-md font-semibold py-3.5 px-10 text-white"
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default Container3;
