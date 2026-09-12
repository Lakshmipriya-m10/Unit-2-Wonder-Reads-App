import React from 'react';
import '../design/home.css';

const Home = () => {
  return (
    <div className="home-page">
      <video autoPlay muted loop className="bg-video">
        <source 
          src="https://res.cloudinary.com/o7vbtffn/video/upload/v1783615682/waterfalls_xh0ctz.mp4" 
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <h1>Welcome to Wonder Reads-App</h1>
      <p>
        <strong>Explore Magical Stories And Books!</strong>
      </p>
    </div>
  );
};

export default Home;
