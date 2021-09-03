import classes from './Skills.module.css';
import Card from '../../UI/Card/Card';
//import ReactDOM from 'react-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faHtml5,
//   faCss3Alt,
//   faJsSquare,
//   faReact,
// } from '@fortawesome/free-brands-svg-icons';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiRedux,
  SiFirebase,
  SiFigma,
} from 'react-icons/si';
import H2 from '../../UI/H2/H2';

const skillsArr = [
  {
    name: 'html',
    icon() {
      return <SiHtml5 className={`${classes.icon} ${classes.html}`} />;
    },
  },
  {
    name: 'css',
    icon() {
      return <SiCss3 className={`${classes.icon} ${classes.css}`} />;
    },
  },
  {
    name: 'javascript',
    icon() {
      return (
        <SiJavascript className={`${classes.icon} ${classes.javascript}`} />
      );
    },
  },
  {
    name: 'react',
    icon() {
      return <SiReact className={`${classes.icon} ${classes.react}`} />;
    },
  },
  {
    name: 'redux',
    icon() {
      return <SiRedux className={`${classes.icon} ${classes.redux}`} />;
    },
  },
  {
    name: 'firebase',
    icon() {
      return <SiFirebase className={`${classes.icon} ${classes.firebase}`} />;
    },
  },
  {
    name: 'figma',
    icon() {
      return <SiFigma className={`${classes.icon} ${classes.figma}`} />;
    },
  },
];

const Skills = () => {
  const skillsList = skillsArr.map((skill) => {
    let icon = skill.icon();
    return (
      <div className={classes.skill} key={skill.name}>
        {/* <FontAwesomeIcon
          className={`${classes.icon} ${classes[`${skill.name}`]}`}
          icon={skill.icon}
          size='5x'
        /> */}

        {/* {!skill.icon.prefix && (
          <img src='https://img.icons8.com/material-rounded/80/000000/redux.png' />
        )} */}
        {icon}
        <p>{skill.name.toUpperCase()}</p>
      </div>
    );
  });

  return (
    <Card className={classes.skills} id='skills'>
      <H2>Skills</H2>
      <div className={classes['skills-list-container']}>
        <div className={classes['skills-list']}>{skillsList}</div>
      </div>
    </Card>
  );
};

export default Skills;
