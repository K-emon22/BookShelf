import React from "react";

const Newsletter = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-12  mx-[2%] lg:mx-[5%] rounded-lg">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Stay in the Loop!
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Subscribe to our newsletter for the latest updates and offers.
        </p>

        <form className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="w-full sm:w-auto px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          />
          <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
