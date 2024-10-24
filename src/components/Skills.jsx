import React from 'react';
import './Skills.css';

const skills = [
  { name: 'HTML', image: 'https://cdn-icons-png.flaticon.com/512/1532/1532556.png' },
  { name: 'CSS', image: 'https://cdn.iconscout.com/icon/free/png-256/css-118-569410.png' },
  { name: 'JavaScript', image: 'https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png' },
  { name: 'React', image: 'https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png' },
  { name: 'ExpressJS', image: 'https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png' },
  { name: 'MongoDB', image: 'https://www.pngall.com/wp-content/uploads/13/Mongodb-PNG-Image-HD.png' },
  { name: 'NodeJS', image: 'https://pluspng.com/img-png/nodejs-logo-png-nice-images-collection-node-js-desktop-wallpapers-370.png' },
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h2 className="skills-heading">SKILLS</h2>
      {skills.map((skill, index) => (
        <div className="skill-box" key={index}>
          <img src={skill.image} alt={skill.name} className="skill-image" />
          <p>{skill.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Skills;
