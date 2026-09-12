import React from 'react';
import "../design/reading.css";
import { Link } from "react-router-dom";

const Reading = ({ image, title, lexile, grade, link }) => {

  if (!title) return null;

  return (
    <div className="card-container">

      {/* Clickable Image */}
      <Link to={link}>
        <img
          src={image}
          alt={title}
          className="card-img"
        />
      </Link>

      <h4 className="title">Title: {title}</h4>
      <h4 className="lexile">Lexile: {lexile}</h4>
      <h4 className="grade">Grade: {grade}</h4>



    </div>
  );
};

export default Reading;
