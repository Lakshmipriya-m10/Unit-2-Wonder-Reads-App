import React from "react";
import "../design/header.css";

const Header = ({ title, subtitle, className = "" }) => {
  return (
    <header className={`page-header ${className}`}>
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </header>
  );
};

export default Header;