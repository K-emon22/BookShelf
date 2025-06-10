import Swal from "sweetalert2";

import {FaAngleDoubleDown} from "react-icons/fa";

import React, {useContext, useEffect, useState} from "react";
import {motion} from "framer-motion";
import {GrLike} from "react-icons/gr";
import axios from "axios";
import {AuthContext} from "../../ContextFiles/AuthContext";

import {toast} from "react-toastify";
import Loder from "../../Loder/Loder";
import {Fade} from "react-awesome-reveal";
import {Link} from "react-router";

const MyBooks = () => {
  const [bookIds, setBookIds] = useState(null);

  useEffect(() => {
    window.scrollTo({top: 0, behavior: "smooth"});
  });
  const {user} = useContext(AuthContext);
  console.log(user);

  const [addedBook, setAddedBook] = useState([]);

  const [lod, setLod] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLod(false);
    }, 500);
  });

  useEffect(() => {
    axios
      .get("https://vercel-backend-for-bookshelf.vercel.app/allBooks")
      .then((res) => {
        console.log(res.data);
        const userBooks = res.data.filter(
          (userBook) => userBook.user.email === user?.email
        );
        setAddedBook(userBooks);
      });
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

  const bookId = (id) => {
    setBookIds(id);
  };

  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");

  const [simgleBookData, setSingleBookData] = useState(null);

  useEffect(() => {
    if (simgleBookData?.book_category) {
      setCategory(simgleBookData.book_category);
    }
    if (simgleBookData?.reading_status) {
      setStatus(simgleBookData.reading_status);
    }
  }, [simgleBookData]);

  const openModal = () => {
    document.getElementById("my_modal_4").checked = true;
  };

  useEffect(() => {
    if (bookIds) {
      axios(
        `https://vercel-backend-for-bookshelf.vercel.app/bookDetails/${bookIds}`
      ).then((res) => {
        setSingleBookData(res.data);
      });
    }
  }, [bookIds]);

  console.log(bookIds);

  const handleUpdateBook = (e) => {
    e.preventDefault();

    if (!category) {
      toast.warning("Please select a category", {
        autoClose: 1000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    } else if (!status) {
      toast.warning("Please select Your Reading Status", {
        autoClose: 1000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    const form = e.target;

    const book = {
      book_title: form.bookName.value,
      cover_photo: form.photo.value,
      book_overview: form.overview.value,
      book_author: form.authorName.value,
      total_page: parseInt(form.page.value),
      book_category: category,
      reading_status: status,
      user: {
        name: form.name.value,
        email: form.email.value,
      },
      upvote: parseInt(form.upvote.value),
    };

    if (bookIds) {
      axios
        .put(
          `https://vercel-backend-for-bookshelf.vercel.app/allBooks/${bookIds}`,
          book
        )
        .then(() => {
          document.getElementById("my_modal_4").checked = false;
          Swal.fire({
            title: "Success!",
            text: "Book Updated successfully!",
            icon: "success",
            confirmButtonText: "OK",
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.reload();
            }
          });
        });
    }

    console.log(book);
  };

  if (lod) {
    return <Loder></Loder>;
  }

  return (
    <motion.div
      initial={{opacity: 0, y: 60}}
      animate={{opacity: 1, y: 0}}
      exit={{opacity: 0, y: -40}}
      transition={{duration: 1.2}}
      className="px-[2%] lg:px-[5%] min-h-[calc(100vh-100px)]"
    >
      <Fade>
        <h1 className="text-3xl sm:text-5xl font-bold  mx-auto">
          {" "}
          Your Added Book.{" "}
        </h1>
      </Fade>

      <div>
        {addedBook.length === 0 ? (
          <div className=" flex justify-center items-center min-h-[calc(100vh-100px)]">
            <Fade
              className="flex justify-center items-center bg-blue-400/40 backdrop-blur-md py-20 sm:px-10 md:px-20 rounded-lg"
              direction="up"
              cascade
              duration={800}
              triggerOnce={false}
            >
              <div
                className="flex flex-col justify-center items-center
               "
              >
                <h1 className="text-3xl sm:text-5xl font-bold  mx-auto">
                  You didn’t add any book yet.
                </h1>
                <Link
                  to={"/addBook"}
                  className="btnnn w-[150px] text-center mt-10"
                >
                  {" "}
                  Add Book{" "}
                </Link>
              </div>
            </Fade>
          </div>
        ) : (
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
                        <strong>Category:</strong>{" "}
                        {userSingleBook.book_category}
                      </p>
                      <p className="text-gray-700 mb-1">
                        <strong>Total Pages:</strong>{" "}
                        {userSingleBook.total_page}
                      </p>
                      <p className="text-gray-700 mb-1">
                        <strong>Reading Status:</strong>{" "}
                        {userSingleBook.reading_status}
                      </p>
                      <p className="text-gray-700 mb-4">
                        <strong>Overview:</strong>{" "}
                        {userSingleBook.book_overview}
                      </p>
                      <div className="text-sm text-gray-600 mt-2 mb-4">
                        <p>
                          <strong>Submitted by:</strong>{" "}
                          {userSingleBook.user?.name} (
                          {userSingleBook.user?.email})
                        </p>
                      </div>

                      <div className="flex flex-row justify-between">
                        <button
                          onClick={() => {
                            bookId(userSingleBook._id);
                            openModal();
                          }}
                          className="btnnnn"
                        >
                          {" "}
                          Update
                        </button>

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
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
        <label htmlFor="my_modal_4" className="btnnnn hidden">
          Update
        </label>

        <input type="checkbox" id="my_modal_4" className="modal-toggle" />
        <div className="modal" role="dialog">
          <div className="modal-box">
            <div className="flex flex-row justify-between mb-5">
              <h3 className="text-lg font-bold">Update Your Book </h3>

              <label
                htmlFor="my_modal_4"
                className=" px-3 rounded-lg font-bold text-black hover:bg-red-400 hover:text-white cursor-pointer border-red-600 border-2"
              >
                X
              </label>
            </div>

            <div className="w-full flex flex-col justify-center items-center ">
              <form
                onSubmit={handleUpdateBook}
                className=" w-full flex flex-col justify-center items-center p-4 shadow-lg rounded-lg bg-blue-600/20 shadow-black  backdrop-blur-sm"
              >
                <input
                  type="text"
                  name="authorName"
                  className=" p-2   border-2 w-full  rounded-lg  bg-white/80"
                  placeholder="Enter Author Name"
                  defaultValue={simgleBookData?.book_author}
                  required
                />{" "}
                <br />
                <input
                  type="text"
                  name="bookName"
                  className=" p-2   border-2 w-full  rounded-lg  bg-white/80"
                  placeholder="Enter Book Title"
                  defaultValue={simgleBookData?.book_title}
                  required
                />{" "}
                <br />
                <input
                  type="text"
                  name="photo"
                  className=" p-2   border-2 w-full  rounded-lg  bg-white/80"
                  placeholder="Enter Book Cover Photo"
                  defaultValue={simgleBookData?.cover_photo}
                  required
                />{" "}
                <br />
                <input
                  type="number"
                  name="page"
                  className=" p-2   border-2 w-full  rounded-lg  bg-white/80"
                  placeholder="Enter Total Page Number"
                  defaultValue={simgleBookData?.total_page}
                  required
                />{" "}
                <br />
                <div className="flex flex-row gap-1 sm:gap-2  w-full">
                  <div className="dropdown dropdown-center  w-full ">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn w-full px-1 border-black border-2 rounded-lg h-[44px] bg-white/80 "
                    >
                      {" "}
                      {category || simgleBookData?.book_category}
                      <FaAngleDoubleDown />
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2  shadow-sm font-semibold border mt-2"
                    >
                      {["Fiction", "Non-Fiction", "Fantasy"].map((item) => (
                        <li key={item}>
                          <a onClick={() => setCategory(item)}>{item}</a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <br />
                  <div className="dropdown dropdown-center  w-full">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn w-full px-1 border-black border-2 rounded-lg h-[44px] bg-white/80"
                    >
                      {" "}
                      {status || simgleBookData?.reading_status}
                      <FaAngleDoubleDown />
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm font-semibold border   mt-2"
                    >
                      {["Read", "Reading", "Want to Read"].map((item) => (
                        <li key={item}>
                          <a onClick={() => setStatus(item)}>{item}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <br />
                <input
                  type="text"
                  name="name"
                  className=" p-2   border-2 w-full  rounded-lg  hidden"
                  defaultValue={user?.displayName}
                />{" "}
                <input
                  type="text"
                  name="email"
                  className=" p-2   border-2 w-full  rounded-lg  hidden"
                  defaultValue={user?.email}
                />{" "}
                <input
                  type="text"
                  name="upvote"
                  className=" p-2   border-2 w-full  rounded-lg hidden "
                  defaultValue={0}
                />{" "}
                <textarea
                  name="overview"
                  rows="4"
                  className="p-2   border-2 w-full  rounded-lg bg-white/80"
                  placeholder="Write overview about the book..."
                  defaultValue={simgleBookData?.book_overview}
                  required
                ></textarea>
                <br />
                <button
                  type="submit"
                  className="btn w-full bg-blue-500  border-black border-2 rounded-lg hover:bg-blue-400 hover:text-black text-white "
                >
                  Update Book
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MyBooks;
