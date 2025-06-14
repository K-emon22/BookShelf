import axios from "axios";
import React, {useEffect, useState} from "react";
import {Fade} from "react-awesome-reveal";
import {motion} from "framer-motion";
import {GrLike} from "react-icons/gr";
import {Link} from "react-router";
import Loder from "../../../Loder/Loder";

const Fantacy = () => {
  const [fantasyBooks, setFantasyBooks] = useState([]);
  const [loading, setLoading] = useState(true);
 window.scroll({
    top: 0,
    behavior: "smooth",
  });
  useEffect(() => {
    axios("https://vercel-backend-for-bookshelf.vercel.app/allBooks").then(
      (res) => {
        const filtered = res.data.filter(
          (book) => book.book_category === "Fantasy"
        );
        setFantasyBooks(filtered);
        setLoading(false);
      }
    );
  }, []);

  return (
   <div className="min-h-screen">
     <div className="mb-10 mx-[2%] lg:mx-[5%] p-5 rounded-lg shadow-md">
      <Fade direction="down" cascade duration={800} triggerOnce={false}>
        <h1 className="text-3xl sm:text-5xl font-bold mb-10 ">
          Fantasy Books
        </h1>
      </Fade>

      {loading ? (
        <div className="flex justify-center items-center h-[50vh]">
          <Loder></Loder>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {fantasyBooks.map((book) => (
            <div key={book._id}>
              <motion.div
                whileHover={{
                  boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.2)",
                  scale: 1.02,
                }}
                className="shadow-lg p-2 skeleton rounded-lg shadow-blue-100 grid grid-cols-5 gap-2 h-full"
              >
                <div className="h-full flex flex-col col-span-3 gap-2">
                  <h1 className="font-bold">{book.book_title}</h1>
                  <div className="flex justify-between mt-auto">
                    <h1 className="font-bold text-blue-400 bg-blue-100 px-2 rounded-full border border-blue-400 my-auto">
                      {book.book_category}
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
                        {book.upvote}
                      </motion.span>
                    </h1>
                  </div>
                  <p className="line-clamp-3">{book.book_overview}</p>
                </div>
                <div className="col-span-2">
                  <Fade direction="up" duration={800}>
                    <img
                      className="aspect-[2/3] w-[110px] md:w-[100px] rounded-md mx-auto shadow"
                      src={book.cover_photo}
                      alt=""
                    />
                  </Fade>
                </div>
                <div className="w-full col-span-5 mt-auto">
                  <Fade direction="right" duration={800}>
                    <Link to={`/bookDetails/${book._id}`}>
                      <button className="btnnnn mt-5">View Details</button>
                    </Link>
                  </Fade>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      )}
    </div>
   </div>
  );
};

export default Fantacy;
