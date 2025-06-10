import axios from "axios";
import React, {useContext, useEffect, useState} from "react";
import {Fade} from "react-awesome-reveal";
import AddReview from "../AddReview/AddReview";
import {AuthContext} from "../../ContextFiles/AuthContext";
import Swal from "sweetalert2";
import EditReview from "../EditReview/EditReview";
const ReviewSection = ({book}) => {
  const {user} = useContext(AuthContext);

  const [lodRev, setLodRev] = useState(true);
  const [review, setReview] = useState([]);

  console.log(review);
  const bookReview = review.filter(
    (matchedBook) => matchedBook?.book_title === book?.book_title
  );
  const userReviews = bookReview.filter(
    (revw) =>
      revw.user_name === user?.displayName &&
      revw.book_title === book.book_title
  );

  const hasUserReviewed = userReviews.length > 0;
  const fetchReviews = () => {
    axios
      .get("https://vercel-backend-for-bookshelf.vercel.app/review")
      .then((res) => {
        setReview(res.data);
        setLodRev(false);
      });
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`https://vercel-backend-for-bookshelf.vercel.app/review/${id}`)
      .then(() => {
        setReview((prevReviews) =>
          prevReviews.filter((item) => item._id !== id)
        );
      });
  };



  return (
    <div className="mb-10 mt-10">
      <Fade direction="up" cascade duration={800} triggerOnce={false}>
        <div>
          <h1 id="review" className="text-3xl sm:text-5xl font-bold mb-10">
            Reader's Review and Thoughts.
          </h1>
        </div>
      </Fade>
      {lodRev ? (
        <div className="flex justify-center items-center h-[500px]">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div>
          {user && (
            <div className="flex justify-center mb-10 hover:scale-110 transition-transform">
              <AddReview
                book={book}
                hasUserReviewed={hasUserReviewed}
                refreshReviews={fetchReviews}
              />
            </div>
          )}
          <div>
            {bookReview.length === 0 ? (
              <p className="text-center text-gray-500 text-lg">
                No reviews yet.
              </p>
            ) : (
              <div className="space-y-6">
                {bookReview.map((item) => (
                  <div
                    key={item._id}
                    className="bg-white shadow-md rounded-xl p-6 border border-gray-200"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <img
                        src={item.image}
                        alt="Reviewer"
                        className="w-12 h-12 rounded-full border"
                      />
                      <div>
                        <p className="font-semibold">{item.user_name}</p>
                        <p className="text-sm text-gray-500">
                          ⭐ {item.rating}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-800 text-justify">{item.review}</p>

                    {item.user_name === user?.displayName && (
                      <div className="mt-4 flex flex-row gap-10">
                        <div className="flex justify-center hover:scale-110 transition-transform">
                          <EditReview
                            book={book}
                            refreshReviews={fetchReviews}
                          />
                        </div>

                        <button
                          onClick={() => {
                            Swal.fire({
                              title: "Are you sure?",
                              text: "You won’t be able to revert this!",
                              icon: "warning",
                              showCancelButton: true,
                              confirmButtonColor: "#d33",
                              cancelButtonColor: "#3085d6",
                              confirmButtonText: "Yes, delete it!",
                            }).then((result) => {
                              if (result.isConfirmed) {
                                handleDelete(item._id);

                                Swal.fire({
                                  title: "Deleted!",
                                  text: "Your review has been deleted.",
                                  icon: "success",

                                  showConfirmButton: true,
                                });
                              }
                            });
                          }}
                          className="btn font-bold text-white bg-red-600 rounded-lg"
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewSection;
