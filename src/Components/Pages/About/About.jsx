import React, {useEffect, useState} from "react";
import {FaBookOpen, FaMagic, FaUserGraduate} from "react-icons/fa";
import {motion} from "framer-motion";
import Loder from "../../Loder/Loder";
import {Link} from "react-router";

const About = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, []);

  if (loading) {
    return <Loder />;
  }

  return (
    <div className="px-[2%] lg:px-[5%] py-12 min-h-screen">
      <motion.h1
        initial={{opacity: 0, y: -20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.5}}
        className="text-4xl font-bold text-center mb-8 "
      >
        📚 About This Website
      </motion.h1>

      <motion.p
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 0.2, duration: 0.5}}
        className="text-center text-black mb-12"
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
        className="text-3xl font-bold text-center mb-10 "
      >
        🧩 Book Categories
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* Fiction Card */}
        <motion.div
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.4}}
          viewport={{once: true}}
          className="bg-white shadow-md rounded-xl p-6 text-center h-full flex flex-col"
        >
          <FaBookOpen className="text-4xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2 text-blue-400">Fiction</h3>
          <p className="text-black mb-5 flex-grow">
            Fiction books tell stories from the imagination. Common genres
            include romance, mystery, and adventure.
          </p>
          <div className="mt-auto">
            <Link to="/fiction" className="btnnn">
              See Fictional Books
            </Link>
          </div>
        </motion.div>

        {/* Non-Fiction Card */}
        <motion.div
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          transition={{delay: 0.2, duration: 0.4}}
          viewport={{once: true}}
          className="bg-white shadow-md rounded-xl p-6 text-center h-full flex flex-col"
        >
          <FaUserGraduate className="text-4xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2 text-blue-400">
            Non-Fiction
          </h3>
          <p className="text-black mb-5 flex-grow">
            Non-Fiction books are based on real facts and knowledge, like
            biographies, self-help, or history.
          </p>
          <div className="mt-auto">
            <Link to="/nonfiction" className="btnnn">
              See Non-Fiction Books
            </Link>
          </div>
        </motion.div>

        {/* Fantasy Card */}
        <motion.div
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          transition={{delay: 0.4, duration: 0.4}}
          viewport={{once: true}}
          className="bg-white shadow-md rounded-xl p-6 text-center h-full flex flex-col"
        >
          <FaMagic className="text-4xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2 text-blue-400">Fantasy</h3>
          <p className="text-black mb-5 flex-grow">
            Fantasy books include magical worlds, wizards, dragons, and
            adventures beyond reality.
          </p>
          <div className="mt-auto">
            <Link to="/fantasy" className="btnnn">
              See Fantasy Books
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.p
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{delay: 0.5, duration: 0.5}}
        className="mt-12 text-center text-black text-sm"
      >
        Every book you add will fall into one of these categories. Happy
        reading!
      </motion.p>
    </div>
  );
};

export default About;
