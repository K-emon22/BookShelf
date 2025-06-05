import React, {useContext} from "react";

import {Link} from "react-router";


import Loder from "../Loder/Loder";
import { AuthContext } from "../ContextFiles/AuthContext";


const Error = () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });

  const {loding} = useContext(AuthContext);

  if (loding) {
    return <Loder></Loder>
  }

  return (
    <div className="mx-[5%]">
      <div className="h-screen px-[5%]">
        <div className="text-center mt-10 ">
          <img
            className=" w-full rounded-lg  m-auto aspect-[3/1] border-10 border-red-600 "
            src="https://i.ibb.co/8ncHrSnp/delivery-break-404-error-animation-fast-food-restaurant-worker-empty-state-4k-concept-footage-with-a.jpg"
            alt=""
          />
        </div>
        <h1 className="text-2xl text-center mt-5 sm:text-5xl font-bold">
          ❌ PAGE NOT FOUND
        </h1>

        <div className="text-center  mt-5 sm:mt-10 ">
          <Link to={"/"} className="">
            <button className="btn  bg-green-600 text-white font-bold  border-black border-2 rounded-lg hover:scale-110 transition-transform">
              Back To Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
