import ProfilePic from '../assets/profile-pic.png';
import SectionTitle from '../UIcomponents/SectionTitle';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiRedux,
  SiFirebase,
  SiFigma,
  SiTailwindcss,
  SiNpm,
  SiJest,
} from 'react-icons/si';
import { FaSass } from 'react-icons/fa';
import { useContext } from 'react';
import UIContext from '../context/ui-context';
import { useRef, useState, useLayoutEffect } from 'react';

const skillsArr = [
  {
    name: 'react',
    icon() {
      return <SiReact className={`skillsIcon react`} />;
    },
  },
  {
    name: 'redux',
    icon() {
      return <SiRedux className={`skillsIcon redux`} />;
    },
  },
  {
    name: 'javascript',
    icon() {
      return <SiJavascript className={`skillsIcon javascript`} />;
    },
  },
  {
    name: 'html',
    icon() {
      return <SiHtml5 className={`skillsIcon html`} />;
    },
  },
  {
    name: 'css',
    icon() {
      return <SiCss3 className={`skillsIcon css`} />;
    },
  },
  {
    name: 'tailwind css',
    icon() {
      return <SiTailwindcss className={`skillsIcon tailwindcss`} />;
    },
  },
  {
    name: 'sass',
    icon() {
      return <FaSass className={`skillsIcon sass`} />;
    },
  },
  {
    name: 'jest',
    icon() {
      return <SiJest className={`skillsIcon jest`} />;
    },
  },
  {
    name: 'firebase',
    icon() {
      return <SiFirebase className={`skillsIcon firebase`} />;
    },
  },
  {
    name: 'figma',
    icon() {
      return <SiFigma className={`skillsIcon figma`} />;
    },
  },
  {
    name: 'npm',
    icon() {
      return <SiNpm className={`skillsIcon npm`} />;
    },
  },
];

const AboutMe = () => {
  const uiCtx = useContext(UIContext);
  const ref = useRef();
  const [fadeIn, setFadeIn] = useState(false);

  const onScroll = () => {
    const topPos = ref.current.offsetTop;
    const bottomPos = ref.current.offsetTop + ref.current.offsetHeight;

    if (
      topPos + 150 < window.scrollY + window.innerHeight &&
      bottomPos > window.scrollY
    ) {
      setFadeIn(true);
    } else {
      setFadeIn(false);
    }
  };

  useLayoutEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const skillsList = skillsArr.map((skill) => {
    let icon = skill.icon();
    return (
      <div className='skill' key={skill.name}>
        {icon}
      </div>
    );
  });

  return (
    <div className='aboutme' id='aboutme'>
      <div
        className={`aboutme-content ${uiCtx.isDark ? 'dark' : null}`}
        ref={ref}
      >
        <div className={`aboutme-summary ${fadeIn ? 'fadeIn' : null}`}>
          <div className='aboutme-profilePic'>
            <img src={ProfilePic} alt='Profile' />
          </div>
          <div className='aboutme-summary-text'>
            <SectionTitle className='aboutme-title'>Hi, I'm Aya!</SectionTitle>
            <p>
              I am a Front-End Developer from Tokyo, Japan, now living in Paris,
              France. Previously a Brand Marketer in a top FMCG company for 4
              years.
            </p>
            <p>
              As a Brand Marketer-turned-Front-End Developer, my goal is to
              provide solutions that create a better user experience. By
              combining my marketing expertise with my technical skills, I can
              push your business forward.
            </p>
          </div>
        </div>
        <div className={`aboutme-text-additional ${fadeIn ? 'fadeIn' : null}`}>
          <div className='aboutme-text-personal'>
            <h3>More About Me</h3>
            <p>
              ■Countries I've Lived in: Japan, USA, Australia, France
              <br />
              ■Hobbies: Traveling & Photography
              <br />
              ■Favorite TV Show: FRIENDS
            </p>
          </div>
          <div className='aboutme-text-skills'>
            <h3>Tech Skills</h3>
            <div className='aboutme-skills-list'>{skillsList}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
