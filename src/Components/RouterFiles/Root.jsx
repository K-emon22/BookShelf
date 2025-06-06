import React from "react";
import {Outlet} from "react-router";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import Footer from "../Pages/Home/Footer/Footer";
import NavBAr from "../Pages/Home/NavBAr/NavBAr";

const Root = () => {
  return (
    <div>
      <NavBAr></NavBAr>

      <Outlet></Outlet>

      <Footer></Footer>
      <ToastContainer />
    </div>
  );
};

export default Root;
