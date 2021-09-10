import classes from './Skills.module.css';
import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useLayoutEffect } from 'react';
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
  //const ref = React.createRef();
  const ref = useRef();
  const [rotate, setRotate] = useState(false);
  //const [fadein, setFadein] = useState(false);

  //const topPos = ref.current.getBoundingClientRect().top;
  //console.log(ref.current);

  //const titleRef = useRef();
  //console.log(titleRef.current);

  //let rotate;

  const onScroll = () => {
    //const topPos = ref.current.getBoundingClientRect().top;
    const topPos = ref.current.offsetTop;
    const bottomPos = ref.current.offsetTop + ref.current.offsetHeight;
    //console.log(topPos);

    if (
      topPos < window.scrollY + window.innerHeight &&
      bottomPos > window.scrollY
    ) {
      setRotate(true);
      console.log(window.scrollY);
      //setFadein(true);
    } else {
      //console.log('not animate bottom');
      setRotate(false);
      //setFadein(false);
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

  // const scrollToTop = () => {
  //   scroll.scrollToTop({ duration: 100 });
  // };

  return (
    <Card
      className={classes.skills}
      id='skills'
      //ref={ref}
    >
      <H2>Skills</H2>
      {/* classes['skills-list-container'] */}
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
