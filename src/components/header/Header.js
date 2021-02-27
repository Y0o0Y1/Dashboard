import React from "react";
import UserBadge from "./UserBadge";


const header = () => {
  return (
    <header className="header">
    <div className="user">
      <UserBadge />
    </div>
    </header>
  );
};

export default header;
