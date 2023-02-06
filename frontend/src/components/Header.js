import React from "react";
import Fire from "./images/Fire.png";

const Header = () => {
  return (
    <div className="header">
      <img src={Fire} alt="logo" />
      <h1>Fire Chat </h1>
    </div>
  );
};

export default Header;
