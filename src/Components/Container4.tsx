import React from "react";
import Input from "./Input";
import UploadDetails from "./CompanyInfo.jsx";
import Requirements2 from "./Requirements2.tsx";
import Toppest from "./Toppest.tsx";
// import DirectorForm from "./DirectorForm.jsx";
// import UploadDetails from "./CompanyInfo.jsx";
import { useStatus } from "../context/StatusContext.js";
import { Link } from "react-router-dom";

const Container4 = () => {
  const { status, setStatus } = useStatus();

  // const handleCompletion = (e: any) => {
  //   e.preventDefault();
  //   setStatus("Completed");
  // };
  const handlePrevious = (e: any) => {
    e.preventDefault();
    setStatus("Validated");
  };
  return (
    <div className="container 4">
      <Toppest handlePrevious={handlePrevious} />
      <p className="mb-8">
        Company Information
        <span className="tracking-[-2px] opacity-55">___________ </span>
        Other Requirements
      </p>

      <Requirements2 />

      <div className="flexMe justify-end gap-7 mt-24">
        <button
          onClick={handlePrevious}
          className="bg-transparent rounded rounded-md font-semibold py-3.5 px-10 border-2 border-blue-500 text-blue-500"
        >
          Previous
        </button>
        <Link
          to={"/Completed"}
          className="bg-blue-500 rounded rounded-md font-semibold py-3.5 px-10 text-white"
        >
          Complete
        </Link>
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
    </div>

    // #25a26b
  );
};

export default Container4;
