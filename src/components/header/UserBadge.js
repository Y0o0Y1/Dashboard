import React, { useState, useRef,useEffect } from "react";
import "./userBadge.css";
import userImg from "./small-image.jpg";
import NotificationBadge from "./notification-badge.png";
import Dropdown from "./dropdown/Dropdown";

const UserBadge = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);
  const pageClickEvent = (e) => {
    // If the active element exists and is clicked outside of
    if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
      setIsActive(!isActive);
    }
  };
  useEffect(() => {
    const pageClickEvent = (e) => {
      // If the active element exists and is clicked outside of
      if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
        setIsActive(!isActive);
      }
    };
  
    // If the item is active (ie open) then listen for clicks
    if (isActive) {
      window.addEventListener('click', pageClickEvent);
    }
  
    return () => {
      window.removeEventListener('click', pageClickEvent);
    }
  
  }, [isActive]);
  
  return (
    <div className="user-badge">
      <div className="menu-container">
        <div className="user-notification">
          <img onClick={onClick} className="menu-trigger" src={NotificationBadge} alt=" "/>
        </div>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <Dropdown />
        </nav>
      </div>
      <div className="img-wrapper">
        <img className="user-img" src={userImg} />
      </div>
      <div className="user-details">
        <h5>Yahya Zaki</h5>
        <p>yzaki1243@Gmail.com</p>
      </div>
      <div className="svg-wrapper">
        <svg
          width="14"
          height="8"
          viewBox="0 0 14 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 7.75L0.75 1.5L1.625 0.625L7 6L12.375 0.625L13.25 1.5L7 7.75Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default UserBadge;
