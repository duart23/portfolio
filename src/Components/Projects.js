// Projects.js
import React from 'react';
import Project from './Project';
import '../Styles/Projects.css'
import Image from '../img/dog.gif';
import Pokedex from '../img/Pokedex.png';

const projectData = [
  {
    title: 'Pokedex',
    description: 'Very simple Pokedex made using React. This was an assignment for one of my classes. It gets data from "https://pokeapi.co/"',
    image: Pokedex, 
    link: 'https://duart23.github.io/Pokedex/',
    altText: 'Pokedex',
  },
  {
    title: 'Tic-Tac-Toe',
    description: 'Description for project 1',
    image: Image, 
    altText: 'Image of project 1',
  },
  {
    title: 'Project 1',
    description: 'Description for project 1',
    image: Image, 
    altText: 'Image of project 1',
  },
  {
    title: 'Project 1',
    description: 'Description for project 1',
    image: Image, 
    altText: 'Image of project 1',
  },
  {
    title: 'Project 1',
    description: 'Description for project 1',
    image: Image, 
    altText: 'Image of project 1',
  },
  {
    title: 'Project 1',
    description: 'Description for project 1',
    image: Image, 
    altText: 'Image of project 1',
  },
  
];

const Projects = () => {
  return (
    <section className='projects-container'>
      <h2>My Projects</h2>
      <div className="projects">
        {projectData.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link = {project.link}
            altText={project.altText}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;

 