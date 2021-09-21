import classes from './Projects.module.css';
import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useLayoutEffect } from 'react';
import Card from '../../UI/Card/Card';
import H2 from '../../UI/H2/H2';
import project1 from '../../assets/bug-tracker.png';
import project2 from '../../assets/weather-app.png';
import project3 from '../../assets/calculator.png';

const projectArr = [
  {
    title: 'BUG TRACKER',
    // techName: ['React', 'Redux', 'Firebase'],
    techName: 'React (incl. React Context) | Redux | CSS | Firebase',
    src: project1,
    alt: 'bug tracker app',
    description:
      'A CRUD Bug Tracker App that can be used to manage and keep track of bugs in the project you are working on. It has authentication features (login, sign up, log out) and bug data management features (read bugs data, add new bugs, edit bugs, delete bugs).',
    livedemo: 'https://bug-tracker-app-75bd0.firebaseapp.com',
    github: 'https://github.com/ayarmkt/bug-tracker',
  },
  {
    title: 'WEATHER APP',
    techName: 'React (incl. React Context) | CSS | OpenWeatherMap API',
    src: project2,
    alt: 'weather app',
    description:
      'A weather app with a minimalist design that retrieves weather data from the OpenWeatherMap API and displays the weather around the world.',
    livedemo: 'https://ayatakamura-react-weather-app.netlify.app/',
    github: 'https://github.com/ayarmkt/react-weather-app',
  },
  {
    title: 'CALCULATOR',
    techName: 'HTML | CSS | JavaScript',
    src: project3,
    alt: 'calculator',
    description:
      'A calculator made with JavaScript. The calculator displays both the calculation process and the result. It has a plus/minus button and a percentage button.',
    livedemo: 'https://ayarmkt.github.io/JS-calculator/',
    github: 'https://github.com/ayarmkt/JS-calculator',
  },
];

const Projects = () => {
  const ref = useRef();
  //const ref = React.createRef();
  const [rotate, setRotate] = useState(false);

  const onScroll = () => {
    //const topPos = ref.current.getBoundingClientRect().top;
    const topPos = ref.current.offsetTop;
    const bottomPos = ref.current.offsetTop + ref.current.offsetHeight;

    if (
      topPos + 250 < window.scrollY + window.innerHeight &&
      bottomPos > window.scrollY
    ) {
      setRotate(true);
    } else {
      //console.log('not animate bottom');
      setRotate(false);
    }
  };

  useLayoutEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const projectList = projectArr.map((project) => {
    // const tech = project.techName.map((techName) => (
    //   <p className={classes.techItem} key={techName}>
    //     {techName}
    //   </p>
    // ));

    return (
      <div className={classes.project} key={project.title}>
        <div className={classes['project-img']}>
          <a href={project.livedemo} target='_blank'>
            <img src={project.src} alt={project.alt} />
          </a>
        </div>
        <div className={classes['project-description']}>
          <h3 className={classes.title}>{project.title}</h3>
          <p className={classes.tech}>{project.techName}</p>
          <div className={classes.link}>
            <a className={classes.live} href={project.livedemo} target='_blank'>
              Live Demo
            </a>
            <a className={classes.github} href={project.github} target='_blank'>
              GitHub
            </a>
          </div>
          <p className={classes.description}>{project.description}</p>
        </div>
      </div>
    );
  });

  return (
    <Card className={classes.projects} id='projects'>
      <H2>Projects</H2>
      <div
        className={`${classes['projects-list']} ${
          rotate ? classes.rotate : ''
        }`}
        ref={ref}
      >
        {projectList}
      </div>
    </Card>
  );
};

export default Projects;
