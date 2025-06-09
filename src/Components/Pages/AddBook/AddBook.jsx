import React, {useContext, useState} from "react";
import {Fade} from "react-awesome-reveal";
import {AuthContext} from "../../ContextFiles/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";
import {toast} from "react-toastify";
import {FaAngleDoubleDown} from "react-icons/fa";
const AddBook = () => {
  const {user} = useContext(AuthContext);
  console.log(user);

  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");

  const handleAddBook = (e) => {
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

    axios
      .post("https://vercel-backend-for-bookshelf.vercel.app/allBooks", book)
      .then(() => {
        form.reset();
        Swal.fire({
          title: "Success!",
          text: "Book added successfully!",
          icon: "success",
          confirmButtonText: "OK",
        });
      });

    console.log(book);
  };

  return (
    <div
      className="mx-[2%] lg:mx-[5%] bg-center bg-cover mb-10"
      style={{
        backgroundImage: "url('bookshop-animate.svg')",
      }}
    >
      <Fade direction="down" cascade duration={800} triggerOnce={false}>
        <h1 className="text-3xl sm:text-5xl font-bold text-center mb-10">
          Add a Book to the Collection
        </h1>
      </Fade>


        <div className="w-full flex flex-col justify-center items-center ">
          <form
            onSubmit={handleAddBook}
            className="w-3/4 sm:w-2/3 md:w-3/5 lg:w-2/5 flex flex-col justify-center items-center p-4 shadow-sm rounded-lg bg-blue-600/20 shadow-black"
          >
            <input
              type="text"
              name="authorName"
              className=" p-2   border-2 w-full  rounded-lg  bg-white/80"
              placeholder="Enter Author Name"
              required
            />{" "}
            <br />
            <input
              type="text"
              name="bookName"
              className=" p-2   border-2 w-full  rounded-lg  bg-white/80"
              placeholder="Enter Book Title"
              required
            />{" "}
            <br />
            <input
              type="text"
              name="photo"
              className=" p-2   border-2 w-full  rounded-lg  bg-white/80"
              placeholder="Enter Book Cover Photo"
              required
            />{" "}
            <br />
            <input
              type="number"
              name="page"
              className=" p-2   border-2 w-full  rounded-lg  bg-white/80"
              placeholder="Enter Total Page Number"
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
                  {category || "Book Category "}
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
                  {status || "Reading Status "}
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
              required
            ></textarea>
            <br />
            <button type="submit" className="btn w-full bg-blue-500  border-black border-2 rounded-lg hover:bg-blue-400 hover:text-black text-white ">
              Add Book
            </button>
          </form>
        </div>
      </div>

  );
};

export default AddBook;
