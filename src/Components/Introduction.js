import React from "react";
import "../Styles/Introduction.css";
import Animoji from '../img/Animoji.png';

function Introduction() {
  return (
    <div className="introduction-container text-center secondary d-flex">
      <div className="introduction-body">
        <h1>Duarte Jorge</h1>
        <h3 className="mb-0">Hi! Welcome to my Portfolio</h3>
        <p>
        I'm a 20-year-old Software Engineering student.
         In this portfolio, you’ll find my projects, skills, and the path I’m taking 
         toward a career in tech. Thanks for stopping by!

        </p>
      </div>
      <div className="introduction-image-container">
        <img className="introduction-image" src={Animoji} alt="Pokemon"></img>
      </div>
    </div>
  );
}

export default Introduction;
