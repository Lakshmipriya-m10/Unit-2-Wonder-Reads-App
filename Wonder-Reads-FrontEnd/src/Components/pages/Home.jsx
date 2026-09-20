import React, { useRef, useState } from "react";
import "../design/home.css";
import { useNavigate } from "react-router-dom";
import Button from "../pages/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";


const Home = () => {

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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

       const data = response.ok ? await response.json() : { message: "Invalid username or password." };

      console.log(data);

      if (response.ok) {

        localStorage.setItem("username", data.username);
        localStorage.setItem("studentId", data.studentId);
        localStorage.setItem("role", data.role);

        sessionStorage.setItem("isLoggedIn", "true");
        navigate("/About");
      } else {
        setDialogMessage(data.message);
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
            <div className="password-container">
              <label>Password</label>

              <div className="password-field">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  autoComplete="password"
                  required
                />
                <span
                  className="password-eye"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <FontAwesomeIcon
                    icon={showPassword ? faEyeSlash : faEye}
                  />
                </span>
              </div>
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
