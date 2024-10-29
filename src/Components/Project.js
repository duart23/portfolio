import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Project = ({ title, description, image, altText, link }) => {
  return (
    <div className="project">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="1">
        <a href={link} target="_blank" rel="noopener noreferrer">
              <img src={image} alt={altText} />
            </a>
          <Accordion.Header>{title} </Accordion.Header>
          <Accordion.Body>
            <p>{description}</p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Project;
