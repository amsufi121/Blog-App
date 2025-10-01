import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="home-header">
      <h2>Your Daily Tech Companion</h2>
      <h1>
        <span>"</span> Blog <span>"</span>
      </h1>
      <p>
        {" "}
        Explore coding tutorials, AI trends, and the latest in technology 
      <br /> all in one place.
        daily updates.
      </p>
    </header>
  );
};

export default Header;
