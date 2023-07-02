import React from "react";
import "./reviews.css";
import ReviewSection from "./ReviewSection";
const Reviews = () => {
  return (
    <section className="reviews">
      <div className="container">
        <h1>
          Transform the Way You<br></br> Recruit Today.
        </h1>
        <p>
          World-leading Recruitment Software for Talent Acquisition and<br></br>
          Recruitment Professionals.
        </p>
        <div className="review-img-container flex">
          <div className="review-company flex">
            <img
              className="review-company-img-1"
              src="/images/reviews/review-img-1.png"
            ></img>
            <img src="/images/reviews/star.png" className="star-img"></img>
          </div>
          <div className="review-company flex">
            <img
              className="review-company-img"
              src="/images/reviews/review-img-2.png"
            ></img>
            <img src="/images/reviews/star.png" className="star-img"></img>
          </div>
          <div className="review-company flex">
            <img
              className="review-company-img"
              src="/images/reviews/review-img-3.png"
            ></img>
            <img src="/images/reviews/star.png" className="star-img"></img>
          </div>
          <div className="review-company flex">
            <img
              className="review-company-img"
              src="/images/reviews/review-img-4.png"
            ></img>
            <img src="/images/reviews/star.png" className="star-img"></img>
          </div>
        </div>
        <ReviewSection />
      </div>
    </section>
  );
};

export default Reviews;
