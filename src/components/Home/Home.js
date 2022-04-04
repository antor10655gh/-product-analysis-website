import {
  faAngleDoubleRight,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import useReviewsShow from "../CustomHook/useReviewsShow";
import Hero from "../Hero/Hero";
import ReviewDetail from "../ReviewDetail/ReviewDetail";
import "./Home.css";

const Home = () => {
  const [reviews, setReviews] = useReviewsShow();

  const navigate = useNavigate();

  const allReviewShow = () => {
    const path = "/reviews";
    navigate(path);
  };

  return (
    <div className="container">
      <Hero></Hero>
      <div>
        <header>
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
      </div>
      <div className="row row-cols-1 row-cols-lg-3 gy-3 gy-lg-5 my-2 my-lg-4">
        {reviews.slice(0, 3).map((review) => (
          <ReviewDetail key={review.id} review={review}></ReviewDetail>
        ))}
      </div>
      <div className="row my-3 my-lg-5">
        <div className="col">
          <button onClick={allReviewShow} className="reviews-btn">
            <span>Show All Reviews</span>
            <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
