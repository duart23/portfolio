// Projects.js
import React from 'react';
import Project from './Project';
import '../Styles/Projects.css'
import Image from '../img/dog.gif';
import Pokemon from '../img/Pokemon.png';

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
    title: 'Tic-Tac-Toe',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue sem non tincidunt auctor. Curabitur convallis erat in tellus aliquet sodales. Nulla vitae ex at turpis hendrerit lobortis. Aenean sit amet elementum enim. Ut lorem dolor, finibus ac luctus id, efficitur id purus. Curabitur at lorem vulputate eros feugiat porta. Sed rhoncus magna lacus, a tincidunt nibh mollis quis. ',
    image: Image, 
    altText: 'Image of project 1',
    repo : 'https://github.com/duart23/WEB2.git'
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
            repo={project.repo}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;

 