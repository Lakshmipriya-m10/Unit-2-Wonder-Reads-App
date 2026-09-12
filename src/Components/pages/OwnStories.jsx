
import React, { useEffect, useState } from "react";

const OwnStories = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/own-stories")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setStories(data);
      })
      .catch((error) => {
        console.error("Error fetching stories:", error);
      });
  }, []);

  return (
    <div
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/o7vbtffn/image/upload/v1783625039/book2_bxweas.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "30px",
      }}
    >
      <h2>Own Stories</h2>

      {stories.map((story) => (
        <div
          key={story.storyId}
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            padding: "20px",
            marginBottom: "20px",
            borderRadius: "12px",
            maxWidth: "800px",
            marginLeft: "auto",
            marginRight: "auto",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.6",
              whiteSpace: "pre-line",
            }}
          >
            {story.story}
          </p>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              marginTop: "15px",
              color:"blue",
            }}
          >
            Written by: {story.student?.name}
          </p>

        </div>
        
      ))}
    </div>
  );
};

export default OwnStories;


