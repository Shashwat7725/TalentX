import React, { useState } from "react";
import { FaGreaterThan } from "react-icons/fa";
import { FaLessThan } from "react-icons/fa";
import data from "./review";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = data[index];

  function randNum() {
    setIndex(() => {
      const rand = Math.floor(Math.random() * data.length);
      return rand;
    });
  }
  function checkNumber(number) {
    if (number >= data.length) return 0;
    else if (number < 0) return data.length - 1;
    return number;
  }

  function increase() {
    setIndex((prevState) => {
      const newIndex = prevState + 1;
      return checkNumber(newIndex);
    });
  }

  function decrease() {
    setIndex((prevState) => {
      const newIndex = prevState - 1;
      return checkNumber(newIndex);
    });
  }

  return (
    <div className="review-container flex">
      <img src={image}></img>
      <h3 className="person">{name}</h3>
      <h5 className="job">{job}</h5>
      <p>{text}</p>
      <div>
        <FaLessThan className="icon" onClick={decrease} />
        <FaGreaterThan className="icon" onClick={increase} />
      </div>
    </div>
  );
};

export default Review;
