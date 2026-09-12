
import Header from "../pages/Header.jsx";
import '../design/header.css';
import '../design/about.css';
import React, { useState } from "react";


const About = () => {

  const [showMore, setShowMore] = useState(false);

  const features = [
    {
      emoji: "📚",
      title: "Reading Levels",
      text: "Stories are organized by reading levels to help children learn at their own pace."
    },
    {
      emoji: "🎧",
      title: "Audio Stories",
      text: "Children can listen to story narration while improving pronunciation and comprehension."
    },
    {
      emoji: "🎮",
      title: "Mini Games",
      text: "Interactive games make learning fun and improve memory and vocabulary."
    },
    {
      emoji: "✍️",
      title: "Create Stories",
      text: "Kids can create and share their own creative stories."
    }
  ];

  return (
    <div className="about-page">

      <video autoPlay muted loop className="bg-video">
        <source
          src="https://res.cloudinary.com/o7vbtffn/video/upload/v1783617687/jellyfish_vj9vmo.mp4"
        />
      </video>
      <Header
        title="About"
      />
      <div className="card">
        <h2>🌟 Welcome to Wonder Reads </h2>
        <p>
          "Making reading fun, creative, and interactive".</p>
        <p>
          Wonder Reads is an interactive reading application designed to make
          reading exciting and enjoyable for children.
        </p>
        <button
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show Less ▲" : "Learn More ▼"}
        </button>
        {showMore && (
          <p>
            Our goal is to improve vocabulary, comprehension, and confidence
            through stories, audio narration, creative writing, and educational
            games.
          </p>
        )}
      </div>
      <h2 style={{ textAlign: "center" }}>
        🚀 Explore Our Features
      </h2>
      <div className="feature-container">
        {features.map((feature, index) => (
          <div
            className="card feature-card"
            key={index}
          >
            <h3>
              {feature.emoji} {feature.title}
            </h3>
            <p>
              {feature.text}
            </p>
          </div>
        ))}
      </div>
      <div className="card">
        <h2>💡 Our Mission</h2>
        <p>
          Wonder Reads combines technology, storytelling, and creativity to
          inspire children to discover the joy of reading.
        </p>
      </div>
    </div>
  );
};


export default About;