import React, {useContext, useEffect, useState} from "react";
import {Fade} from "react-awesome-reveal";
import {AuthContext} from "../../ContextFiles/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";
import {toast} from "react-toastify";
import {FaAngleDoubleDown} from "react-icons/fa";
import Loder from "../../Loder/Loder";
import {motion} from "framer-motion";
const AddBook = () => {
  useEffect(() => {
    window.scrollTo({top: 0, behavior: "smooth"});
  });
  const [loding, setLoding] = useState(true);

  const {user} = useContext(AuthContext);

  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");

  const email = user?.email;
  const token = user?.accessToken;

  const handleAddBook = async (e) => {
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

    if (!user) {
      return;
    }

    axios
      .post(
        `https://vercel-backend-for-bookshelf.vercel.app/allBooks?email=${email}`,
        book,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      .then(() => {
        form.reset();
        setCategory("");
        setStatus("");
        Swal.fire({
          title: "Success!",
          text: "Book added successfully!",
          icon: "success",
          confirmButtonText: "OK",
        });
      });
  };

  useEffect(() => {
    setTimeout(() => {
      setLoding(false);
    }, 500);
  }, []);

  if (loding) {
    return <Loder></Loder>;
  }

  return (
    <motion.div
      initial={{opacity: 0, y: 60}}
      animate={{opacity: 1, y: 0}}
      exit={{opacity: 0, y: -40}}
      transition={{duration: 1.2}}
      className="mx-[2%] lg:mx-[5%] bg-center bg-cover pb-10 md:min-h-screen"
      style={{
        backgroundImage: "url('bookshop-animate.svg')",
      }}
    >
      <Fade direction="down" cascade duration={800} triggerOnce={false}>
        <h1 className="text-3xl sm:text-5xl font-bold text-center text-blue-500 mb-10">
          Add A Book To The Collection
        </h1>
      </Fade>

     <div className="w-full flex flex-col justify-center items-center md:min-h-[calc(100vh-200px)]">
  <form
    onSubmit={handleAddBook}
    className="w-3/4 sm:w-2/3 md:w-3/5 lg:w-2/5 flex flex-col justify-center items-center p-4 shadow-lg rounded-lg bg-blue-100/30 dark:bg-blue-900/20 backdrop-blur-sm border border-blue-300 dark:border-blue-700 text-black dark:text-white"
  >
    <input
      type="text"
      name="bookName"
      className="p-2 border-2 border-blue-300 dark:border-blue-600 w-full rounded-lg bg-white/70 dark:bg-blue-950/30 dark:text-white text-lg "
      placeholder="Enter Book Title"
      required
    />
    <br />
    <input
      type="text"
      name="authorName"
      className="p-2 border-2 border-blue-300 dark:border-blue-600 w-full rounded-lg bg-white/70 dark:bg-blue-950/30 dark:text-white textarea-lg "
      placeholder="Enter Author Name"
      required
    />
    <br />
    <input
      type="text"
      name="photo"
      className="p-2 border-2 border-blue-300 dark:border-blue-600 w-full rounded-lg bg-white/70 dark:bg-blue-950/30 dark:text-white textarea-lg "
      placeholder="Enter Book Cover Photo"
      required
    />
    <br />
    <input
      type="number"
      name="page"
      className="p-2 border-2 border-blue-300 dark:border-blue-600 w-full rounded-lg bg-white/70 dark:bg-blue-950/30 dark:text-white textarea-lg "
      placeholder="Enter Total Page Number"
      required
    />
    <br />
    <div className="flex flex-row gap-2 w-full">

      <div className="dropdown dropdown-center w-full">
        <div
          tabIndex={0}
          role="button"
          className="btn w-full px-1 border-2 border-blue-300 dark:border-blue-600 rounded-lg h-[44px] bg-white/70 dark:bg-blue-950/30 text-gray-300 dark:text-white"
        >
          {category || "Book Category"} <FaAngleDoubleDown />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 dark:bg-blue-500/70 backdrop-blur-2xl text-gray-200 dark:text-white rounded-box z-10 w-52 p-2 shadow-sm border"
        >
          {["Fiction", "Non-Fiction", "Fantasy"].map((item) => (
            <li key={item}>
              <a onClick={() => setCategory(item)}>{item}</a>
            </li>
          ))}
        </ul>
      </div>


      <div className="dropdown dropdown-center w-full">
        <div
          tabIndex={0}
          role="button"
          className="btn w-full px-1 border-2 border-blue-300 dark:border-blue-600  rounded-lg h-[44px] bg-white/70 dark:bg-blue-950/30 text-gray-300 dark:text-white"
        >
          {status || "Reading Status"} <FaAngleDoubleDown />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 dark:bg-blue-500/70 backdrop-blur-2xl  dark:text-white text-gray-200 rounded-box z-10 w-52 p-2 shadow-sm border"
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
      className="hidden"
      defaultValue={user?.displayName}
    />
    <input
      type="text"
      name="email"
      className="hidden"
      defaultValue={user?.email}
    />
    <input
      type="text"
      name="upvote"
      className="hidden"
      defaultValue={0}
    />
    <textarea
      name="overview"
      rows="4"
      className="p-2 border-2 border-blue-300 dark:border-blue-600 w-full rounded-lg bg-white/70 dark:bg-blue-950/30 dark:text-white textarea-lg text-gray-300"
      placeholder="Write overview about the book..."
      required
    ></textarea>
    <br />
    <button
      type="submit"
      className="btn w-full bg-blue-500 hover:bg-blue-400 text-white hover:text-black border-2 border-blue-700 dark:border-blue-400 rounded-lg font-bold"
    >
      Add Book
    </button>
  </form>
</div>
    </motion.div>
  );
};

export default AddBook;
