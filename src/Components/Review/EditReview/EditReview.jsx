import React, {useContext, useEffect, useState} from "react";
import {RxCross2} from "react-icons/rx";
import {AuthContext} from "../../ContextFiles/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";

const EditReview = ({book, fetchReviews}) => {
  const {user} = useContext(AuthContext);
  const [rev, setRev] = useState();
  const review = (e, id) => {
    e.preventDefault();
    const user_name = user?.displayName;
    const image = e.target.photo.value;
    const rating = e.target.rating.value;
    const review = e.target.review.value;
    const book_title = e.target.title.value;

    const userRev = {
      book_title,
      image,
      rating,
      review,
      user_name,
    };

    axios
      .put(
        `https://vercel-backend-for-bookshelf.vercel.app/review/${id}`,
        userRev
      )

      .then(() => {
        document.getElementById("my_modal_6").close();

        return Swal.fire({
          icon: "success",
          title: "Thank you!",
          text: "Your review has been edited.",
          confirmButtonColor: "#3085d6",
        });
      })
      .then(() => {
        fetchReviews();
      });
  };

  useEffect(() => {
    axios("https://vercel-backend-for-bookshelf.vercel.app/review").then(
      (res) => {
        const thisRev = res.data.find(
          (r) =>
            r.book_title === book.book_title &&
            r.user_name === user?.displayName
        );
        setRev(thisRev);
      }
    );
  }, []);

  return (
    <div>
      <button
        className="btn rounded-lg bg-yellow-500 text-white font-bold"
        onClick={() => document.getElementById("my_modal_6").showModal()}
      >
        Edit
      </button>

      <dialog id="my_modal_6" className="modal">
        <div className="modal-box">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-bold mb-auto">Edit Your Review</h1>
            <form method="dialog">
              <button className="cursor-pointer border border-red-600 rounded-lg px-2 hover:scale-105 transition-transform ">
                {" "}
                <RxCross2 size={30} />
              </button>
            </form>
          </div>

          <div>
            <form onSubmit={(e) => review(e, rev._id)}>
              <input
                className="h-15 mb-3 border rounded-lg w-full p-2 hidden"
                type="text"
                name="name"
                defaultValue={user?.displayName}
              />
              <br />
              <input
                className="h-15 mb-3 border rounded-lg w-full p-2 hidden"
                type="text"
                name="photo"
                defaultValue={user?.photoURL}
              />
              <br />
              <input
                className="h-15 mb-3 border  rounded-lg w-full p-2"
                type="number"
                name="rating"
                placeholder="Give rating..."
                defaultValue={rev?.rating}
                step="0.1"
              />
              <br />
              <input
                className="h-15 mb-3 border rounded-lg w-full p-2 hidden"
                type="text"
                name="title"
                defaultValue={book.book_title}
              />
              <br />

              <textarea
                name="review"
                rows="4"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:border-blue-400"
                placeholder="Write your thoughts about the book..."
                defaultValue={rev?.review}
              ></textarea>

              <div className="flex justify-center mt-4">
                <button type="submit" className="btnnnn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default EditReview;
