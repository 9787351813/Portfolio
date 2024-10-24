import React from "react";
import "./About.css";
import profileImage from "./image/oviya.jpg";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Me</h1>
      <div className="about-content">
        <img src={profileImage} alt="Profile" className="profile-pic" />
        <div className="about-text">
          <h2>Hi, I'm OVIYA</h2>
          <p>
            I am a passionate and dedicated MERN Full Stack Developer with a
            strong foundation in both front-end and back-end technologies. My
            expertise lies in building dynamic, responsive, and user-friendly
            web applications using MongoDB, Express.js, React, and Node.js. I
            thrive in collaborative environments and enjoy the challenge of
            solving complex problems. Whether it’s developing sleek user
            interfaces or architecting scalable server-side solutions, I am
            committed to delivering high-quality code and exceptional user
            experiences. My goal is to continue growing as a developer, staying
            at the forefront of web technology, and contributing to innovative
            projects that make a difference.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
