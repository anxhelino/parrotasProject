import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";

const Result = ({ title, info, pointsInfo, percentage }) => {
  return (
    <div className="results">
      <h4>{title}</h4>
      <h2>{percentage ? percentage : 0}%</h2>
      <ProgressBar
        variant="info"
        style={{ height: 30 }}
        now={percentage ? percentage : "0"}
        label={`${percentage ? percentage : "0"}%`}
      />
      <p>{info}</p>
      <p className="pointsInfo">{pointsInfo}</p>
    </div>
  );
};

export default Result;
