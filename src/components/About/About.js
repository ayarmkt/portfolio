import classes from './About.module.css';
import { useContext } from 'react';

import ProfilePic from '../../assets/profile-pic.png';
import Card from '../../UI/Card/Card';
import UIContext from '../../context/ui-context';
import PDF from '../../assets/AYA_TAKAMURA.pdf';

const About = () => {
  const uiCtx = useContext(UIContext);

  return (
    <Card
      className={`${classes.about} ${uiCtx.navIsSticky ? classes.sticky : ''}`}
      id='about'
    >
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
      </div>
      <div className={classes['profile-pic']}>
        <img src={ProfilePic} alt='Profile' />
      </div>
    </Card>
  );
};

export default About;
