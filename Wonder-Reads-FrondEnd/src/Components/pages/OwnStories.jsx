
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import "../design/ownstories.css";


const OwnStories = () => {
  const [stories, setStories] = useState([]);
  const [editStory, setEditStory] = useState(null);

  // GET stories
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

  // EDIT
  const handleEdit = (story) => {
    console.log("EDIT CLICKED:", story);
    setEditStory(story);
  };

  // DELETE
  const handleDelete = (story) => {
    fetch(`http://localhost:8080/api/own-stories/${story.storyId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete story");
        }

        return response.text();
      })
      .then(() => {
        setStories(
          stories.filter((item) => item.storyId !== story.storyId)
        );
      })
      .catch((error) => {
        console.error("Error deleting story:", error);

      })
  };

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
      {editStory && (
        <div>
          <textarea
            value={editStory.story}
            onChange={(edit) =>
              setEditStory({
                ...editStory,
                story: edit.target.value,

              })
            }
          />
          <button onClick={() => setEditStory(null)}>
            Cancel
          </button>
          
        </div>
      )}

      {stories.map((story) => (
        <div className="story-card"
          key={story.storyId}

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

          >
            Written by: {story.student?.name || "Unknown"}
          </p>
          <div className="story-actions">
            <button
              className="icon-button"
              onClick={() => handleEdit(story)}
              title="Edit story"
            >
              <FontAwesomeIcon icon={faPen} />
            </button>

            <button
              className="icon-button"
              onClick={() => handleDelete(story)}
              title="Delete story"
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>

          </div>
        </div>

      ))}
    </div>
  );
};

export default OwnStories;

