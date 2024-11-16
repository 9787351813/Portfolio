import React from 'react';
import './Home.css'; 
import profileImage from './image/oviya.jpg';

function Home() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1sS99DM9RkiIwNxWGQ07Nf3-Bx8YDeeX4/view?usp=drive_link'; // Replace with your Google Drive file ID
    link.target = '_blank'; // This opens the link in a new tab
    link.click();
  };

  return (
    <div className="home-container">
      <div className="leftContainer">
        <h2>I am a MERN Stack Developer</h2>
        <button onClick={handleDownload} className="button">
          Download Resume
        </button>
      </div>
      <div className="rightContainer">
        <img src={profileImage} alt="Profile" className="image" />
      </div>
    </div>
  );
}

export default Home;
