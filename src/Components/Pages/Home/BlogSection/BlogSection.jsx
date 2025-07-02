import React from "react";
import {FaBook, FaLock, FaSearch} from "react-icons/fa";
import {motion} from "framer-motion";

const blogData = [
  {
    title: "Why Use a Digital Bookshelf?",
    icon: <FaBook className="text-blue-600 text-3xl" />,
    content:
      "A digital bookshelf helps readers organize their reading journey, track progress, and get personalized book recommendations—all in one place.",
  },
  {
    title: "How Secure Is Your Book Data?",
    icon: <FaLock className="text-green-600 text-3xl" />,
    content:
      "Virtual Bookshelf uses Firebase Auth and JWT for secure access. Your book data and profile info are protected with environment-secured backends.",
  },
  {
    title: "Tips for Finding Great Books",
    icon: <FaSearch className="text-yellow-500 text-3xl" />,
    content:
      "Use filters by category, reading status, or author name to quickly discover new books and see what others are enjoying most through upvotes.",
  },
];

const BlogSection = () => {
  return (
    <section className="bg-white py-12 rounded-lg  my-20  mx-[2%] lg:mx-[5%] shadow-black/20 shadow-lg p-2">
      <div className=" "> 
        <motion.h2
          initial={{opacity: 0, y: -20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}
          className="text-3xl font-bold text-center text-white mb-10"
        >
          📚 Blog & Resources
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogData.map((item, index) => (
            <motion.div
              key={index}
              initial={{opacity: 0, y: 40}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.5, delay: index * 0.2}}
              className=" bg-white shadow-md p-6 rounded-xl hover:shadow-xl transition"
            >
              <div className="flex items-center gap-4 mb-4">
                {item.icon}
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
              </div>
              <p className=" text-white">{item.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
