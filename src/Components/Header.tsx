import React from "react";
import Logo from "../assets/images/Logo.png";

const Header = () => {
  return (
    // <header className=" shadow shadow-[0 2px 15px 2px]">
    <header className="my-6">
      <div className="flex ">
        <img
          className="w-16 object-contain mr-4"
          src={Logo}
          alt="Company Logo"
        />
        <h1 className="headers">LAGOS STATE INTERNAL REVENUE SERVICE</h1>
      </div>
    </header>
  );
};

export default Header;
