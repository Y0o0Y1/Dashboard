import React from "react";
import "./horizontalbar.css";
import Checkouts from "./Checkouts"
import TotalCheckouts from "./total-check-outs.png"
import totalFailure from "./total-failure.png"
const HorizontalBar = () => {
  return (
    <div className="box-1">
      <div className="card filters">
        <h5>
        Filter By :
        </h5>
        <div className="specific-filter d">1D</div>
        <div className="specific-filter m">1M</div>
        <div className="specific-filter y">1Y</div>
      </div>
      <Checkouts
          title="Total Checkouts"
          imgSrc={TotalCheckouts}
          num={72}
      />
        <Checkouts
        failure={true}
          title="Total Failures"
          imgSrc={totalFailure}
          num={10}
      />
    </div>
  );
};

export default HorizontalBar;
