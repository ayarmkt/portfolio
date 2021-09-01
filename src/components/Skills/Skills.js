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
import H2 from '../../UI/H2/H2';

const skillsArr = [
  { name: 'html', icon: faHtml5 },
  { name: 'css', icon: faCss3Alt },
  { name: 'javascript', icon: faJsSquare },
  { name: 'react', icon: faReact },
];

const Skills = () => {
  const skillsList = skillsArr.map((skill) => {
    return (
      <div className={classes.skill} key={skill.name}>
        <FontAwesomeIcon
          className={`${classes.icon} ${classes[`${skill.name}`]}`}
          icon={skill.icon}
          size='5x'
        />
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
