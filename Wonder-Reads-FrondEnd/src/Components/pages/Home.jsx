import React, { useRef, useState } from "react";
import "../design/home.css";
import { useNavigate } from "react-router-dom";
import Button from "../pages/Button";

const Home = () => {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dialogRef = useRef(null);
  const [dialogMessage, setDialogMessage] = useState("");

 const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:8080/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    const message = await response.text();

    if (response.ok) {
        sessionStorage.setItem("isLoggedIn", "true");
      navigate("/About");
    } else {
      setDialogMessage(message);
      dialogRef.current.showModal();
    }

  } catch (error) {
    console.error("Login error:", error);

    setDialogMessage("Unable to connect to the server.");
    dialogRef.current.showModal();
  }
};

  return (
    <div className="home-page">

      <video autoPlay muted loop className="bg-video">
        <source
          src="https://res.cloudinary.com/o7vbtffn/video/upload/v1783615682/waterfalls_xh0ctz.mp4"
          type="video/mp4"
        />

        Your browser does not support the video tag.
      </video>

      <h1>Welcome to Wonder Reads</h1>

       <div className="login-container">

        <div className="login-box">

          <h2>Login</h2>

          <form onSubmit={handleLogin}>

            <div>
              <label>Username</label>

              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                autoComplete="username"
                required
              />
            </div>

            <div>
              <label>Password</label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                autoComplete="password"
                required
              />
            </div>

            <Button type="submit">
              Login
            </Button>

          </form>

      <p>
        <strong>Explore Magical Stories And Books!</strong>
      </p>

          {/* LOGIN ERROR DIALOG */}
          <dialog
            ref={dialogRef}
            className="story-dialog"
          >
            <h2>Login Failed</h2>

            <p>{dialogMessage}</p>

            <Button
              type="button"
              onClick={() => dialogRef.current.close()}
            >
              OK
            </Button>
          </dialog>

        </div>
      </div>

    </div>
  );
};

export default Home;