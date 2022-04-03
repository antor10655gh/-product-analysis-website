import React from "react";
import useReviewsShow from "../CustomHook/useReviewsShow";
import Hero from "../Hero/Hero";
import ReviewDetail from "../ReviewDetail/ReviewDetail";
import Reviews from "../Reviews/Reviews";

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
      <div className="row row-cols-1 row-cols-lg-3 gy-5 my-4">
        {reviews.map((review) => (
          <ReviewDetail key={review.id} review={review}></ReviewDetail>
        ))}
      </div>
    </div>
  );
};

export default Home;
