
import React, { useEffect } from "react";
import stories from "../data/stories";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Grade5Reading = () => {

  // Get only Grade 3 stories
  const grade5Stories = stories.filter(
    story => story.grade === 5
  );

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

  return (
    <div
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/o7vbtffn/image/upload/v1783625039/book2_bxweas.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh"
      }}
    >

      <h2>Grade 5 Reading</h2>

      {grade5Stories.map((story) => (

        <div key={story.id}>

          {/* Story Images */}
          <Swiper
            modules={[Navigation, Pagination]}
            pagination={{ clickable: true }}
            navigation
            slidesPerView={1}
          >
            {story.images.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={story.title}
                  width="75%"
                 height="30%"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Story Title */}
          <h2>{story.title}</h2>

          {/* Story Text */}
          <p>{story.text}</p>

          {/* TTD Buttons */}
          <div className="button-group">

            <button
              className="button"
              onClick={() => readStory(story)}
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

      ))}

    </div>
  );
};

export default Grade5Reading;

