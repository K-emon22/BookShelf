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
import {Link, useNavigate} from "react-router";

const MyBooks = () => {
  const [bookIds, setBookIds] = useState(null);
  const [lod, setLod] = useState(true);
  useEffect(() => {
    window.scrollTo({top: 0, behavior: "smooth"});
  });
  const {user} = useContext(AuthContext);

  const accessToken = user?.accessToken;
  const email = user?.email;
  const [addedBook, setAddedBook] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user || !accessToken || !email) return;
    axios
      .get(
        `https://vercel-backend-for-bookshelf.vercel.app/userBook?email=${user.email}`,
        {
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((res) => {
        setLod(false);

        setAddedBook(res.data.myBook);
      });
  }, [user, accessToken, email]);

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

    const addedEmail = addedBook.find(
      (book) => book.user.email === user?.email
    );

    if (addedEmail) {
      toast.warning("User can't upvote his own book.", {
        autoClose: 1000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    axios
      .patch(`https://vercel-backend-for-bookshelf.vercel.app/upvote/${id}?`)

      .then((res) => {
        const updated = res.data;
        setAddedBook((prev) =>
          prev.map((book) => (book._id === updated._id ? updated : book))
        );
      })

      .catch((err) => console.error("Upvote error:", err));
  };

  const handleDelete = (id) => {
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

  const handleChangeStatus = (bookId, newStatus) => {
    axios
      .patch(
        `https://vercel-backend-for-bookshelf.vercel.app/bookDetails/${bookId}`,
        {
          reading_status: newStatus,
        }
      )
      .then((res) => {
        const updated = res.data;
        setAddedBook((prev) =>
          prev.map((book) =>
            book._id === updated._id
              ? {...book, reading_status: updated.reading_status}
              : book
          )
        );
        toast.success("Reading status updated", {
          autoClose: 1000,
        });
      })
      .catch((err) => {
        console.error("Status update error:", err);
        toast.error("Failed to update status");
      });
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
        .then((res) => {
          document.getElementById("my_modal_4").checked = false;
          const updatedBook = res.data;
          setAddedBook((prev) =>
            prev.map((b) => (b._id === updatedBook._id ? updatedBook : b))
          );
          Swal.fire({
            title: "Success!",
            text: "Book Updated successfully!",
            icon: "success",
            confirmButtonText: "OK",
          });
        });
    }
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
                <h1 className="text-3xl sm:text-5xl font-bold text-center p-5 mx-auto">
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
         <div className="overflow-x-auto p-4 w-full">
  <table className="table-fixed min-w-[1200px] border text-sm">
    <thead className="bg-gray-200 text-gray-700">
      <tr>
        <th className="p-2 border w-[100px]">Cover</th>
        <th className="p-2 border w-[250px]">Title</th>
        <th className="p-2 border w-[200px]">Author</th>
        <th className="p-2 border w-[150px]">Category</th>
        <th className="p-2 border w-[80px]">Pages</th>
        <th className="p-2 border w-[200px]">Status</th>
        <th className="p-2 border w-[350px]">Overview</th>
        <th className="p-2 border w-[80px]">
          <GrLike className="mx-auto" />
        </th>
        <th className="p-2 border w-[160px]">Actions</th>
      </tr>
    </thead>
    <tbody>
      {addedBook.map((book) => (
        <tr key={book._id} className="text-center">
          <td className="border p-2 w-[100px]">
            <img
              src={book.cover_photo}
              alt={book.book_title}
              className="h-28 w-20 object-cover mx-auto rounded"
            />
          </td>
          <td className="border p-2 w-[250px] font-semibold truncate">
            {book.book_title}
          </td>
          <td className="border p-2 w-[200px] truncate">
            {book.book_author}
          </td>
          <td className="border p-2 w-[150px]">
            {book.book_category}
          </td>
          <td className="border p-2 w-[80px]">{book.total_page}</td>
          <td className="border p-2 w-[200px]">
            <select
              className="border border-gray-300 px-2 py-1 rounded w-full"
              value={book.reading_status}
              onChange={(e) =>
                handleChangeStatus(book._id, e.target.value)
              }
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
          </td>
          <td className="border p-2 text-justify w-[350px]">
            {book.book_overview?.slice(0, 100)}...
          </td>
          <td className="border p-2 w-[80px]">
            <button
              onClick={() => handleUpvote(book._id)}
              className="flex items-center gap-1 text-blue-500 hover:text-blue-700 mx-auto"
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                {book.upvote}
              </motion.span>
            </button>
          </td>
          <td className="border p-2 w-[160px] h-20">
            <div className="flex flex-col justify-between h-full gap-1">
              <button
                onClick={() => navigate(`/bookDetails/${book._id}`)}
                className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 w-full"
              >
                Details
              </button>
              <button
                onClick={() => {
                  bookId(book._id);
                  openModal();
                }}
                className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 w-full"
              >
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
                      handleDelete(book._id);
                      Swal.fire(
                        "Deleted!",
                        "Your review has been deleted.",
                        "success"
                      );
                    }
                  });
                }}
                className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 w-full"
              >
                Delete
              </button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
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
