
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import "../design/ownstories.css";
import Button from "../pages/Button";
import { Link } from "react-router-dom";


const OwnStories = () => {
  const [stories, setStories] = useState([]);
  const [editStory, setEditStory] = useState(null);
  const userRole = localStorage.getItem("role");

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
    console.log("EDIT CLICKED:", story); setEditStory(story); 
  };
  const handleUpdate = () => {
      fetch(`http://localhost:8080/api/own-stories/${editStory.storyId}`, {
      method: "PUT",
   
        headers: {
            "Content-Type": "application/json",
             "Student-Id": localStorage.getItem("studentId"),
                  },
      
      body: JSON.stringify(editStory),
    })
    .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to edit story");
        }
          return response.json();
    })
    .then((updatedStory) => {
      setStories(
        stories.map((story) =>
          story.storyId === updatedStory.storyId
            ? updatedStory
            : story
        )
      );

      setEditStory(null);
    })
    .catch((error) => {
      console.error("Error updating story:", error);
    });
};

  // DELETE
  const handleDelete = (story) => {
    fetch(`http://localhost:8080/api/own-stories/${story.storyId}`, {
      method: "DELETE",
       headers: {
      "Student-Id": localStorage.getItem("studentId"),
    },
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
    <div className="own-stories-page">
     <h2>Own Stories</h2>
      <Link to="/reading">
               <button
                 style={{
                   padding: "10px 20px",
                   marginBottom: "20px",
                   borderRadius: "8px",
                   border: "none",
                   cursor: "pointer",
                   fontSize: "18px",
                   color: "black",
                 }}
               >
                 ← Back to Reading
               </button>
             </Link>
     
     
   {stories.map((story) => (
  <div className="story-card" key={story.storyId}>

    {editStory && editStory.storyId === story.storyId ? (
      
      // EDIT FORM
      <div className="edit-form">
        <textarea
          value={editStory.story}
          onChange={(edit) =>
            setEditStory({
              ...editStory,
              story: edit.target.value,
            })
          }
              rows="10"
             
        />

       <Button onClick={handleUpdate}>
          Save
        </Button>

        <Button onClick={() => setEditStory(null)}>
          Cancel
        </Button>
      </div>

    ) : (

      <>
        <p className="story-text">
          {story.story}
        </p>
      <br></br>
        <p className="story-author">
          Written by:{"  "}
          {story.student && story.student.name
            ? story.student.name
            : "Unknown"}
      
        </p>

        <div className="story-actions">
          {userRole === "ADMIN" && (
            <>
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
          </>
          )}
        </div>
      </>

    )}

  </div>
))}
    </div>
  );
  
};

export default OwnStories;

