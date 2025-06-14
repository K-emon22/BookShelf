import React, {useContext, useEffect, useState} from "react";
import {motion} from "framer-motion";
import {AuthContext} from "../../ContextFiles/AuthContext";
import Loder from "../../Loder/Loder";
import axios from "axios";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Profile = () => {
  useEffect(() => {
    window.scrollTo({top: 0, behavior: "smooth"});
  });
  const {user, loading} = useContext(AuthContext);
  const [loding, setLoding] = useState(true);
  const [addedBook, setAddedBook] = useState([]);
  const accessToken = user?.accessToken;
  const email = user?.email;
  useEffect(() => {
    if (!user || !accessToken || !email) return;
    axios
      .get(
        `https://vercel-backend-for-bookshelf.vercel.app/alldata?email=${email}`,
        {
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((res) => {
        setAddedBook(res.data.allBook);
        setLoding(false);
      });
  }, [user, accessToken, email]);

  const userBook = addedBook.filter((book) => book.user?.email === user?.email);
  console.log(userBook);

  const Fantasy = addedBook.filter(
    (boo) => boo.book_category == "Fantasy" && boo.user?.email === user?.email
  );

  const NonFiction = addedBook.filter(
    (boo) =>
      boo.book_category == "Non-Fiction" && boo.user?.email === user?.email
  );
  const Fiction = addedBook.filter(
    (boo) => boo.book_category == "Fiction" && boo.user?.email === user?.email
  );

  console.log(Fantasy.length, NonFiction.length, Fiction.length);

  console.log(addedBook);

  const data = [
    {
      name: "Fantasy",
      Total: Fantasy.length,
    },
    {
      name: "Non-Fiction",
      Total: NonFiction.length,
    },
    {
      name: "Fiction",
      Total: Fiction.length,
    },
  ];

  if (loding) {
    return <Loder></Loder>;
  }
  return (
    <motion.div
      initial={{opacity: 0, y: 60}}
      animate={{opacity: 1, y: 0}}
      exit={{opacity: 0, y: -40}}
      transition={{duration: 1.2}}
      className=" mx-[2%] lg:mx-[5%]  mt-10"
    >
      <div className=" grid sm:grid-cols-2  gap-10 bg-blue-400/20 rounded-lg px-5 shadow-xl shadow-black/30 mb-10">
        {loading ? (
          <div>
            {" "}
            <Loder></Loder>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center gap-5 py-5 ">
            <img
              className="rounded-full w-25 sm:w-40 md:w-60"
              src={user?.photoURL}
              alt=""
              referrerPolicy="no-referrer"
            />
            <h1 className="text-3xl sm:text-5xl font-bold text-center">
              {user?.displayName}
            </h1>
            <h1 className="font-semibold text-xl">{user?.email}</h1>
          </div>
        )}

        <img
          className=" transform rotate-90 sm:rotate-0 -mb-30 -mt-50 sm:-mb-0 sm:-mt-0  sm:block sm:w-[280px] md:w-[500px]  md:block "
          src="profile-data-animate-3.svg"
          alt=""
        />
      </div>

      <div className="sm:mt-10 mt-20">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-5 flex justify-between items-center">
            <h1 className="text-lg font-semibold text-gray-800">
              Total Added Books
            </h1>
            <span className="bg-blue-100 text-blue-600 font-bold text-xl py-1 px-3.5 rounded-full">
              {userBook.length}
            </span>
          </div>

          <hr className="border-gray-200" />

          <div className="p-5">
            <ul className="space-y-4">
              <li className="flex justify-between items-center text-base">
                <span className="text-gray-600">Total Fantasy Book</span>
                <span className="font-semibold text-gray-900 bg-gray-100 py-1 px-3 rounded-md">
                  {Fantasy.length}
                </span>
              </li>
              <li className="flex justify-between items-center text-base">
                <span className="text-gray-600">Total Non-Fiction Book</span>
                <span className="font-semibold text-gray-900 bg-gray-100 py-1 px-3 rounded-md">
                  {NonFiction.length}
                </span>
              </li>
              <li className="flex justify-between items-center text-base">
                <span className="text-gray-600">Total Fiction Book</span>
                <span className="font-semibold text-gray-900 bg-gray-100 py-1 px-3 rounded-md">
                  {Fiction.length}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full  h-96 pb-10 mt-10 mb-10 py-5 border-2 pr-5 rounded-lg">
        <h1 className="text-center font-semibold ">
          Visual Breakdown of Your Added Books
        </h1>

        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "2px solid blue",
                borderRadius: "8px",
                color: "black",
                fontSize: "14px",
              }}
              cursor={{fill: "white"}}
            />

            <Area
              type="monotone"
              dataKey="Total"
              stackId="1"
              stroke="black"
              fill="#60A5FA"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default Profile;
