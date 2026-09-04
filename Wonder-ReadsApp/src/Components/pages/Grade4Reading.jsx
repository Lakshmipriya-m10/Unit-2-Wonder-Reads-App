
import React, { useEffect, useState } from "react";
import stories from "../data/stories";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Grade4Reading = () => {

  // Get only Grade 4 stories
  const grade4Stories = stories.filter(
    story => story.grade === 4
  );

  // Selected story
  const [selectedStory, setSelectedStory] = useState(null);

  // Stop TTD when leaving the page
  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const readStory = (story) => {
    if (!story) return;

    const cleanText = story.text.replace(/[,!?;:]/g, "");

    const speech = new SpeechSynthesisUtterance(cleanText);

    speech.rate = 0.5;
    speech.pitch = 1;
    speech.lang = "en-US";

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
  };

  const stopReading = () => {
    window.speechSynthesis.cancel();
  };

  const pauseReading = () => {
    window.speechSynthesis.pause();
  };

  const resumeReading = () => {
    window.speechSynthesis.resume();
  };

  // If a story is selected, show the reading page
  if (selectedStory) {
    return (
      <div
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/o7vbtffn/image/upload/v1783625039/book2_bxweas.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          padding: "30px"
        }}
      >

        {/* Back button */}
        <button
          className="button"
          onClick={() => {
            stopReading();
            setSelectedStory(null);
          }}
        >
          ← Back to Grade 4 Stories
        </button>

        {/* Story title */}
        <h2>{selectedStory.title}</h2>

        {/* Story Images */}
        <Swiper
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true }}
          navigation
          slidesPerView={1}
        >
          {selectedStory.images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={selectedStory.title}
                width="100%"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Story Text */}
        <p>{selectedStory.text}</p>

        {/* TTD Buttons */}
        <div className="button-group">

          <button
            className="button"
            onClick={() => readStory(selectedStory)}
          >
            🔊 Read Story
          </button>

          <button
            className="button"
            onClick={stopReading}
          >
            Stop
          </button>

          <button
            className="button"
            onClick={pauseReading}
          >
            Pause
          </button>

          <button
            className="button"
            onClick={resumeReading}
          >
            Resume
          </button>

        </div>

      </div>
    );
  }

  // Story card page
  return (
    <div
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/o7vbtffn/image/upload/v1783625039/book2_bxweas.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "30px"
      }}
    >

      <h2>Grade 4 Reading</h2>

      <p>Choose a story to start reading</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px",
          maxWidth: "1000px",
          margin: "30px auto"
        }}
      >

        {grade4Stories.map((story) => (

          <div
            key={story.id}
            style={{
              background: "white",
              borderRadius: "15px",
              padding: "20px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              textAlign: "center"
            }}
          >

            {/* First story image */}
            <img
              src={story.images[0]}
              alt={story.title}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
                borderRadius: "10px"
              }}
            />

            {/* Story title */}
            <h3>{story.title}</h3>

            {/* Read button */}
            <button
              className="button"
              onClick={() => setSelectedStory(story)}
            >
              📖 Read Story
            </button>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Grade4Reading;

