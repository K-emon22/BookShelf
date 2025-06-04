import {Link} from "react-router";
import {Typewriter} from "react-simple-typewriter";
import {Fade} from "react-awesome-reveal";
import Loder from "../Loder/Loder";
import {useEffect, useState} from "react";
const Login = () => {
  const [loder, setLoder] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoder(false);
    }, 500);
  });

  if (loder) {
    return <Loder></Loder>;
  }

  return (
    <div
      className="bg-cover bg-center h-screen px-[2%]"
      style={{backgroundImage: `url('https://i.ibb.co/7d9DHCrr/Sign-up-rafiki.png')`}}
    >
      <Fade direction="down" cascade duration={800}>
        <h1 className="text-3xl sm:text-5xl font-bold text-center">
          Ready to{" "}
          <span style={{color: "blue", fontWeight: "bold"}}>
            <Typewriter
              words={["Explore", "Create", "Learn", "Connect", "Inspire"]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>{" "}
          <br className="sm:hidden" />
          Login Now.....
        </h1>
      </Fade>

      <div className="flex justify-center items-center min-h-[calc(100vh-100px)]">
        <form className="flex flex-col justify-center items-center backdrop-blur-sm bg-blue-600/20 py-8 px-5 rounded-lg shadow shadow-black  md:gap-2  md:w-[400px]  ">
          <input
            type="text"
            name="email"
            className="border-2 border-blue-600 p-2 h-10 font-semibold rounded-lg md:w-full bg-white/40"
            placeholder=" Enter Your email"
          />
          <br />

          <input
            type="text"
            name="Password"
            className="border-2 border-blue-600 p-2 h-10 font-semibold rounded-lg md:w-full bg-white/40"
            placeholder=" Enter Your Password"
          />

          <button className=" hover:bg-blue-500 cursor-pointer mt-8 font-bold border-2 w-[206.5px] md:w-full bg-[#F5F5F5]   h-10 my-auto rounded-full mb-2">
            {" "}
            Google{" "}
          </button>
          <button className=" cursor-pointer bg-blue-500 text-white font-bold border-2 border-black w-[206.5px] md:w-full  h-10 rounded-full ">
            Register
          </button>
          <h1 className="text-center text-black">
            {" "}
            Don't have an account?
            <Link
              to={"/register"}
              className="text-blue-600 cursor-pointer font-semibold"
            >
              {" "}
              Register Now
            </Link>
          </h1>
        </form>
      </div>
    </div>
  );
};

export default Login;
