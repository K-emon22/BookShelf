import React, {useEffect, useState} from "react";
import {FaBookOpen, FaMagic, FaUserGraduate} from "react-icons/fa";
import {motion} from "framer-motion";
import Loder from "../../Loder/Loder";
import {Link} from "react-router";

const About = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 200);
  });

  if (loading) {
    return <Loder></Loder>;
  }
  return (
    <div className=" px-[2%]  lg:px-[5%] py-12 min-h-screen">
      <motion.h1
        initial={{opacity: 0, y: -20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.5}}
        className="text-4xl font-bold text-center mb-8 text-blue-400"
      >
        📚 About This Website
      </motion.h1>

      <motion.p
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 0.2, duration: 0.5}}
        className="text-center text-gray-600 mb-12"
      >
        This website is your personal digital bookshelf. You can explore books,
        track your reading progress, write reviews, and organize books by
        categories. Whether you’re a casual reader or a bookworm, this platform
        helps you stay on top of your reading journey.
      </motion.p>

      <motion.h2
        initial={{opacity: 0, y: -20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.5}}
        className="text-3xl font-bold text-center mb-10 text-blue-400"
      >
        🧩 Book Categories
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <motion.div
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.4}}
          viewport={{once: true}}
          className="bg-white shadow-md rounded-xl p-6 text-center h-full"
        >
          <FaBookOpen className="text-blue-400 text-4xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2 text-blue-400">Fiction</h3>
          <p className="text-gray-600 mb-5">
            Fiction books tell stories from the imagination. Common genres
            include romance, mystery, and adventure.
          </p>

          <Link to={"/fiction"} className="btnnn mt-auto">
            {" "}
            See Fictional Books{" "}
          </Link>
        </motion.div>

        <motion.div
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          transition={{delay: 0.2, duration: 0.4}}
          viewport={{once: true}}
          className="bg-white shadow-md rounded-xl p-6 text-center h-full"
        >
          <FaUserGraduate className="text-blue-400 text-4xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2 text-blue-400">
            Non-Fiction
          </h3>
          <p className="text-gray-600 mb-5">
            Non-Fiction books are based on real facts and knowledge, like
            biographies, self-help, or history.
          </p>
          <Link to={"/nonficton"} className="btnnn  mt-auto">
            {" "}
            See Non-Fiction Books{" "}
          </Link>
        </motion.div>

        <motion.div
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          transition={{delay: 0.4, duration: 0.4}}
          viewport={{once: true}}
          className="bg-white shadow-md rounded-xl p-6 text-center h-full"
        >
          <FaMagic className="text-blue-400 text-4xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2 text-blue-400">Fantasy</h3>
          <p className="text-gray-600 mb-5">
            Fantasy books include magical worlds, wizards, dragons, and
            adventures beyond reality.
          </p>{" "}
          <Link to={"/fantacy"} className="btnnn mt-auto">
            {" "}
            See Fantasy Books{" "}
          </Link>
        </motion.div>
      </div>

      <motion.p
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{delay: 0.5, duration: 0.5}}
        className="mt-12 text-center text-gray-500 text-sm"
      >
        Every book you add will fall into one of these categories. Happy
        reading!
      </motion.p>
    </div>
  );
};

export default About;
