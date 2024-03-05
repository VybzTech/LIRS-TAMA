import Navbar from "./Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Page404 from "./Page404";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  // console.log(currentPath);
  // const Layout = ({ children }: propType) => {
  return (
    <div id="app" className="flex">
      {currentPath === "/" ? <Navbar /> : null}
      <Toaster />
      {/* {currentPath !== "/" && currentPath !== "/Completed" ? <Page404 /> : null} */}
      <Outlet />
    </div>
  );
};

export default Layout;
