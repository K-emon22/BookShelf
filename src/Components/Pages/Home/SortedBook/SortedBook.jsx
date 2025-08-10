import axios from "axios";
import React, {useContext, useEffect, useState} from "react";
import {Fade} from "react-awesome-reveal";

import {motion} from "framer-motion";
import {GrLike} from "react-icons/gr";
import {Link} from "react-router";
import {AuthContext} from "../../../ContextFiles/AuthContext";

const SortedBook = () => {
  const {user} = useContext(AuthContext);
  const token = user?.accessToken;

  const [sorted, setSorted] = useState([]);

  const [loding2, setLoding2] = useState(true);

  useEffect(() => {
    axios("https://vercel-backend-for-bookshelf.vercel.app/sorted", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((data) => {
      setSorted(data.data);
      setLoding2(false);
    });
  }, []);

  return (
    <div className="mb-10 mx-[2%] lg:mx-[5%]  p-5 rounded-lg shadow-black/20 shadow-lg">
      <Fade direction="down" cascade duration={800} triggerOnce={false}>
        <div className="">
          <h1 className="text-3xl sm:text-5xl font-bold  mb-10">
            Popular Books
          </h1>
        </div>
      </Fade>
      {loding2 ? (
        <div className="flex   justify-center items-center h-[50vh]">
          <div className="w-12 h-12 border-5 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5  ">
          {sorted.map((sort) => (
            <div key={sort._id}>
              <motion.div
                whileHover={{
                  boxShadow: "0 8px 24px rgba(59, 130, 246, 0.25)",
                  scale: 1.02,
                }}
                className="shadow-md bg-white rounded-xl p-4 h-full flex flex-col justify-between border border-blue-100 transition-all duration-300"
              >
                <div className="relative w-[110px] md:w-[100px] aspect-[2/3] mx-auto flex justify-center items-center">
                  <div className="absolute inset-0 blur-sm w-full opacity-100 rounded-lg overflow-hidden z-0">
                    <img
                      src={sort.cover_photo}
                      alt=""
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <Fade direction="up" duration={800}>
                    <img
                      className="w-full h-full rounded-md shadow-lg border border-blue-200 relative z-10 object-cover"
                      src={sort.cover_photo}
                      alt=""
                    />
                  </Fade>
                </div>

                <div className="mt-4 flex-1 flex flex-col gap-2">
                  <h2 className="text-lg font-semibold text-blue-600 line-clamp-1">
                    {sort.book_title}
                  </h2>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {sort.book_overview}
                  </p>

                  <div className="mt-auto space-y-1 text-sm text-gray-700">
                    <p>
                      <span className="font-medium">By:</span>{" "}
                      {sort.book_author}
                    </p>
                    <p>
                      <span className="font-medium">Status:</span>{" "}
                      {sort.reading_status}
                    </p>
                    <span className="inline-block text-xs bg-blue-100 text-blue-500 border border-blue-400 px-2 py-1 rounded-full font-medium">
                      {sort.book_category}
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <Fade direction="right" duration={800}>
                    <Link to={`/bookDetails/${sort._id}`}>
                      <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded-md font-semibold transition">
                        View Details
                      </button>
                    </Link>
                  </Fade>

                  <Fade delay={300}>
                    <div className="flex items-center text-blue-500 font-semibold text-sm gap-1 border border-blue-400 px-3 py-1 rounded-full">
                      <GrLike className="text-blue-500" />
                      <motion.span
                        animate={{scale: [1, 1.2, 1]}}
                        transition={{repeat: Infinity, duration: 1.5}}
                        className="text-blue-600"
                      >
                        {sort.upvote}
                      </motion.span>
                    </div>
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
