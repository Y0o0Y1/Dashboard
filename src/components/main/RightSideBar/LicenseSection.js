import React from "react";
import Renew from "./Group 35.svg"
import Deactivate from "./Group 36.png"
import Hide from "./Group.png"
import "./license.css"
const LicenseSection = () => {
  return (
      <div className="license-section">
        <p className="license">License Key</p>
        <h3 className="license-key">XXXX-XXXX-XXXX-XXXX</h3>
        <img className="hide" src={Hide} alt="img" />
        <img className="renew" src={Renew} alt="img" />
        <img className="deactivate" src={Deactivate} alt="img" />
        <p className="renewal-date">
          Next Renewal on <b>22 Mar 2021</b>
        </p>
      </div>
  );
};

export default LicenseSection;
