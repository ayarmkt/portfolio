import styles from './Projects.module.css';
import Card from '../../UI/Card';
import H2 from '../../UI/H2';

const projectArr = [
  {
    title: 'PROJECT TITLE1',
    description: 'DESCRIPTION',

    src: 'https://blog.tubikstudio.com/wp-content/uploads/2021/04/1_tubik_Uplyfe_starting-300x180.jpg',
    alt: 'dummy',
  },
  {
    title: 'PROJECT TITLE2',
    description: 'DESCRIPTION',

    src: 'https://blog.tubikstudio.com/wp-content/uploads/2021/04/1_tubik_Uplyfe_starting-300x180.jpg',
    alt: 'dummy',
  },
  {
    title: 'PROJECT TITLE3',
    description: 'DESCRIPTION',

    src: 'https://blog.tubikstudio.com/wp-content/uploads/2021/04/1_tubik_Uplyfe_starting-300x180.jpg',
    alt: 'dummy',
  },
];

const Projects = () => {
  const projectList = projectArr.map((project) => {
    return (
      <div className={styles.project} key={project.title}>
        <a href='' className={styles['project-img']}>
          <img src={project.src} alt={project.alt} />
        </a>
        <div className={styles['project-text']}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      </div>
    );
  });

  return (
    <Card className={styles.projects} id='projects'>
      <H2>Projects</H2>
      <div className={styles['projects-list']}>{projectList}</div>
    </Card>
  );
};

export default Projects;
