import React, {useContext} from "react";
import {RxCross2} from "react-icons/rx";
import {AuthContext} from "../../ContextFiles/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";
import {toast} from "react-toastify";

const AddReview = ({
  book,
  hasUserReviewed,
  fetchReviews,
  setHasUserReviewed,
}) => {
  const {user} = useContext(AuthContext);

  const reviewed = () => {
    toast.warning("You have already reviewed this book!", {
      autoClose: 1000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      
      style: {
        color: "#111827",
        background: "black",
      },
    });
  };

  const review = (e) => {
    e.preventDefault();
    const user_name = user?.displayName;
    const image = e.target.photo.value;

    const rating = parseFloat(e.target.rating.value);
    const review = e.target.review.value;
    const book_title = e.target.title.value;
    const now = new Date();
    const options = {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    const createdAt = now.toLocaleString(undefined, options);
    const userRev = {
      book_title,
      image,
      rating,
      review,
      user_name,
      createdAt,
    };

    axios
      .post("https://vercel-backend-for-bookshelf.vercel.app/review", userRev)

      .then(() => {
        document.getElementById("my_modal_5").close();
        e.target.reset();

        setHasUserReviewed(true);
        fetchReviews();
        return Swal.fire({
          icon: "success",
          title: "Thank you!",
          text: "Your review has been submitted.",
          confirmButtonColor: "#3085d6",
        });
      });
  };

  return (
    <div>
      {hasUserReviewed ? (
        <button onClick={reviewed} className="btnnnn">
          {" "}
          Reviewed
        </button>
      ) : (
        <button
          className="btnnn"
          onClick={() => document.getElementById("my_modal_5").showModal()}
        >
          Add Review
        </button>
      )}

      <dialog id="my_modal_5" className="modal">
        <div className="modal-box">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-bold mb-auto">Add Your Review</h1>
            <form method="dialog">
              <button className="cursor-pointer border border-red-600 rounded-lg px-2 hover:scale-105 transition-transform ">
                {" "}
                <RxCross2 size={30} />
              </button>
            </form>
          </div>

          <div>
            <form onSubmit={review}>
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
                required
                min="0"
                max="5"
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
                required
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

export default AddReview;
