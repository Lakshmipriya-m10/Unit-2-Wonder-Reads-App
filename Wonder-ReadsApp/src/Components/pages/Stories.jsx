
/*import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Story = ({ storyData }) => {

  // Stop current audio when component/story changes
  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, [storyData]);

  const readStory = () => {
    if (!storyData) return;

    // Remove punctuation before reading
    const cleanText = storyData.text.replace(/[,!?;:]/g, "");

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

  // If no story was passed
  if (!storyData) {
    return <p>Story not found.</p>;
  }

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

    
      <Swiper
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
        navigation
        slidesPerView={1}
      >
        {storyData.images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={storyData.title}
              width="100%"
            />
          </SwiperSlide>
        ))}
      </Swiper>

    
      <h2>{storyData.title}</h2>

     
      <p>{storyData.text}</p>

      <div className="button-group">

        <button className="button" onClick={readStory}>
          🔊 Read Story
        </button>

        <button className="button" onClick={stopReading}>
          Stop
        </button>

        <button className="button" onClick={pauseReading}>
          Pause
        </button>

        <button className="button" onClick={resumeReading}>
          Resume
        </button>

      </div>

    </div>
  );
};

export default Story;
*/
