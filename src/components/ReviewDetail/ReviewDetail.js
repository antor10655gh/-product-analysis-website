import React from "react";
import "./ReviewDetail.css";

const ReviewDetail = (props) => {
  const { id, picture, reviews, rating } = props.review;
  return (
    <div className="col">
      <div className="review-wrapper card h-100">
        <div className="review-banner">
          <img src={picture} alt="" />
        </div>
        <div className="review-details">
          <p>
            <strong>Comment:</strong> {reviews}
          </p>
          <p>
            <strong>Rating:</strong> {rating}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetail;
