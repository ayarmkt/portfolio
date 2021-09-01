import classes from './Skills.module.css';
import Card from '../../UI/Card/Card';
//import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
//import { SiRedux } from 'react-icons/si';
import H2 from '../../UI/H2/H2';

const skillsArr = [
  { name: 'html', icon: faHtml5 },
  { name: 'css', icon: faCss3Alt },
  { name: 'javascript', icon: faJsSquare },
  { name: 'react', icon: faReact },
  //{ name: 'redux' },
];

const Skills = () => {
  const skillsList = skillsArr.map((skill) => {
    console.log(skill.icon);
    return (
      <div className={classes.skill} key={skill.name}>
        <FontAwesomeIcon
          className={`${classes.icon} ${classes[`${skill.name}`]}`}
          icon={skill.icon}
          size='5x'
        />

        {/* {!skill.icon.prefix && (
          <img src='https://img.icons8.com/material-rounded/80/000000/redux.png' />
        )} */}
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
