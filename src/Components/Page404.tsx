import React, { useEffect } from "react";
import { Link, redirect, useLocation } from "react-router-dom";

const Page404 = () => {
  useEffect(() => {
    redirect("/");
  }, []);
  let location = useLocation();
  console.log(location.pathname);
  //   use

  // window
  return (
    <div className="w-full h-full text-lg font-medium text-center max-w-80 ">
      Please head back to the registration process here
      <Link
        className="m-auto block mx-8 py-2  hover:text-blue-600 transition duration-150 ease ease-in-out"
        to={"/"}
      >
        Home
      </Link>
    </div>
  );
  // };
};

export default Page404;
