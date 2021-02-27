import React from "react";
import "./checkouts.css";

const Checkouts = ({ title, imgSrc, num, failure }) => {
  return (
    <div className="card checkout">
      <div className="checkout-title">
        <h3> {title}</h3>
      </div>
      <img src={imgSrc} alt="" />
      <div className="checout-number">
        <p className={failure? "failure":"checkouts"}>{num}</p>
        / 82
      </div>
    </div>
  );
};

export default Checkouts;
