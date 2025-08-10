import React from "react";

const Newsletter = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-10 px-4 sm:px-6 lg:px-8 mx-[2%] lg:mx-[5%] shadow-black/20 shadow-lg rounded-lg">
      <div className="max-w-2xl mx-auto text-center border dark:border-gray-700 rounded-lg p-6 sm:p-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white">
          Stay in the Loop!
        </h2>
        <p className="mt-4 text-black ">
          Subscribe to our newsletter for the latest updates and offers.
        </p>

        <form className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="w-full sm:w-2/3 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 "
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 rounded-lg bg-blue-500 text-gray-100 font-semibold hover:bg-blue-700 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};
        
export default Newsletter;