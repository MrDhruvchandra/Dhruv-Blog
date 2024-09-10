import React from "react";
import Navbar from "./assets/component/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./assets/component/Footer/Footer";
 
const Layout = () => {

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
     </>
  );
};
export default Layout;
