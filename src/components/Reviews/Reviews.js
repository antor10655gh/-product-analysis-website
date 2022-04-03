import React from "react";
import useReviewsShow from "../CustomHook/useReviewsShow";
import ReviewDetail from "../ReviewDetail/ReviewDetail";

const Reviews = () => {
  const [reviews, setReviews] = useReviewsShow();
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-lg-3 gy-3 gy-lg-5 my-2 my-lg-4">
        {reviews.map((review) => (
          <ReviewDetail key={review.id} review={review}></ReviewDetail>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
