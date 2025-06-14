import {Fade} from "react-awesome-reveal";
import {Link} from "react-router";

const FeatureCAt = () => {
  return (
    <div className="mx-[2%] lg:mx-[5%] p-6 rounded-xl mb-20 shadow-black/20 shadow-lg mt-20">
      <Fade direction="up" cascade duration={800} triggerOnce={false}>
        <div className="">
          <h1 className="text-3xl sm:text-5xl font-bold  mb-10">
            Book Categories
          </h1>
        </div>
      </Fade>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3  gap-5 p-10 ">
        <div className="flex flex-col gap-3 justify-center items-center shadow-sm hover:shadow-blue-300 shadow-black hover:shadow-xl hover:scale-102 transition-transform hover:bg-white         p-2 rounded-lg   skeleton">
          <img
            className="aspect-[4/3] w-full rounded-lg"
            src="https://i.ibb.co/23B05yXL/7-elements-all-fiction-books-have-in-common-1024x683.jpg"
            alt=""
          />
          <h1 className="font-bold text-xl">Fictional Book</h1>

          <Link to={"/fiction"} className="btnnnn text-center w-full skeleton ">
            {" "}
            See All{" "}
          </Link>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center shadow-sm hover:shadow-blue-300 shadow-black hover:shadow-xl hover:scale-102 transition-transform hover:bg-white         p-2 rounded-lg  skeleton">
          <img
            className="aspect-[4/3] w-full rounded-lg"
            src="https://i.ibb.co/604jxDcn/Gemini-Generated-Image-atuy8matuy8matuy.png"
            alt=""
          />
          <h1 className="font-bold text-xl">Non-Fiction Book</h1>
          <Link
            to={"/nonficton"}
            className="btnnnn w-full text-center skeleton "
          >
            {" "}
            See All{" "}
          </Link>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center shadow-sm hover:shadow-blue-300 shadow-black hover:shadow-xl hover:scale-102 transition-transform hover:bg-white         p-2 rounded-lg skeleton">
          <img
            className="aspect-[4/3] w-full rounded-lg"
            src="https://i.ibb.co/pjWdS54Z/1-spider-man-no-way-home-poster.webp"
            alt=""
          />
          <h1 className="font-bold text-xl"> Fantasy</h1>
          <Link to={"/fantacy"} className="btnnnn text-center w-full skeleton ">
            {" "}
            See All{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeatureCAt;
