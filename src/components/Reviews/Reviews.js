import React from "react";
import useReviewsShow from "../CustomHook/useReviewsShow";
import ReviewDetail from "../ReviewDetail/ReviewDetail";

const Reviews = () => {
  const [reviews, setReviews] = useReviewsShow();
  return (
    <div className="container">
      <header className="my-5 my-lg-0 mt-lg-5">
        <h1>
          Customer <span style={{ color: "#32a2e3" }}>Reviews</span>
        </h1>
        <div
          style={{
            border: "3px solid rgb(50, 162, 227)",
            width: "150px",
            margin: "0 auto",
          }}
        ></div>
      </header>
      <div className="row row-cols-1 row-cols-lg-3 gy-3 gy-lg-5 my-2 my-lg-4">
        {reviews.map((review) => (
          <ReviewDetail key={review.id} review={review}></ReviewDetail>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
