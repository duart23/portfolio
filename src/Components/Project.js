import React from "react";
import Button from "react-bootstrap/Button";
import "../Styles/Project.css";

const Project = ({ title, description, image, altText, link, repo }) => (
  <div className="project d-flex justify-content-center">
    <div className="project-card primary d-flex">
      <div className="card-image d-flex justify-content-center">
        <img className="image" alt={altText} src={image} />
      </div>
      <div className="card-body d-flex flex-column align-items-start align-items-center">
        <div className="card-text">
        <h3 className="fw-bold">{title}</h3>
        <p>{description}</p>
        </div>
        <div className="card-buttons d-flex mt-auto">
          <Button className="button secondary" href={repo} target="_blank">
            GitHub Repo
          </Button>
          <Button className="button secondary" href={link} target="_blank">
            Visit Website
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export default Project;
