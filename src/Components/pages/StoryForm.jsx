import React, { useRef, useState } from "react";
import '../design/storyform.css';
import Button from '../pages/Button.jsx';
import '../design/button.css';


const CreateStory = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    story: ""
  });

  const [dialogMessage, setDialogMessage] = useState("");
  const [editingStory, setEditingStory] = useState(null);
  const dialogRef = useRef();

  const openDialog = (message) => {
    setDialogMessage(message);
    dialogRef.current.showModal();
  };

  const closeDialog = () => {
    dialogRef.current.close();
  };


  const handleChange = (event) => {
    const { name, value } = event.target;

    // Contact number validation
    if (name === "contact") {
      if (!/^\d*$/.test(value) || value.length > 10) {
        return;
      }
    }

    setFormData({
      ...formData,
      [name]: value
    });
  };

  //submit
 const handleSubmit = async (event) => {
  event.preventDefault();

  if (formData.contact.length !== 10) {
    openDialog("Contact number must be exactly 10 digits.");
    return;
  }

  try {
    const response = await fetch("http://localhost:8080/api/own-stories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        contactNo: formData.contact,
        story: formData.story
      })
    });

    if (!response.ok) {
      throw new Error("Failed to submit story");
    }

    const data = await response.json();

    console.log("Story saved:", data);

    openDialog("Your Story submitted successfully!");

    setFormData({
      name: "",
      email: "",
      contact: "",
      story: ""
    });

  } catch (error) {
    console.error("Error submitting story:", error);
    openDialog("Failed to submit your story. Please try again.");
  }
};

  const handleEdit = (story) => {
    setEditingStory(story);
  };

  const handleDelete = () => {
    setFormData({
      name: "",
      email: "",
      contact: "",
      story: ""
    });

    openDialog("All fields deleted successfully!");
  };

  return (
    <div className="story-form-container">

      <h1>Create Your Story</h1>
      <form onSubmit={handleSubmit}>

        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />

        <label>Contact Number</label>
        <input
          type="tel"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          placeholder="Enter 10 digit contact number"
          maxLength="10"
          required
        />

        <label>Write Your Story</label>
        <textarea
          name="story"
          value={formData.story}
          onChange={handleChange}
          placeholder="Write your story here..."
          rows="8"
          maxLength={800}
          required
        />

        <p className="char-count">
          Characters: {formData.story.length}/800
        </p>

        <Button
          type="submit"
          className="bounce-btn"
          background="linear-gradient(135deg, #ff007a, #ffce00)"
        >
          Submit Story
        </Button>
        <Button
          type="button"
          onClick={handleEdit}
          background="#8377d1"
        >
          Edit
        </Button>
        <Button
          type="button"
          onClick={handleDelete}
          background="#3e6fba"
        >
          Delete
        </Button>

      </form>

      {/* React dialog popup  */}

      <dialog ref={dialogRef} className="story-dialog">

        <h2>Message</h2>

        <p>{dialogMessage}</p>

        <Button
          type="button"
          onClick={closeDialog}
          background="#333"
        >
          OK
        </Button>
      </dialog>

    </div>
  );
};

export default CreateStory;