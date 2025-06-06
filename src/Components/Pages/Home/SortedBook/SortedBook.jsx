import axios from "axios";
import React, {useEffect, useState} from "react";
import {Fade} from "react-awesome-reveal";

import {motion} from "framer-motion";
import {GrLike} from "react-icons/gr";
import {Link} from "react-router";

const SortedBook = () => {
  const [sorted, setSorted] = useState([]);

  const [loding2, setLoding2] = useState(true);

  useEffect(() => {
    axios("https://vercel-backend-for-bookshelf.vercel.app/sorted").then(
      (data) => {
        setSorted(data.data);
        setLoding2(false);
      }
    );
  }, []);

  console.log(sorted);

  return (
    <div className="mb-10 mx-[2%] lg:mx-[5%]  p-5 rounded-lg shadow-md">
      <Fade direction="down" cascade duration={800} triggerOnce={false}>
        <div className="">
          <h1 className="text-3xl sm:text-5xl font-bold text-center mb-10">
            Popular Books
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
                  <div className="flex flex-row justify-between mt-auto">
                    <h1 className="font-bold  text-blue-400 bg-blue-100 px-2 rounded-full border border-blue-400 my-auto">
                      {sort.book_category}
                    </h1>
                    <h1 className="font-bold flex flex-row gap-1 px-3 border rounded-full border-blue-400">
                      <span className="my-auto">
                        <GrLike />
                      </span>
                      <motion.span
                        animate={{scale: [1, 1.1, 1]}}
                        transition={{repeat: Infinity, duration: 1.2}}
                        className="text-blue-400 my-auto"
                      >
                        {sort.upvote}
                      </motion.span>
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
                <div className="w-full col-span-5 mt-auto">
                  <Fade direction="right" duration={800}>
                    <Link to={`/bookDetails/${sort._id}`}>
                      <button className=" btnnnn mt-5">View Details</button>
                    </Link>
                  </Fade>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortedBook;
