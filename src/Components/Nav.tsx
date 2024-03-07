import React from "react";
import tick from "../assets/check-circle.svg";
import dashes from "../assets/Line.svg";
import { IoCheckmarkCircle, IoCheckmarkCircleOutline } from "react-icons/io5";
// import React from 'react'
type propsType = {
  id: number;
  title: string;
  content: string;
  poll: string;
  active: boolean;
  step: string;
};
// type depTypes = { id: number; step: string }[];
const Nav = ({ id, title, content, poll, step, active }: propsType) => {
  // const deps: depTypes = [
  //   { id: 1, step: "Verified" },
  //   { id: 2, step: "Validated" },
  //   { id: 3, step: "Uploaded" },
  // ];
  // console.log(step, id);
  return (
    <div className="Nav flex gap-4 mb-0.5">
      <div className="flex flex-col items-center justify-start gap-[-3.5rem] mt-[-0.05rem]">
        {/* {deps?.filter( dep.id === id)} */}
        {/* {deps?.map((dep, i) => {
          return <IoCheckmarkCircleOutline className="w-6 h-6 fill-gray-600" />;
          // console.log(i);
          // dep.step === step ? (
          //   <IoCheckmarkCircle className="w-6 h-6 fill-gray-800" />
          // ) : null;
        })} */}
        {/* {step === id ? (
          <IoCheckmarkCircle className="w-6 h-6 fill-gray-800" />
        ) : (
          <IoCheckmarkCircleOutline className="w-6 h-6 fill-gray-600" />
        )} */}
        {active ? (
          <IoCheckmarkCircle className="w-6 h-6 fill-gray-800" />
        ) : (
          <IoCheckmarkCircleOutline className="w-6 h-6 fill-gray-600" />
        )}
        {/* <img className="w-6 thread relative" src={tick} alt="" /> */}
        {id !== 2 && <img className="w-0.5 mt-[-.25rem]" src={dashes} alt="" />}
      </div>
      <div
        className="rec bg-[${poll}] w-[5px] h-20 rounded rounded-sm"
        style={{ backgroundColor: poll }}
      ></div>
      {/* <div className={`rec bg-[blue] w-2 h-24`}></div> */}
      <div>
        <h3 className="text-lg font-extrabold uppercase">{title}</h3>
        <span className="mt-1 font-normal text-zinc-600 text-sm leading-[0.7]">
          {content}
        </span>
      </div>
    </div>
  );
};

export default Nav;
