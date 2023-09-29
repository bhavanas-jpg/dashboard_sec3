import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularBarChart = () => {
  const percentage = 85;

/***
 * new customers - 66% - pathColor: #16C09861 
 * target customers - 90% - pathColor: #FF6B6B
 * Retarget Customers - 30% - pathColor: #FFC5C5 
 * 
 */



  return (
    <div style={{ width: 90, height: 90 }}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        counterClockwise={true}
        styles={buildStyles({
          trailColor: "#E2E2E2",
          pathColor: "#5F27CD",
        })}
      />
      <p>Current Customers</p>
    </div>
  );
};

export default CircularBarChart;
