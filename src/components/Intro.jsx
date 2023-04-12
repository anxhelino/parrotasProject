import React from "react";
import arrow from "../assets/images/icons8-downward-32.png";

const Intro = ({ title, info }) => {
  // console.log(title, info);
  return (
    <div className="intro">
      <h1>{title}</h1>
      <p>{info}</p>
      <img src={arrow} alt="" />
    </div>
  );
};

export default Intro;
