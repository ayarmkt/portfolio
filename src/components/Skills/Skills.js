import styles from './Skills.module.css';
import Card from '../../UI/Card';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import H2 from '../../UI/H2';

const skillsArr = [
  { name: 'html', icon: faHtml5 },
  { name: 'css', icon: faCss3Alt },
  { name: 'javascript', icon: faJsSquare },
  { name: 'react', icon: faReact },
];

const Skills = () => {
  const skillsList = skillsArr.map((skill) => {
    return (
      <div className={styles.skill} key={skill.name}>
        <FontAwesomeIcon
          className={`${styles.icon} ${styles[`${skill.name}`]}`}
          icon={skill.icon}
          size='5x'
        />
        <p>{skill.name.toUpperCase()}</p>
      </div>
    );
  });

  return (
    <Card className={styles.skills} id='skills'>
      <H2>Skills</H2>
      <div className={styles['skills-list-container']}>
        <div className={styles['skills-list']}>{skillsList}</div>
      </div>
    </Card>
  );
};

export default Skills;
