import React from "react";
import Input from "./Input";
import { BsInfoCircle } from "react-icons/bs";

// import infoo from "../assets/info-circle.svg";
const DirectorForm = () => {
  return (
    <div>
      <div className="">
        <span className="align-top  text-zinc-400 text-[12px] font-medium">
          Company's Information
        <BsInfoCircle className="inline mb-0.5 ml-2 text-[12px] font-bold" />
        </span>
        <p className="text-gray-300 tracking-2">
          ----------------------------------------------------------------------------------------------------
        </p>
        {/* <span>
          <svg className="fill-zinc-300 w-3" viewBox="0 0 512 512">
            <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z" />
          </svg>
          // {/* <img src="" alt="" /> *
        </span> */}
      </div>
      <form action="">
        <div className="my-4 justify-start flexMe gap-7 ">
          <Input label="Director 1" placeholder="e.g LA/TCC/000XXXXXXX" />
          <Input label="Director 2" placeholder="e.g LA/TCC/000XXXXXXX" />
        </div>
      </form>
    </div>
  );
};

export default DirectorForm;
