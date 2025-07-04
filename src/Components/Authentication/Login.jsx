import {Link, useLocation, useNavigate} from "react-router";
import {Typewriter} from "react-simple-typewriter";
import {Fade} from "react-awesome-reveal";
import Loder from "../Loder/Loder";
import {useContext, useEffect, useState} from "react";
import {FaGoogle} from "react-icons/fa";
import {AuthContext} from "../ContextFiles/AuthContext";
import {toast} from "react-toastify";
const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const [loder, setLoder] = useState(true);

  const {googleLogin, loginWithPass} = useContext(AuthContext);

  const loginWithGoogle = () => {
    googleLogin()
      .then(() => {
        navigate(from, {replace: true});
      })
      .catch((err) => console.error(err));
  };
  const loginWithPassword = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.", {
        autoClose: 1000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: {
          background: "#fecaca",
        },
      });

      return;
    }
    if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one uppercase letter.", {
        autoClose: 1000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: {
          background: "#fecaca",
        },
      });

      return;
    }
    if (!/[a-z]/.test(password)) {
      toast.error("Password must contain at least one lowercase letter.", {
        autoClose: 1000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: {
          background: "#fecaca",
        },
      });

      return;
    }

    loginWithPass(email, password)
      .then(() => {
        e.target.reset();
        navigate(from, {replace: true});
      })
      .catch((err) => {
        toast.error(err.message, {
          autoClose: 1000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          style: {
            background: "#fecaca",
          },
        });
      });
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
      className="bg-cover bg-center h-screen px-[2%] lg:[px5%]"
      style={{
        backgroundImage: `url('https://i.ibb.co/7d9DHCrr/Sign-up-rafiki.png')`,
      }}
    >
      <Fade direction="down" cascade duration={800}>
        <h1 className="text-3xl sm:text-5xl font-bold text-center text-blue-600">
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
        <form
          onSubmit={loginWithPassword}
          className="flex flex-col justify-center items-center backdrop-blur-sm bg-blue-100/30 dark:bg-blue-900/20 py-8 px-5 rounded-lg shadow shadow-blue-300 dark:shadow-blue-800 md:gap-2 md:w-[400px]"
        >
          <input
            type="email"
            name="email"
            className="border-2 border-blue-400 p-2 h-10 font-semibold rounded-lg md:w-full bg-blue-50/60 dark:bg-blue-800/40 text-black dark:text-white placeholder:text-white"
            placeholder="Enter Your Email"
            required
          />
          <br />

          <input
            type="password"
            name="password"
            className="border-2 border-blue-400 p-2 h-10 font-semibold rounded-lg md:w-full bg-blue-50/60 dark:bg-blue-800/40 text-black dark:text-white placeholder:text-white"
            placeholder="Enter Your Password"
            required
          />

          <button
            onClick={loginWithGoogle}
            type="button"
            className="flex flex-row justify-center items-center gap-2 hover:bg-blue-500 hover:text-white cursor-pointer mt-8 font-bold border-2 border-blue-300 w-[206.5px] md:w-full bg-blue-100 dark:bg-blue-800   h-10 text-gray-100 rounded-full mb-2"
          >
            <span>
              <FaGoogle className="text-gray-100" size={20} />
            </span>
            <span>Login With Google</span>
          </button>

          <button
            type="submit"
            className="cursor-pointer bg-blue-500 text-gray-100 font-bold hover:border-2 border-blue-600 dark:border-blue-400 w-[206.5px] md:w-full h-10 rounded-full hover:scale-102 transition-transform"
          >
            Login
          </button>

          <h1 className="text-center text-black dark:text-white mt-3 ">
            Don't have an account?
            <Link
              to={"/register"}
              className="text-black  hover:underline  ml-1 font-semibold"
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
