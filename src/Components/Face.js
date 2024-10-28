import React from 'react';
import '../Styles/Face.css'; 

function Face() {
  return (
    <div className="face-container">
      <div className="hero-image">
        <h1 className="name">Duarte Jorge</h1>
        <p className="tagline">Aspiring Software Developer</p>
        <a href="#projects" className="cta-button">View My Projects</a>
      </div>
    </div>
  );
}

export default Face;
