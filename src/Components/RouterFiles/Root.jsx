import React from "react";
import {Outlet} from "react-router";
import Footer from "../Pages/Home/Footer/Footer";
import NavBAr from "../Pages/Home/NavBAr/NavBAr";

const Root = () => {
  return (
    <div>
      <NavBAr></NavBAr>

      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  );
};

export default Root;
