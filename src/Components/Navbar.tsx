import React, { useEffect, useState } from "react";
import Header from "./Header";
import Nav from "./Nav";
import { useStatus } from "../context/StatusContext.js";

const Navbar = () => {
  // const [steps, setSteps] = useState<number>(0);

  const { status, setStatus } = useStatus();

  // ('Verified', 'Validated', 'Uploaded', 'Completed') Verification
  const Navs = [
    {
      id: 1,
      title: "ACCOUNT VERIFICATION",
      content:
        "Input the TCC ID for all Directors and Principal officers for Validation",
      poll: "#1957F0",
      step: "Verified",
      active:
        status === "" ||
        status === "Verified" ||
        status === "Validated" ||
        status === "Uploaded",
    },
    {
      id: 2,
      title: "VALIDATION OF INFORMATION",
      content:
        "Verify if all informations provided are correct to proceed to the next step",
      poll: "#E48900",
      step: "Validated",
      active:
        status === "Verified" ||
        status === "Validated" ||
        status === "Uploaded",
    },
    {
      id: 3,
      title: "UPLOAD OF DOCUMENT",
      content: "Upload all necessary document to complete your submission",
      poll: "#157F1F",
      step: "Uploaded",
      active: status === "Validated" || status === "Uploaded",
    },
  ];

  useEffect(() => {
    window?.addEventListener("scroll", () => {
      // console.log(window?.screen.availHeight*0.1);
      // window?.scrollY > 110
      window?.scrollY > window?.screen.availHeight * 0.1
        ? document?.getElementById("NavContent")?.classList?.add("stick")
        : document?.getElementById("NavContent")?.classList?.remove("stick");
    });
    // IMPLEMEMNT STICKY NAVBAR ONCE SCROLLTOP IS >

    return () => {
      window?.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div id="Navbar" className="py-3 px-14">
      <Header />
      <div id="NavContent">
        <h1 className="pt-2 my-5 headers">
          TAX AUDIT MONITORING AGENT (TAMA) REGISTRATION
        </h1>
        <span className="text-sm pb-5 text-zinc-500 inline-block font-light tracking-[0.4px]">
          Steps to Complete
        </span>
        {Navs.map((nav, id) => (
          <Nav
            key={id}
            title={nav?.title}
            content={nav.content}
            poll={nav.poll}
            step={nav?.step}
            id={id}
            active={nav?.active}
          />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
