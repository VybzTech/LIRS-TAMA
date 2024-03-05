import React from "react";
import Input from "./Input";
import { BsInfoCircle } from "react-icons/bs";
import UploadDoc from "./UploadDoc";


// import infoo from "../assets/info-circle.svg";
const Requirements2 = () => {
  const myArray = [
    "CITN / ICAN Certificate for at least one Director.",
    "LASSRA card for residents or sworn affidavit for non-resident plus any means of identification.",
    "Evidence of technical and administrative competence.",
    
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
export default Requirements2;
