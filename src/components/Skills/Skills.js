import classes from './Skills.module.css';
import React, { useState, useRef, useLayoutEffect } from 'react';

import Card from '../../UI/Card/Card';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiRedux,
  SiFirebase,
  SiFigma,
} from 'react-icons/si';
import SectionTitle from '../../UI/SectionTitle/SectionTitle';

const skillsArr = [
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
    name: 'javascript',
    icon() {
      return (
        <SiJavascript className={`${classes.icon} ${classes.javascript}`} />
      );
    },
  },
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
  const ref = useRef();
  const [rotate, setRotate] = useState(false);

  const onScroll = () => {
    const topPos = ref.current.offsetTop;
    const bottomPos = ref.current.offsetTop + ref.current.offsetHeight;

    if (
      topPos + 250 < window.scrollY + window.innerHeight &&
      bottomPos > window.scrollY
    ) {
      setRotate(true);
    } else {
      setRotate(false);
    }
  };

  useLayoutEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const skillsList = skillsArr.map((skill) => {
    let icon = skill.icon();
    return (
      <div className={classes.skill} key={skill.name}>
        {icon}
        <p>{skill.name.toUpperCase()}</p>
      </div>
    );
  });

  return (
    <Card className={classes.skills} id='skills'>
      <SectionTitle>Skills</SectionTitle>
      <div
        className={`${classes['skills-list-container']}
         ${rotate ? classes.rotate : ''}`}
        ref={ref}
      >
        <div className={classes['skills-list']}>{skillsList}</div>
      </div>
    </Card>
  );
};

export default Skills;
