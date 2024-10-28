// Projects.js
import React from 'react';
import Project from './Project';
import '../Styles/Projects.css'

const projectData = [
  {
    title: 'Project 1',
    description: 'Description for project 1',
    image: '/dog.gif', 
    altText: 'Image of project 1',
  },
  {
    title: 'Project 2',
    description: 'Description for project 2',
    image: '/dog2.jpg',
    altText: 'Image of project 2',
  },
  {
    title: 'Project 2',
    description: 'Description for project 2',
    image: '/dog2.jpg',
    altText: 'Image of project 2',
  },
  {
    title: 'Project 2',
    description: 'Description for project 2',
    image: '/dog2.jpg',
    altText: 'Image of project 2',
  },
  {
    title: 'Project 2',
    description: 'Description for project 2',
    image: '/dog2.jpg',
    altText: 'Image of project 2',
  },
  {
    title: 'Project 2',
    description: 'Description for project 2',
    image: '/dog2.jpg',
    altText: 'Image of project 2',
  }
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="projects">
        {projectData.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            altText={project.altText}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;

 