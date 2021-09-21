import classes from './About.module.css';
import { Link } from 'react-router-dom';
import ProfilePic from '../../assets/profile-pic.png';
import Card from '../../UI/Card/Card';
import { useContext } from 'react';
import UIContext from '../../context/ui-context';
//import Resume from '../Resume/Resume';
import PDF from '../../assets/AYA_TAKAMURA.pdf';

const About = () => {
  const uiCtx = useContext(UIContext);

  return (
    <Card
      className={`${classes.about} ${uiCtx.navIsSticky ? classes.sticky : ''}`}
      id='about'
    >
      {/* <div className={classes['text-content']}> */}
      <h1 className={classes.title}>Hi, I'm Aya</h1>
      <div className={classes.text}>
        <p>I am a front-end developer from Tokyo, Japan.</p>
        <p>I care about user experience and building user-friendly products.</p>
        <p>
          With 4 years of experience in Brand Marketing, I can contribute from
          both business and technology perspectives.
        </p>
        <br />
        <a href={PDF} target='_blank'>
          View my resume here
        </a>
        {/* <Link to='/resume' target='_blank'>
          <Resume />
        </Link> */}
      </div>
      <div className={classes['profile-pic']}>
        <img src={ProfilePic} alt='Profile' />
      </div>
      {/* </div> */}
      {/* <div className={classes['profile-pic']}>
        <img src={ProfilePic} alt='Profile' />
      </div> */}
    </Card>
  );
};

export default About;
