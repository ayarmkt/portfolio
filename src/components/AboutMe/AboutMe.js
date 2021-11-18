import classes from './AboutMe.module.css';
import React from 'react';
import ProfilePic from '../../assets/profile-pic.png';
import SectionTitle from '../../UI/SectionTitle/SectionTitle';
import { RiArrowDropRightFill } from 'react-icons/ri';

const skillsListLeft = [
  'JavaScript',
  'React',
  'Redux',
  'Jest',
  'React Testing Library',
];

const skillsListRight = ['HTML', 'CSS', 'Tailwind CSS', 'Sass (learning)'];

const AboutMe = () => {
  const skillsLeft = skillsListLeft.map((skill) => (
    <li>
      <RiArrowDropRightFill />
      {skill}
    </li>
  ));

  const skillsRight = skillsListRight.map((skill) => (
    <li>
      <RiArrowDropRightFill />
      {skill}
    </li>
  ));

  return (
    <div className={classes.aboutme} id='aboutme'>
      <div className={classes.content}>
        {/* <SectionTitle>About Me</SectionTitle> */}
        {/* <SectionTitle className={classes.title}>About Me</SectionTitle> */}
        {/* <div className={classes['content-text']}> */}
        <h3>Hi, I'm Aya!</h3>
        <div className={classes['profile-pic']}>
          <img src={ProfilePic} alt='Profile' />
        </div>
        {/* <div className={classes.description}> */}

        <div className={classes.text}>
          <p>
            I’m a front-end developer from Japan, currently in Paris, France.
            Besides programming, I love traveling and photography.
          </p>
          <p>
            As a front-end developer, I care about every detail to deliver a
            better user experience.{' '}
          </p>
          <p>
            Here are a few technologies I've been working with recently:
            <p className={classes.skills}>
              <ul className={classes['skills-left']}>{skillsLeft}</ul>
              <ul className={classes['skills-right']}>{skillsRight}</ul>
            </p>
          </p>
          {/* </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
