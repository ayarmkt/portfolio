import classes from './Projects.module.css';
import React, { useRef, useState, useLayoutEffect } from 'react';

import Card from '../../UI/Card/Card';
import SectionTitle from '../../UI/SectionTitle/SectionTitle';
import project1 from '../../assets/bug-tracker.png';
import project2 from '../../assets/weather-app.png';
import project3 from '../../assets/calculator.png';

const projectArr = [
  {
    title: 'BUG TRACKER',
    subtitle: '<Personal Project>',
    techName: 'React (incl. React Context) | Redux | CSS | Firebase',
    src: project1,
    alt: 'bug tracker app',
    livedemo: 'https://bug-tracker-app-75bd0.firebaseapp.com',
    github: 'https://github.com/ayarmkt/bug-tracker',
  },
  {
    title: 'WEATHER APP',
    subtitle: '<Personal Project>',
    techName: 'React (incl. React Context) | CSS | OpenWeatherMap',
    src: project2,
    alt: 'weather app',
    livedemo: 'https://ayatakamura-react-weather-app.netlify.app/',
    github: 'https://github.com/ayarmkt/react-weather-app',
  },
  {
    title: 'CALCULATOR',
    subtitle: '<Personal Project>',
    techName: 'HTML | CSS | JavaScript',
    src: project3,
    alt: 'calculator',
    livedemo: 'https://ayarmkt.github.io/JS-calculator/',
    github: 'https://github.com/ayarmkt/JS-calculator',
  },
];

const Projects = () => {
  const projectList = projectArr.map((project) => {
    return (
      <div className={classes.project} key={project.title}>
        <div className={classes['project-img']}>
          <a href={project.livedemo} target='_blank' rel='noopener noreferrer'>
            <img src={project.src} alt={project.alt} />
          </a>
        </div>
        <div className={classes['project-description']}>
          <h3 className={classes['project-title']}>{project.title}</h3>
          <p className={classes.subtitle}>{project.subtitle}</p>
          <p className={classes.tech}>{project.techName}</p>
          <div className={classes.link}>
            <a
              className={classes.live}
              href={project.livedemo}
              target='_blank'
              rel='noopener noreferrer'
            >
              Live Demo
            </a>
            <a
              className={classes.github}
              href={project.github}
              target='_blank'
              rel='noopener noreferrer'
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className={classes.projects} id='projects'>
      <SectionTitle className={classes.title}>Projects</SectionTitle>
      <div className={classes['projects-list']}>{projectList}</div>
    </div>
  );
};

export default Projects;
