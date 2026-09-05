
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Grade2Reading = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get Grade 2 stories from SQL
  useEffect(() => {
    fetch("http://localhost:8080/api/stories")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch stories");
        }
        return response.json();
      })
      .then((data) => {
        console.log("API data:", data);

        const grade2Stories = data.filter(
          (story) => String(story.Grade) === "2"
        );

        console.log("Grade 2 stories:", grade2Stories);

        setStories(grade2Stories);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setLoading(false);
      });
  }, []);

  // Stop speech when leaving the page
  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  // Read one story
  const readStory = (story) => {
    if (!story || !story.Text) {
      console.log("No story text available");
      return;
    }

    const speech = new SpeechSynthesisUtterance(story.Text);

    speech.rate = 0.5;
    speech.pitch = 1;
    speech.lang = "en-US";
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
  };

  // Stop
  const stopReading = () => {
    window.speechSynthesis.cancel();
  };

  // Pause
  const pauseReading = () => {
    window.speechSynthesis.pause();
  };

  // Resume
  const resumeReading = () => {
    window.speechSynthesis.resume();
  };

  // Get images from SQL
  const getImages = (story) => {
    if (!story || !story.image) return [];

    if (Array.isArray(story.image)) {
      return story.image;
    }

    if (typeof story.image === "string") {
      try {
        return JSON.parse(story.image);
      } catch {
        return [story.image];
      }
    }

    return [];
  };

  // Loading
  if (loading) {
    return <p>Loading stories...</p>;
  }

  // No Grade 1 stories
  if (stories.length === 0) {
    return <p>No Grade 2 stories found.</p>;
  }

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
      <h2>Grade 2 - Reading</h2>
      <Link to="/reading">
        <button
          style={{
            padding: "10px 20px",
            marginBottom: "20px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            fontSize: "18px",
            color: "black"
          }}
        >
          ← Back to Reading
        </button>
      </Link>
      {stories.map((story) => {
        const images = getImages(story);

        return (
          <div
            key={story.id}
            style={{
              maxWidth: "1000px",
              margin: "30px auto",
              background: "white",
              borderRadius: "20px",
              padding: "25px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
              display: "flex",
              gap: "30px",
              alignItems: "center",
            }}

          >
            {/* LEFT - IMAGE */}
            <div
              style={{
                width: "45%",
                flexShrink: 0,
              }}
            >
              <Swiper
                modules={[Navigation, Pagination]}
                pagination={{ clickable: true }}
                navigation
                slidesPerView={1}
              >
                {images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={img}
                      alt={`${story.title} ${index + 1}`}
                      style={{
                        width: "100%",
                        height: "75%",
                        objectFit: "contain",
                        borderRadius: "15px",
                      }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* RIGHT - STORY INFORMATION */}
            <div
              style={{
                flex: 1,
                textAlign: "left",
              }}
            >
              <h2
                style={{
                  fontSize: "28px",
                  marginBottom: "10px",
                }}
              >
                {story.title}
              </h2>
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "1.6",
                  color: "#333",
                }}
              >
                {story.Text}
              </p>

              {/* READ BUTTON */}
              <button
                className="button"
                onClick={() => readStory(story)}
                style={{
                  marginTop: "15px",
                  padding: "12px 25px",
                  borderRadius: "10px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
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
      })}
    </div>
  );
};

export default Grade2Reading; 
