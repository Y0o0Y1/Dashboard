import React from "react";
import DropDownItem from "./DropDownItem";
import "./dropdown.css";
import MenuItem1 from "./menuItem1.png"
import MenuItem2 from "./menuItem2.png"

const Dropdown = () => {
  
  return (
    <div className="dropdown">
      <ul>
        <h4 className="title">Notifications</h4>
        <DropDownItem imgSrc={MenuItem1} content="Transafer Link confirmed By User1234@email.com" />
        <DropDownItem imgSrc={MenuItem1} content="Transafer Link confirmed By User1234@email.com" />
        <DropDownItem imgSrc={MenuItem2} content="Confirmation Email Sent to user1243@email.com" />
        <DropDownItem imgSrc={MenuItem1} content="Transafer Link confirmed By User1234@email.com" />
      </ul>
    </div>
  );
};

export default Dropdown;
