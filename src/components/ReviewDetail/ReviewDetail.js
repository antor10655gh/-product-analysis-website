import {
  faStar,
  faStarHalf,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ReviewDetail.css";

const ReviewDetail = (props) => {
  const { id, name, pImg, uImg, comment, rating } = props.review;
  return (
    <div className="col">
      <div className="review-wrapper card h-100">
        <div className="review-banner">
          <img src={uImg} alt="" />
        </div>
        <div className="review-details">
          <h4>{name}</h4>
          <p>{comment}</p>
          <p>
            <strong>Rating: </strong>
            <FontAwesomeIcon className="icon" icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className="icon" icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className="icon" icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className="icon" icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon
              className="icon"
              icon={faStarHalfStroke}
            ></FontAwesomeIcon>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetail;
