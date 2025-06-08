import React, { useContext } from "react";
import {Fade} from "react-awesome-reveal";
import { AuthContext } from "../../ContextFiles/AuthContext";

const AddBook = () => {
const {user}=useContext(AuthContext)
console.log(user);



  return (
    <div className=" mx-[2%] lg:mx-[5%]">
      <Fade direction="down" cascade duration={800} triggerOnce={false}>
        <h1 className="text-3xl sm:text-5xl font-bold text-center mb-10">
          Add a Book to the Collection
        </h1>
      </Fade>

      <div className="w-full flex justify-center">
        <form className="w-3/4 sm:w-2/3 md:w-3/5 lg:w-2/5 flex flex-col justify-center items-center " >
          <input type="text" name="" className="h15 p-2   border-2 w-full  rounded-lg " defaultValue={user?.displayName}/> <br />
          <input type="text" name="" className="h15 p-2   border-2 w-full  rounded-lg " /> <br />
          <input type="text" name="" className="h15 p-2   border-2 w-full  rounded-lg " /> <br />
          <input type="text" name="" className="h15 p-2   border-2 w-full  rounded-lg " /> <br />
          <input type="text" name="" className="h15 p-2   border-2 w-full  rounded-lg " /> <br />
          <input type="text" name="" className="h15 p-2   border-2 w-full  rounded-lg " /> <br />
          <textarea
                name="overview"
                rows="4"
                className="p-2   border-2 w-full  rounded-lg"
                placeholder="Write overview about the book..."
                required
          ></textarea>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
