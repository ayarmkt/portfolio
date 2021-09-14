import classes from './About.module.css';
import ProfilePic from '../../assets/profile-pic.png';
import Card from '../../UI/Card/Card';
import { useContext } from 'react';
import UIContext from '../../context/ui-context';

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
        <p>
          I love to write clean code and I'm passionate about making
          user-friendly product.
        </p>
        <p>
          Previously as a Marketer for a long-selling FMCG brand, I care so much
          about consumer values and user experience.
        </p>
        <br />
        <p>Download My Resume!</p>
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
