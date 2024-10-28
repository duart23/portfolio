import React from 'react';
import Accordion from 'react-bootstrap/Accordion';


const Project = ({ title, description, image, altText }) => {
  return (
    <div className="project">

      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="1">
        <Accordion.Header>{title} </Accordion.Header>
        <Accordion.Body>
        <p>{description}</p>
        <img src={image} alt={altText} />
        </Accordion.Body>
        </Accordion.Item>
    </Accordion>
    </div>
  );
};

export default Project;

