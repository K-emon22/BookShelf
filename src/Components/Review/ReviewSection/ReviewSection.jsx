import axios from "axios";
import React, {useContext, useEffect, useState} from "react";
import {Fade} from "react-awesome-reveal";
import AddReview from "../AddReview/AddReview";
import {AuthContext} from "../../ContextFiles/AuthContext";

const ReviewSection = ({book}) => {
  const {user} = useContext(AuthContext);

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
      .then((res) => setReview(res.data));
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <div className="mb-10 mt-10">
      <Fade direction="up" cascade duration={800} triggerOnce={false}>
        <div>
          <h1 className="text-3xl sm:text-5xl font-bold mb-10">
            Reader's Review and Thoughts.
          </h1>
        </div>
      </Fade>
      <div className="flex justify-center mb-10 hover:scale-110 transition-transform">
        <AddReview
          book={book}
          hasUserReviewed={hasUserReviewed}
          refreshReviews={fetchReviews}
        />
      </div>
      <div>
        {bookReview.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">No reviews yet.</p>
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
                    <p className="text-sm text-gray-500">⭐ {item.rating}</p>
                  </div>
                </div>
                <p className="text-gray-800 text-justify">{item.review}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewSection;


