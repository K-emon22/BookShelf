import React, {useEffect, useState} from "react";

import {Link} from "react-router";
import {motion} from "framer-motion";

import Loder from "../Loder/Loder";

const Error = () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });

  const [loding, setLoding] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoding(false);
    }, 500);
  }, []);
  if (loding) {
    return <Loder></Loder>;
  }

  return (
    <motion.div
      className=" min-h-screen bg-no-repeat bg-center
    "
      style={{
        backgroundImage:
          "url('/404-error-with-people-holding-the-numbers-animate.svg')",
      }}
      initial={{opacity: 0, y: 60}}
      animate={{opacity: 1, y: 0}}
      exit={{opacity: 0, y: -40}}
      transition={{duration: 1.2}}
    >
      <div className="h-screen px-[5%]">
        <h1 className="text-2xl text-center mt-5 sm:text-5xl font-bold">
          Oops! Page not found ❌
        </h1>

        <div className="text-center  mt-5 sm:mt-10 ">
          <Link to={"/"} className="">
            <button className="btn  bg-blue-500 text-white font-bold  border-black border-2 rounded-lg hover:scale-110 transition-transform">
              Back To Home
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Error;
