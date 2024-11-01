import React from "react";
import Button from "react-bootstrap/Button";
import "../Styles/Project.css";

const Project = ({ title, description, image, altText, link, repo }) => (
  <div className="project">
    <div className="project-card d-flex">
      <div className="card-image">
        <img className="image" alt={altText} src={image} />
      </div>
      <div className="card-body d-flex flex-column align-items-start align-items-center">
        <div className="card-text">
        <h3>{title}</h3>
        <p>{description}</p>
        </div>
        <div className="card-buttons d-flex mt-auto">
          <Button className="button" href={repo} target="_blank">
            GitHub Repo
          </Button>
          <Button className="button" href={link} target="_blank">
            Visit Website
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export default Project;
