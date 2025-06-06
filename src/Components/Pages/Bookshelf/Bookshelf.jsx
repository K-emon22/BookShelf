import axios from "axios";
import React, {useEffect, useState} from "react";
import {Fade} from "react-awesome-reveal";

import {motion} from "framer-motion";
import Loder from "../../Loder/Loder";
import {Link} from "react-router";
import {GrLike} from "react-icons/gr";
const Bookshelf = () => {
  const [sorted, setSorted] = useState([]);

  const [loding2, setLoding2] = useState(true);

  useEffect(() => {
    axios
      .get("https://vercel-backend-for-bookshelf.vercel.app/allBooks")
      .then((data) => {
        setSorted(data.data);
        setLoding2(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  console.log(sorted);

  if (loding2) {
    return <Loder></Loder>;
  }

  return (
    <motion.div
      initial={{opacity: 0, y: 60}}
      animate={{opacity: 1, y: 0}}
      exit={{opacity: 0, y: -40}}
      transition={{duration: 1.2}}
      className="mb-10 mx-[2%] lg:mx-[5%]  p-5 rounded-lg shadow-md"
    >
      <Fade direction="down" cascade duration={800} triggerOnce={false}>
        <div className="">
          <h1 className="text-3xl sm:text-5xl font-bold text-center mb-10">
            All Books
          </h1>
        </div>
      </Fade>
      {loding2 ? (
        <div className="flex justify-center items-center h-[50vh]">
          <div className="w-12 h-12 border-5 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5  ">
          {sorted.map((sort) => (
            <div key={sort._id}>
              <motion.div
                whileHover={{
                  boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.2)",
                  scale: 1.02,
                }}
                className=" shadow-lg p-2 skeleton rounded-lg shadow-blue-100 grid grid-cols-5 gap-2 h-full "
              >
                <div className="h-full flex flex-col col-span-3 gap-2">
                  <h1 className=" font-bold">{sort.book_title}</h1>

                  <div className="flex flex-row  mt-auto">
                    <h1 className="font-semibold text-[14px]">
                      <span className="font-bold">By:</span> {sort.book_author}
                    </h1>
                    <h1 className="font-bold text-[10px]  text-blue-400 ml-auto bg-blue-100 px-2 border-blue-400 border rounded-full my-auto">
                      {sort.book_category}
                    </h1>
                  </div>
                  <p className="line-clamp-3"> {sort.book_overview}</p>
                </div>
                <div className="col-span-2">
                  <Fade direction="up" duration={800}>
                    <img
                      className=" aspect-[2/3] w-[110px] md:w-[100px] rounded-md  mx-auto shadow"
                      src={sort.cover_photo}
                      alt=""
                    />
                  </Fade>
                </div>
                <div className="w-full col-span-5 mt-auto flex flex-row justify-between">
                  <Fade direction="right" duration={800}>
                    <Link to={`/bookDetails/${sort._id}`}>
                      <button className=" btnnnn mt-5">View Details</button>
                    </Link>
                  </Fade>

                  <Fade delay={500}>
                    <h1 className="font-bold flex flex-row gap-1 my-auto mt-7 px-3 border border-blue-400 rounded-full">
                      <span className="my-auto">
                        <GrLike />
                      </span>{" "}
                      <motion.span
                        animate={{scale: [1, 1.1, 1]}}
                        transition={{repeat: Infinity, duration: 1.2}}
                        className="text-blue-400 my-auto"
                      >
                        {sort.upvote}
                      </motion.span>
                    </h1>
                  </Fade>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      )}


      
    </motion.div>
  );
};

export default Bookshelf;
