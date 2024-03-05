import React from "react";
import Input from "./Input";
import { BsInfoCircle } from "react-icons/bs";
import UploadDoc from "./UploadDoc";


// import infoo from "../assets/info-circle.svg";
const Requirements = () => {
  const myArray = [
    "Upload CAC Document(Particulars of Partners/Directors).",
    "Audited Financial Statement for the last 3 years",
    "Stamped and completed EFCC anti-money laudering form.",
    "Formal Application Letter.",
    "Evidence of payment of registration fee (50,000 Naira bank draft)",
    "Evidence of payment of business premises rate ( Registration / Renewal) ",
  ];
  return (
    <>
    
<p className="mb-2 mt-5 font-bold">Requirements</p>
      <hr />
      {myArray?.map((item,id) => (
          
          <UploadDoc id={id+1} title={item}  />
        // <ol>{id+1}. {item}</ol>
      ))}
    </>
  );
};
export default Requirements;
