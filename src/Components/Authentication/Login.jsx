import React from "react";
import {Link} from "react-router";

const Login = () => {
  return (
    <div
      className="bg-cover bg-center h-screen px-[2%]"
      style={{backgroundImage: `url('public/regiser.png')`}}
    >
      <h1 className="font-bold text-2xl sm:text-5xl text-center">
        {" "}
        Login & Let the Magic Begin ✨
      </h1>

      <div className="flex justify-center items-center ">
        <form className="flex flex-col justify-center items-center min-h-[calc(100vh-100px)]  md:gap-2 w-2/5  ">
          <input
            type="text"
            name="email"
            className="border-2 p-2 h-10 font-semibold rounded-lg md:w-full bg-blue-600/10"
            placeholder=" Enter Your email"
          />
          <br />

          <input
            type="text"
            name="Password"
            className="border-2 p-2 h-10 font-semibold rounded-lg md:w-full bg-blue-600/10"
            placeholder=" Enter Your Password"
          />

          <button className=" mt-8 font-bold border-2 w-[206.5px] md:w-full bg-[#F5F5F5]  h-10 my-auto rounded-full mb-2">
            {" "}
            Google{" "}
          </button>
          <button className=" bg-blue-500 text-white font-bold border-2 border-black w-[206.5px] md:w-full  h-10 rounded-full ">
            Register
          </button>
          <h1>
            {" "}
            Don’t have an account?{" "}
            <Link
              to={"/register"}
              className="text-blue-600 cursor-pointer font-semibold"
            >
              Register Now
            </Link>
          </h1>
        </form>
      </div>
    </div>
  );
};

export default Login;
