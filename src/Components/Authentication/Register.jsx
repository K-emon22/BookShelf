import React from "react";
import {Link} from "react-router";

const Register = () => {
  return (
    <div
      className="bg-cover bg-center h-screen px-[2%]"
      style={{backgroundImage: `url('public/Mobile login-rafiki.png')`}}
    >
      <h1 className="font-bold text-2xl sm:text-5xl text-center">
        {" "}
        Ready to Explore? Sign Up!
      </h1>

      <div className="flex justify-center items-center ">
        <form className="flex flex-col justify-center items-center min-h-[calc(100vh-100px)]  md:gap-2 w-2/5  ">
          <input
            type="text"
            name="name"
            className="border-2 border-blue-600 p-2 h-10 font-semibold rounded-lg md:w-full bg-white/40 "
            placeholder=" Enter Your Name"
          />
          <br />
          <input
            type="text"
            name="email"
            className="border-2 border-blue-600 p-2 h-10 font-semibold rounded-lg md:w-full bg-white/40"
            placeholder=" Enter Your email"
          />
          <br />
          <input
            type="text"
            name="Photo"
            className="border-2 border-blue-800 p-2 h-10 font-semibold rounded-lg md:w-full bg-white/40"
            placeholder=" Enter Your Photo Url"
          />
          <br />
          <input
            type="text"
            name="Password"
            className="border-2 border-blue-600 p-2 h-10 font-semibold rounded-lg md:w-full bg-white/40"
            placeholder=" Enter Your Password"
          />

          <button className=" mt-8 font-bold border-2 w-[206.5px] md:w-full bg-[#F5F5F5]   h-10 my-auto rounded-full mb-2">
            {" "}
            Google{" "}
          </button>
          <button className=" bg-blue-500 text-white font-bold border-2 border-black w-[206.5px] md:w-full  h-10 rounded-full ">
            Register
          </button>
          <h1>
            {" "}
            Already have an account?
            <Link
              to={"/login"}
              className="text-blue-600 cursor-pointer font-semibold"
            >
              {" "}
              Login Now
            </Link>
          </h1>
        </form>
      </div>
    </div>
  );
};

export default Register;
