import React from "react";
import "../Styles/Introduction.css";
import Animoji from '../img/Animoji.png';

function Introduction() {
  return (
    <div className="introduction-container secondary d-flex">
      <div className="introduction-body">
        <h1>Duarte Jorge</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          accumsan vitae diam in varius. Phasellus aliquam dolor sed leo
          vestibulum sagittis at at felis. Donec a luctus eros. Pellentesque sed
          risus et nisl cursus ultricies. Aenean malesuada quis mi quis
          interdum. Etiam elementum id risus at efficitur. Ut condimentum at
          lorem tincidunt varius. Etiam sed lobortis massa.
        </p>
      </div>
      <div className="introduction-image-container">
        <img className="introduction-image" src={Animoji} alt="Pokemon"></img>
      </div>
    </div>
  );
}

export default Introduction;
