import React from 'react';
import { Link } from "react-router-dom";
import '../design/navbar.css';
import { NavLink } from "react-router-dom";
import { useState } from 'react';

const Navbar = () => {
  const [hamburgerOpen, sethamburgerOpen] = useState(false);
  return (
    <nav>
      <Link to="/" className="title">Wonder Reads</Link>
      <div className="hamburger" onClick={() => {
        sethamburgerOpen(!hamburgerOpen);
      }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={hamburgerOpen ? "open" : ""}>
        <li><NavLink to="/About">About</NavLink></li>
        <li><NavLink to="/Reading">Reading</NavLink></li>
        <li><NavLink to="/Quiz">Quiz</NavLink></li>
        <li><NavLink to="/StoryForm">StoryForm</NavLink></li>
        <li><NavLink to="/MiniGames">MiniGames</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
