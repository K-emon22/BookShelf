import axios from "axios";
import React, {useContext, useEffect, useState} from "react";
import {useParams} from "react-router";
import Loder from "../Loder/Loder";
import {Fade} from "react-awesome-reveal";
import {motion} from "framer-motion";
import Swal from "sweetalert2";
import {GrLike} from "react-icons/gr";

import ReviewSection from "../Review/ReviewSection/ReviewSection";
import {AuthContext} from "../ContextFiles/AuthContext";
import {toast} from "react-toastify";
const DetailsPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  const {user} = useContext(AuthContext);

  const [book, setBook] = useState(null);

  const {id} = useParams();

  useEffect(() => {
    axios
      .get(`https://vercel-backend-for-bookshelf.vercel.app/bookDetails/${id}`)
      .then((data) => {
        setBook(data.data);
        setReadingStatus(data.data.reading_status);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, [id]);

  const handleUpvote = () => {
    if (book.user.email === user.email) {
      toast.error("User can not upvote his own book.", {
        autoClose: 1000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }
    axios
      .patch(`https://vercel-backend-for-bookshelf.vercel.app/upvote/${id}`)

      .then((res) => {
        setBook(res.data);
      })

      .catch((err) => console.error("Upvote error:", err));
  };

  const [readingStatus, setReadingStatus] = useState("");

  const readingStatusss = (e) => {
    const newStatus = e.target.value;

    setReadingStatus(newStatus);

    axios
      .patch(
        `https://vercel-backend-for-bookshelf.vercel.app/bookDetails/${id}`,
        {reading_status: newStatus}
      )
      .then((res) => setBook(res.data))
      .then(() => {
        toast.success("Reading status updated", {
          autoClose: 1000,
        });
      });
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
            <p className="text-gray-500 mb-1">
              <strong>By:</strong> {book.book_author}
            </p>
            <p className="text-gray-500 mb-1">
              <strong>Category:</strong> {book.book_category}
            </p>
            <p className="text-gray-500 mb-2">
              <strong>Total Pages:</strong> {book.total_page}
            </p>

            {book?.user?.email === user?.email ? (
              <div className="flex flex-row gap-2 mb-2">
                <strong className="my-auto text-gray-500">
                  Reading Status:{" "}
                </strong>

                <select
                  className="border border-gray-300 px-2 py-1 rounded"
                  value={readingStatus}
                  onChange={readingStatusss}
                >
                  {book.reading_status === "Want to Read" && (
                    <>
                      <option value="Want to Read">Want to Read</option>
                      <option value="Reading">Reading</option>
                    </>
                  )}

                  {book.reading_status === "Reading" && (
                    <>
                      <option value="Reading">Reading</option>
                      <option value="Read">Read</option>
                    </>
                  )}

                  {book.reading_status === "Read" && (
                    <option value="Read">Read</option>
                  )}
                </select>
              </div>
            ) : (
              <div className="flex flex-row gap-2 mb-2">
                <strong className="my-auto text-gray-500">
                  Reading Status:{" "}
                </strong>
                <span>{book.reading_status}</span>
              </div>
            )}

            <p className="text-white mb-4 text-justify">
              <strong>Overview:</strong> {book.book_overview}
            </p>
            <div className="text-sm text-white mt-2 mb-4">
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
