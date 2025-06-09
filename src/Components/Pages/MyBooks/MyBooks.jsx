import React, {useContext, useEffect, useState} from "react";
import {motion} from "framer-motion";
import {GrLike} from "react-icons/gr";
import axios from "axios";
import {AuthContext} from "../../ContextFiles/AuthContext";
import Swal from "sweetalert2";
import {toast} from "react-toastify";
const MyBooks = () => {
  const {user} = useContext(AuthContext);
  console.log(user);

  const [addedBook, setAddedBook] = useState([]);

  useEffect(() => {
    axios("https://vercel-backend-for-bookshelf.vercel.app/allBooks").then(
      (res) => {
        console.log(res.data);
        const userBooks = res.data.filter(
          (userBook) => userBook.user.email === user?.email
        );
        setAddedBook(userBooks);
      }
    );
  }, [user?.email]);
  console.log(addedBook);

  const handleUpvote = (id) => {
    if (!user) {
      toast.warning("Please log in to upvote.", {
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
        const updated = res.data;
        setAddedBook((prev) =>
          prev.map((book) => (book._id === updated._id ? updated : book))
        );
      })

      .catch((err) => console.error("Upvote error:", err));
  };

  const handleDelete = (id) => {
    console.log("delete");
    axios
      .delete(`https://vercel-backend-for-bookshelf.vercel.app/allBooks/${id}`)
      .then(() => {
        const left = addedBook.filter((book) => book._id !== id);
        setAddedBook(left);
      });
  };

  return (
    <motion.div
      initial={{opacity: 0, y: 60}}
      animate={{opacity: 1, y: 0}}
      exit={{opacity: 0, y: -40}}
      transition={{duration: 1.2}}
    >
      <h1 className="font-bold">My Books</h1>

      <div>
        {addedBook.map((userSingleBook) => (
          <div key={userSingleBook._id}>
            <div className="md:max-w-4xl mx-auto p-6 mt-4">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
                <img
                  src={userSingleBook.cover_photo}
                  alt={userSingleBook.book_title}
                  className="w-full aspect-[3/4] md:w-2/5 object-cove sm:py-10 md:py-0 m-1 rounded-md"
                />
                <div className="p-6 md:w-3/5">
                  <div className="flex flex-row">
                    <h1 className="text-3xl font-bold  my-auto">
                      {userSingleBook.book_title}
                    </h1>
                    <h1
                      onClick={() => handleUpvote(userSingleBook._id)}
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
                        {userSingleBook.upvote}
                      </motion.span>
                    </h1>
                  </div>
                  <p className="text-gray-700 mb-1">
                    <strong>By:</strong> {userSingleBook.book_author}
                  </p>
                  <p className="text-gray-700 mb-1">
                    <strong>Category:</strong> {userSingleBook.book_category}
                  </p>
                  <p className="text-gray-700 mb-1">
                    <strong>Total Pages:</strong> {userSingleBook.total_page}
                  </p>
                  <p className="text-gray-700 mb-1">
                    <strong>Reading Status:</strong>{" "}
                    {userSingleBook.reading_status}
                  </p>
                  <p className="text-gray-700 mb-4">
                    <strong>Overview:</strong> {userSingleBook.book_overview}
                  </p>
                  <div className="text-sm text-gray-600 mt-2 mb-4">
                    <p>
                      <strong>Submitted by:</strong> {userSingleBook.user?.name}{" "}
                      ({userSingleBook.user?.email})
                    </p>
                  </div>

                  {user?.email == userSingleBook.user?.email ? (
                    <div className="flex flex-row justify-between">
                      <button className="btnnn"> Update</button>
                      <button
                        onClick={() => {
                          Swal.fire({
                            title: "Are you sure?",
                            text: "You won’t be able to revert this!",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#d33",
                            cancelButtonColor: "#3085d6",
                            confirmButtonText: "Yes, delete it!",
                          }).then((result) => {
                            if (result.isConfirmed) {
                              handleDelete(userSingleBook._id);

                              Swal.fire({
                                title: "Deleted!",
                                text: "Your review has been deleted.",
                                icon: "success",

                                showConfirmButton: true,
                              });
                            }
                          });
                        }}
                        className="btn font-bold text-white bg-red-600 rounded-lg"
                      >
                        Delete
                      </button>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default MyBooks;

// {user?.email == book.user?.email ? (
//               <div className="flex flex-row justify-between">
//                 <button className="btnnn"> Update</button>
//                 <button
//                   onClick={() => {
//                     Swal.fire({
//                       title: "Are you sure?",
//                       text: "You won’t be able to revert this!",
//                       icon: "warning",
//                       showCancelButton: true,
//                       confirmButtonColor: "#d33",
//                       cancelButtonColor: "#3085d6",
//                       confirmButtonText: "Yes, delete it!",
//                     }).then((result) => {
//                       if (result.isConfirmed) {
//                         handleDelete(book._id);

//                         Swal.fire({
//                           title: "Deleted!",
//                           text: "Your review has been deleted.",
//                           icon: "success",

//                           showConfirmButton: true,
//                         });
//                       }
//                     });
//                   }}
//                   className="btn font-bold text-white bg-red-600 rounded-lg"
//                 >
//                   Delete
//                 </button>
//               </div>
//             ) : (
//               ""
//             )}
