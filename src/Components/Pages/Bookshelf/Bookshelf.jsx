import axios from "axios";
import React, {useEffect, useState} from "react";
import {Fade} from "react-awesome-reveal";
import {BsSearch} from "react-icons/bs";
import {motion} from "framer-motion";
import Loder from "../../Loder/Loder";
import {Link} from "react-router";
import {GrLike} from "react-icons/gr";
const Bookshelf = () => {
  useEffect(() => {
    window.scrollTo({top: 0, behavior: "smooth"});
  });
  const [allBooks, setAllBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [readingStatus, setReadingStatus] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://vercel-backend-for-bookshelf.vercel.app/allBooks")
      .then((res) => {
        setAllBooks(res.data);

        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    const lower = searchTerm.toLowerCase();

    let filtered = allBooks.filter((book) => {
      const matchesSearch =
        !searchTerm ||
        book?.book_title?.toLowerCase().includes(lower) ||
        book?.book_author?.toLowerCase().includes(lower);

      const matchesReadingStatus =
        !readingStatus || book?.reading_status === readingStatus;

      return matchesSearch && matchesReadingStatus;
    });

    if (sortType === "author-az") {
      filtered.sort((a, b) => a.book_author.localeCompare(b.book_author));
    } else if (sortType === "author-za") {
      filtered.sort((a, b) => b.book_author.localeCompare(a.book_author));
    } else if (sortType === "upvotes-high") {
      filtered.sort((a, b) => b.upvote - a.upvote);
    } else if (sortType === "upvotes-low") {
      filtered.sort((a, b) => a.upvote - b.upvote);
    }

    setFilteredBooks(filtered);
  }, [searchTerm, readingStatus, sortType, allBooks]);

  useEffect(() => {
    const lower = searchTerm.toLowerCase();

    const filtered = allBooks.filter((book) => {
      const matchesSearch =
        !searchTerm ||
        book?.book_title?.toLowerCase().includes(lower) ||
        book?.book_author?.toLowerCase().includes(lower);

      const matchesReadingStatus =
        !readingStatus || book?.reading_status === readingStatus;

      return matchesSearch && matchesReadingStatus;
    });

    setFilteredBooks(filtered);
  }, [searchTerm, readingStatus, allBooks]);

  if (loading) {
    return <Loder></Loder>;
  }

  return (
    <motion.div
      initial={{opacity: 0, y: 60}}
      animate={{opacity: 1, y: 0}}
      exit={{opacity: 0, y: -40}}
      transition={{duration: 1.2}}
      className="mb-10 mx-[2%] lg:mx-[5%] min-h-screen p-5 rounded-lg shadow-md"
    >
      <Fade direction="down" cascade duration={800} triggerOnce={false}>
        <div className="">
          <h1 className="text-3xl sm:text-5xl font-bold text-center mb-10">
            All Books
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 items-center justify-between gap-5 p-4 bg-white rounded-xl shadow my-4">
            <div className="flex flex-row w-full xl:col-span-2">
              <input
                type="text"
                placeholder="Search by book title or author..."
                className=" w-full px-4 py-2 border-2  border-blue-400 border-r-0 rounded-lg rounded-r-none focus:outline-none focus:ring-0 "
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <div className="h-[44px] w-[50px] bg-blue-400 flex justify-center rounded-lg rounded-l-none items-center">
                <span>
                  <BsSearch size={25} />
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:hidden gap-5">
              <select
                className="w-full h-[44px]  px-4 py-2 border-2 border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={readingStatus}
                onChange={(e) => setReadingStatus(e.target.value)}
              >
                <option value="">All Books</option>
                <option value="Read">Read</option>
                <option value="Reading">Reading</option>
                <option value="Want-to-Read">Want-to-Read</option>
              </select>

              <select
                className="w-full h-[44px] px-4 py-2 border-2 border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={sortType}
                onChange={(e) => setSortType(e.target.value)}
              >
                <option value="">Sort By</option>
                <option value="author-az">Author A → Z</option>
                <option value="author-za">Author Z → A</option>
                <option value="upvotes-high">Upvotes High → Low</option>
                <option value="upvotes-low">Upvotes Low → High</option>
              </select>
            </div>

            <select
              className=" hidden md:block w-full h-[44px]  px-4 py-2 border-2 border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={readingStatus}
              onChange={(e) => setReadingStatus(e.target.value)}
            >
              <option value="">All Books</option>
              <option value="Read">Read</option>
              <option value="Reading">Reading</option>
              <option value="Want-to-Read">Want-to-Read</option>
            </select>

            <select
              className=" hidden md:block w-full h-[44px] px-4 py-2 border-2 border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={sortType}
              onChange={(e) => setSortType(e.target.value)}
            >
              <option value="">Sort By</option>
              <option value="author-az">Author A → Z</option>
              <option value="author-za">Author Z → A</option>
              <option value="upvotes-high">Upvotes High → Low</option>
              <option value="upvotes-low">Upvotes Low → High</option>
            </select>
          </div>
        </div>
      </Fade>
      {loading ? (
        <div className="flex justify-center items-center h-[50vh]">
          <div className="w-12 h-12 border-5 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : filteredBooks.length === 0 ? (
        <div className="text-center p-10 bg-blue-400/40 border border-dashed border-gray-300 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            No books found
          </h2>
          <p className="text-gray-500">
            We couldn't find any books under the selected category.
          </p>
          <div className="flex justify-center items-center">
            <img
              className="w-[300px] "
              src="research-paper-animate.svg"
              alt=""
            />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 md:grid-cols-3 gap-5  ">
          {filteredBooks.map((sort) => (
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
    </motion.div>
  );
};

export default Bookshelf;
