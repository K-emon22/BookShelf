import React from "react";

const Login = () => {
  return (
    <div
      className="bg-cover bg-center h-screen px-[2%]"
      style={{backgroundImage: `url('public/regiser.png')`}}
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
            className="border-2 p-2 h-10 font-semibold rounded-lg md:w-full bg-blue-600/10 "
            placeholder=" Enter Your Name"
          />
          <br />
          <input
            type="text"
            name="email"
            className="border-2 p-2 h-10 font-semibold rounded-lg md:w-full bg-blue-600/10"
            placeholder=" Enter Your email"
          />
          <br />
          <input
            type="text"
            name="Photo"
            className="border-2 p-2 h-10 font-semibold rounded-lg md:w-full bg-blue-600/10"
            placeholder=" Enter Your Photo Url"
          />
          <br />
          <input 
            type="text"
            name="Password"
            className="border-2 p-2 h-10 font-semibold rounded-lg md:w-full bg-blue-600/10"
            placeholder=" Enter Your Password"
          />


          <button className=" mt-8 font-bold border-2 w-[206.5px] md:w-full  h-10 my-auto rounded-full mb-2"> Google </button>
          <button className=" bg-blue-500 text-white font-bold border-2 border-black w-[206.5px] md:w-full  h-10 rounded-full ">Register</button>





          
        </form>
      </div>
    </div>
  );
};

export default Login;
