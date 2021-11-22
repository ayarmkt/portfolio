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
} from 'react-icons/si';
import { useContext } from 'react';
import UIContext from '../context/ui-context';

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
      <div className={`aboutme-content ${uiCtx.isDark ? 'dark' : null}`}>
        <div className='aboutme-summary'>
          <div className='aboutme-profilePic'>
            <img src={ProfilePic} alt='Profile' />
          </div>
          <div className='aboutme-summary-text'>
            <SectionTitle className='aboutme-title'>Hi, I'm Aya!</SectionTitle>
            <p>
              I’m a front-end developer from Japan, currently in Paris, France.
              Besides programming, I love traveling and photography. As a
              front-end developer, I care about every detail to deliver a better
              user experience.
            </p>
            <p>
              As a a Brand Marketer-turned-Frontend Developer, my goal is to
              bridge the gap between the users and businesses to empower core
              value. I believe that a great developer solves a problem not only
              from a technical side but always with the end user in mind.
            </p>
          </div>
        </div>
        <div className='aboutme-text-additional'>
          <div className='aboutme-text-personal'>
            <h3>More About Me</h3>
            <p>
              Have Lived in: Japan, USA, Australia, France
              <br />
              Hobbies: Traveling & Photography
              <br />
              Favorite TV Show: I'm a huge FRIENDS fan
            </p>
          </div>
          <div className='aboutme-text-skills'>
            <h3>Skills</h3>
            <div className='aboutme-skills-list'>{skillsList}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
