// Projects.js
import React from 'react';
import Project from './Project';
import '../Styles/Projects.css'
import Pokemon from '../img/Pokemon.png';
import Animoji from '../img/Animoji.png';

const projectData = [
  {
    title: 'Pokedex',
    description: 'Very simple Pokedex made using React. This was an assignment for one of my classes. It gets data from "https://pokeapi.co/"',
    image: Pokemon, 
    link: 'https://duart23.github.io/Pokedex/',
    altText: 'Pokedex',
    repo : 'https://github.com/duart23/Pokedex.git'
  },
  {
    title: 'Portfolio',
    description: 'My personal portfolio that you are currently looking at! :)',
    image: Animoji,
    link: '/',
    altText: 'Animoji',
    repo : 'https://github.com/duart23/portfolio'
  },
];

const Projects = () => {
  return (
    <div id='projects' className='projects-container'>
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
            repo={project.repo}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

 