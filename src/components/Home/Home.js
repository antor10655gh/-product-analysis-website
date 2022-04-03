import React from "react";
import useReviewsShow from "../CustomHook/useReviewsShow";
import CustomLink from "../CustomLink/CustomLink";
import Hero from "../Hero/Hero";
import ReviewDetail from "../ReviewDetail/ReviewDetail";
import "./Home.css";

const Home = () => {
  const [reviews, setReviews] = useReviewsShow();
  return (
    <div className="container">
      <Hero></Hero>
      <div>
        <header>
          <h1>
            Customer <span style={{ color: "#32a2e3" }}>Reviews</span>
          </h1>
        </header>
      </div>
      <div className="row row-cols-1 row-cols-lg-3 gy-3 gy-lg-5 my-2 my-lg-4">
        {reviews.map((review) => (
          <ReviewDetail key={review.id} review={review}></ReviewDetail>
        ))}
      </div>
      <div className="row my-lg-5">
        <div className="col">
          <CustomLink className="reviews-btn" to="/reviews">
            Show All Reviews
          </CustomLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
