import axios from "axios";
import React, {useEffect, useState} from "react";
import {motion} from "framer-motion";
import {Link} from "react-router";
import {Fade} from "react-awesome-reveal";
import {GrLike} from "react-icons/gr";
const FeatureCAt = () => {
  const [feature, setFeature] = useState([]);

  useEffect(() => {
    axios("https://vercel-backend-for-bookshelf.vercel.app/allBooks").then(
      (res) => {
        const category = res.data.filter(
          (cat) => cat.book_category === "Fantasy"
        );

        setFeature(category);
      }
    );
  }, []);

  return (
    <div className="px-[2%] lg:px-[5%]">
      <Fade direction="down" cascade duration={800} triggerOnce={false}>
        <div className="">
          <h1 className="text-3xl sm:text-5xl font-bold  mb-10">
            Our Featured Category
          </h1>
        </div>
      </Fade>

      <div className=" grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {feature.map((sFeature) => (
          <div key={sFeature._id}>
            <motion.div
              whileHover={{
                boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.2)",
                scale: 1.02,
              }}
              className=" shadow-lg p-2 skeleton rounded-lg shadow-blue-100 grid grid-cols-5 gap-2 h-full "
            >
              <div className="h-full flex flex-col col-span-3 gap-2">
                <h1 className=" font-bold">{sFeature.book_title}</h1>
                <div className="flex flex-row justify-between mt-auto">
                  <h1 className="font-bold  text-blue-400 bg-blue-100 px-2 rounded-full border border-blue-400 my-auto">
                    {sFeature.book_category}
                  </h1>
                  <h1 className="font-bold flex flex-row gap-1 px-3 border rounded-full border-blue-400">
                    <span className="my-auto">
                      <GrLike />
                    </span>
                    <motion.span
                      animate={{scale: [1, 1.1, 1]}}
                      transition={{repeat: Infinity, duration: 1.2}}
                      className="text-blue-400 my-auto"
                    >
                      {sFeature.upvote}
                    </motion.span>
                  </h1>
                </div>
                <p className="line-clamp-3"> {sFeature.book_overview}</p>
              </div>
              <div className="col-span-2">
                <Fade direction="up" duration={800}>
                  <img
                    className=" aspect-[2/3] w-[110px] md:w-[100px] rounded-md  mx-auto shadow"
                    src={sFeature.cover_photo}
                    alt=""
                  />
                </Fade>
              </div>
              <div className="w-full col-span-5 mt-auto">
                <Fade direction="right" duration={800}>
                  <Link to={`/bookDetails/${sFeature._id}`}>
                    <button className=" btnnnn mt-5">View Details</button>
                  </Link>
                </Fade>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCAt;
