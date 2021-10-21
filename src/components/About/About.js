import classes from './About.module.css';
import { useContext } from 'react';

import ProfilePic from '../../assets/profile-pic.png';
import Card from '../../UI/Card/Card';
import UIContext from '../../context/ui-context';
import PDF from '../../assets/CV_Aya Takamura.pdf';
import { FaLinkedin, FaTwitterSquare, FaGithub, FaBlog } from 'react-icons/fa';

const contactInfo = [
  {
    name: 'GitHub',
    link: 'https://github.com/ayarmkt',
    icon() {
      return <FaGithub className={`${classes.icon} ${classes.github}`} />;
    },
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/aya-t/',
    icon() {
      return <FaLinkedin className={`${classes.icon} ${classes.linkedin}`} />;
    },
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/ayarmkt_',
    icon() {
      return (
        <FaTwitterSquare className={`${classes.icon} ${classes.twitter}`} />
      );
    },
  },
  {
    name: 'Blog',
    link: 'https://ayatakamura.hashnode.dev/',
    icon() {
      return <FaBlog className={`${classes.icon} ${classes.blog}`} />;
    },
  },
];

const About = () => {
  const uiCtx = useContext(UIContext);

  const contact = contactInfo.map((info) => (
    <a
      className={classes.link}
      href={info.link}
      key={info.name}
      target='_blank'
    >
      {info.icon()}
    </a>
  ));

  return (
    <Card
      className={`${classes.about} ${uiCtx.navIsSticky ? classes.sticky : ''}`}
      id='about'
    >
      <h1 className={classes.title}>Hi, I'm Aya</h1>
      <div className={classes.text}>
        <p>I am a Front-end Developer from Tokyo, Japan.</p>
        <p>I care about user experience and building user-friendly products.</p>
        <p>
          With 4 years of experience in Brand Marketing, I can contribute from
          both business and technology perspectives.
        </p>
        <br />
        <a href={PDF} target='_blank'>
          View my resume here
        </a>
        <div className={classes['contact-list']}> {contact}</div>
      </div>
      <div className={classes['profile-pic']}>
        <img src={ProfilePic} alt='Profile' />
      </div>
    </Card>
  );
};

export default About;
