import axios from "axios";
import React, { useEffect, useState} from "react";
import {useParams} from "react-router";
import Loder from "../Loder/Loder";
import {Fade} from "react-awesome-reveal";
import {motion} from "framer-motion";
import Swal from "sweetalert2";
import {GrLike} from "react-icons/gr";

import {AuthContext} from "../ContextFiles/AuthContext";
import ReviewSection from "../Review/ReviewSection/ReviewSection";
const DetailsPage = () => {
  const [book, setBook] = useState(null);

  const {id} = useParams();

  useEffect(() => {
    axios(`https://vercel-backend-for-bookshelf.vercel.app/bookDetails/${id}`)
      .then((data) => {
        setBook(data.data);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, [id]);

  const handleUpvote = () => {
    axios
      .patch(`https://vercel-backend-for-bookshelf.vercel.app/upvote/${id}`)

      .then((res) => {
        setBook(res.data);
      })

      .catch((err) => console.error("Upvote error:", err));
  };

  const handleDelete = () => {
    console.log("delete");
    axios.delete(
      `https://vercel-backend-for-bookshelf.vercel.app/allBooks/${id}`
    );
  };

  if (!book) {
    return <Loder></Loder>;
  }

  return (
    <div className="mx-[2%] lg:mx-[5%]">
      <Fade direction="down" cascade duration={800} triggerOnce={false}>
        <h1 className="text-3xl sm:text-5xl font-bold  ">
          Explore the Story Behind:{" "}
          <span className="text-blue-400 ">{book.book_title}</span>
        </h1>
      </Fade>

      <div className="md:max-w-4xl mx-auto p-6 mt-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
          <img
            src={book.cover_photo}
            alt={book.book_title}
            className="w-full aspect-[3/4] md:w-2/5 object-cove sm:py-10 md:py-0 m-1 rounded-md"
          />
          <div className="p-6 md:w-3/5">
            <div className="flex flex-row">
              <h1 className="text-3xl font-bold  my-auto">{book.book_title}</h1>
              <h1
                onClick={handleUpvote}
                className="font-bold flex flex-row border-2 px-3 rounded-full border-blue-400 my-auto  ml-auto text-xl gap-2"
              >
                <span className="my-auto hover:text-blue-600 cursor-pointer hover:scale-105 transition-transform">
                  <GrLike />
                </span>
                <motion.span
                  animate={{scale: [1, 1.1, 1]}}
                  transition={{repeat: Infinity, duration: 1.2}}
                  className="text-blue-400"
                >
                  {book.upvote}
                </motion.span>
              </h1>
            </div>
            <p className="text-gray-700 mb-1">
              <strong>By:</strong> {book.book_author}
            </p>
            <p className="text-gray-700 mb-1">
              <strong>Category:</strong> {book.book_category}
            </p>
            <p className="text-gray-700 mb-1">
              <strong>Total Pages:</strong> {book.total_page}
            </p>
            <p className="text-gray-700 mb-1">
              <strong>Reading Status:</strong> {book.reading_status}
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Overview:</strong> {book.book_overview}
            </p>
            <div className="text-sm text-gray-600 mt-2 mb-4">
              <p>
                <strong>Submitted by:</strong> {book.user?.name} (
                {book.user?.email})
              </p>
            </div>

            
          </div>
        </div>
      </div>
      <div>
        <ReviewSection book={book}></ReviewSection>
      </div>
    </div>
  );
};

export default DetailsPage;
