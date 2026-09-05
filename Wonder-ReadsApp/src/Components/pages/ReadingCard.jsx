import Reading from "../pages/Reading.jsx";
import React, { useEffect, useState } from "react";

const ReadingCards = () => {
  const [readingLevels, setReadingLevels] = useState([]);
   useEffect(() => {
    fetch("http://localhost:8080/api/readinglevels")
      .then((response) => response.json())
      .then((data) => {
        console.log("Reading levels:", data);
        setReadingLevels(data);
      })
      .catch((error) => {
        console.error("Error fetching reading levels:", error);
      });
  }, []);
  return (
    <div className="reading-container">
      {readingLevels.map((item) => (
        <Reading
          key={item.id}
          image={item.image}
          title={item.title}
          lexile={item.lexile}
          grade={item.grade}
          link={item.link}
        />
      ))}
    </div>
  );
};

export default ReadingCards;