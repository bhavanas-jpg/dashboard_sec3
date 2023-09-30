import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularBarChart = () => {
  const percentage = 85;
  const newCustomerPercent = 66;
  const targetCustomer = 90;
  const retargetCustomer = 30;

  /***
   * new customers - 66% - pathColor: #16C09861
   * target customers - 90% - pathColor: #FF6B6B
   * Retarget Customers - 30% - pathColor: #FFC5C5
   *
   */

  return (
    <div className="circular__chart--container">
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
        <p className="chart__heading">Current Customers</p>
      </div>
      <div style={{ width: 90, height: 90 }}>
        <CircularProgressbar
          value={newCustomerPercent}
          text={`${newCustomerPercent}%`}
          counterClockwise={true}
          styles={buildStyles({
            trailColor: "#E2E2E2",
            pathColor: "#16C09861",
          })}
        />
        <p className="chart__heading"> New Customers</p>
      </div>
      <div style={{ width: 90, height: 90 }}>
        <CircularProgressbar
          value={targetCustomer}
          text={`${targetCustomer}%`}
          counterClockwise={true}
          styles={buildStyles({
            trailColor: "#E2E2E2",
            pathColor: "#FF6B6B",
          })}
        />
        <p className="chart__heading">Target Customers</p>
      </div>
      <div style={{ width: 90, height: 90 }}>
        <CircularProgressbar
          value={retargetCustomer}
          text={`${retargetCustomer}%`}
          counterClockwise={true}
          styles={buildStyles({
            trailColor: "#E2E2E2",
            pathColor: "#FFC5C5",
          })}
        />
        <p className="chart__heading">Retarget Customers</p>
      </div>
    
    </div>
  );
};

export default CircularBarChart;
