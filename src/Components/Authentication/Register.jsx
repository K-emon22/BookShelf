import {Link} from "react-router";
import {Typewriter} from "react-simple-typewriter";
import {Fade} from "react-awesome-reveal";
import Loder from "../Loder/Loder";
import {useContext, useEffect, useState} from "react";
import {FaGoogle} from "react-icons/fa";
import {AuthContext} from "../ContextFiles/AuthContext";
import {updateProfile} from "firebase/auth";
const Register = () => {
  const [loder, setLoder] = useState(true);
  const {googleLogin, createUser} = useContext(AuthContext);

  const register = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    console.log(name, email, photo, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateProfile(user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            e.target.reset();
          })
          .catch((err) => {
            console.error("Error updating profile:", err);
          });
      })
      .catch((err) => console.error(err));
  };

  const googleLogins = () => {
    googleLogin().catch((err) => console.error(err));
  };

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
            onClick={googleLogins}
            type="button"
            className="  flex flex-row  items-center gap-2 hover:bg-blue-500 hover:text-white cursor-pointer mt-8 font-bold border-2 w-[206.5px] md:w-full bg-[#F5F5F5]   h-10 my-auto rounded-full mb-2"
          >
            {" "}
            <span className="mr-16 ml-5">
              <FaGoogle size={25} />{" "}
            </span>{" "}
            <span>Login With Google </span>
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
