// Projects.js
import React from 'react';
import Project from './Project';
import '../Styles/Projects.css'
import Pokemon from '../img/Pokemon.png';
import Animoji from '../img/Animoji.png';
import GreenHouse from '../img/GreenHouse.png';
import PCPlanet from '../img/PCPlanet.png';

const projectData = [
  {
    title: 'Portfolio',
    description: 'My personal portfolio that you are currently looking at! :)',
    image: Animoji,
    link: '',
    altText: 'Animoji',
    repo : 'https://github.com/duart23/portfolio'
  },
  {
    title: 'Pokedex',
    description: 'Very simple Pokedex made using React. This was an assignment for one of my classes. It gets data from "https://pokeapi.co/"',
    image: Pokemon, 
    link: 'https://duart23.github.io/Pokedex/',
    altText: 'Pokedex',
    repo : 'https://github.com/duart23/Pokedex.git'
  },
  {
    title: 'GreenHouse Manager',
    description : 'GreenHouse Manager WebApp coded in C#. This repo is only the backend which is the part I was responsible for in the team.',
    image : GreenHouse,
    link: '',
    altText: 'GreenHouse',
    repo : 'https://github.com/duart23/BackEnd.git'
  },
  {
    title: 'PC Planet - FrontEnd',
    description : 'Computer and Technology Online Shop. This repository contains the frontend of this 3-tier architecture project and it was made using C#, .NET and Blazor. ',
    image : PCPlanet,
    link: '',
    altText: 'PC PLANET',
    repo : 'https://github.com/Sep3NRD/Sep3_WebApi_Blazor.git'
  },
  {
    title: 'PC Planet - BackEnd',
    description : 'Computer and Technology Online Shop. This repository contains the backend of this 3-tier architecture project and it was made using Java and PostgreSQL.',
    image : PCPlanet,
    link: '',
    altText: 'PC PLANET',
    repo : 'https://github.com/Sep3NRD/server-database.git'
  },


];

const Projects = () => {
  return (
    <div id='projects' className='projects-container py-4'>
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

 