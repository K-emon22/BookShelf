import React from "react";
import {motion} from "framer-motion";
import {FaGift, FaFireAlt, FaUserPlus} from "react-icons/fa";

const offers = [
  {
    icon: <FaGift className="text-pink-600 text-3xl" />,
    title: " 10 Bonus Upvotes",
    desc: "Newly registered users receive 10 bonus upvotes to engage with top books in their first week!",
  },
  {
    icon: <FaFireAlt className="text-red-500 text-3xl" />,
    title: " Trending Reads Challenge",
    desc: "Write 3 high-quality reviews and earn a special Reader Badge with homepage highlights!",
  },
  {
    icon: <FaUserPlus className="text-blue-600 text-3xl" />,
    title: " Invite & Earn",
    desc: "Invite a friend and both of you will unlock extra reading tracker rewards!",
  },
];

const Offer = () => {
  return (
    <section className="shadow-black/20 shadow-lg bg-gradient-to-br from-blue-100 to-blue-300 dark:from-blue-800 dark:to-blue-900  rounded-lg mt-20 p-5 py-12 mx-[2%] lg:mx-[5%]">
  <div className="max-w-6xl mx-auto">
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10"
    >
      📣 Special Offers & Promotions
    </motion.h2>

    <div className="grid md:grid-cols-3 gap-6">
      {offers.map((offer, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.2 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition"
        >
          <div className="flex items-center gap-4 mb-3">
            {offer.icon}
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              {offer.title}
            </h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300">{offer.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>
  );
};

export default Offer;
