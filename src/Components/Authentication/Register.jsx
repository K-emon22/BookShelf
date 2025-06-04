import {Link} from "react-router";
import {Typewriter} from "react-simple-typewriter";
import {Fade} from "react-awesome-reveal";
import Loder from "../Loder/Loder";
import {useEffect, useState} from "react";
const Register = () => {
  const [loder, setLoder] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoder(false);
    }, 500);
  });

  if (loder) {
    return <Loder></Loder>;
  }

  const register = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    console.log(name, email, photo, password);
  };

  return (
    <div
      className="bg-cover bg-center h-screen px-[2%]"
      style={{
        backgroundImage: `url('https://i.ibb.co/ZzKprfz6/Mobile-login-rafiki.png')`,
      }}
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
          <br className="sm:hidden" /> Register Now.....
        </h1>
      </Fade>

      <div className="flex justify-center items-center min-h-[calc(100vh-100px)]">
        <form
          onSubmit={register}
          className="flex flex-col justify-center items-center backdrop-blur-sm bg-blue-600/20 py-5 px-5 rounded-lg shadow shadow-black  md:gap-2  md:w-[400px]  "
        >
          <input
            type="text"
            name="name"
            className="border-2 border-blue-600 p-2 h-10 font-semibold rounded-lg md:w-full bg-white/40 "
            placeholder=" Enter Your Name"
          />
          <br />
          <input
            type="email"
            name="email"
            className="border-2 border-blue-600 p-2 h-10 font-semibold rounded-lg md:w-full bg-white/40"
            placeholder=" Enter Your email"
          />
          <br />
          <input
            type="text"
            name="photo"
            className="border-2 border-blue-800 p-2 h-10 font-semibold rounded-lg md:w-full bg-white/40"
            placeholder=" Enter Your Photo Url"
          />
          <br />
          <input
            type="password"
            name="password"
            className="border-2 border-blue-600 p-2 h-10 font-semibold rounded-lg md:w-full bg-white/40"
            placeholder=" Enter Your Password"
          />

          <button
            type="button"
            className=" cursor-pointer mt-8 font-bold border-2 w-[206.5px] md:w-full bg-[#F5F5F5]   h-10 my-auto rounded-full mb-2"
          >
            {" "}
            Google{" "}
          </button>
          <button
            type="submit"
            className=" cursor-pointer bg-blue-500 text-white font-bold border-2 border-black w-[206.5px] md:w-full  h-10 rounded-full "
          >
            Register
          </button>
          <h1 className="text-center text-black">
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
