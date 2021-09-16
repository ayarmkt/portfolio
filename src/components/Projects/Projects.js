import classes from './Projects.module.css';
import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useLayoutEffect } from 'react';
import Card from '../../UI/Card/Card';
import H2 from '../../UI/H2/H2';
import project2 from '../../assets/weather-app.png';
import project3 from '../../assets/calculator.png';

const projectArr = [
  {
    title: 'BUG TRACKER',
    // techName: ['React', 'Redux', 'Firebase'],
    techName: 'React (React Context) | Redux | Firebase',
    src: 'https://blog.tubikstudio.com/wp-content/uploads/2021/04/1_tubik_Uplyfe_starting-300x180.jpg',
    alt: 'bug tracker app',
    description:
      'A CRUD bug tracker app. The login is managed with React Context, and the app data is managed with Redux. Firebase is used for data storage.',
    livedemo: '',
    github: '',
  },
  {
    title: 'WEATHER APP',
    techName: 'React (React Context) | OpenWeatherMap API',
    src: project2,
    alt: 'weather app',
    description:
      'A weather app with a minimalist design that shows the current weather around the world. The background and icons change depending on the weather (covers 15 types of weather conditions).',
    livedemo: 'https://ayatakamura-react-weather-app.netlify.app/',
    github: 'https://github.com/ayarmkt/react-weather-app',
  },
  {
    title: 'CALCULATOR',
    techName: 'HTML | CSS | JavaScript',
    src: project3,
    alt: 'calculator',
    description:
      'A calculator made with JavaScript. It shows not only the result but also the process of calculation. It also supports +/- and % calculation.',
    livedemo: '',
    github: '',
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
