import React from "react";
import {Outlet} from "react-router";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../Pages/Home/Footer/Footer";
import NavBAr from "../Pages/Home/NavBAr/NavBAr";

const Root = () => {
  return (
    <div>
      <NavBAr></NavBAr>

      <Outlet></Outlet>

      <Footer></Footer>
      <ToastContainer
        toastClassName={"border border-4 font-bold text-black"}
        style={{
          marginTop: "45px", 
        }}

      />
    </div>
  );
};

export default Root;
