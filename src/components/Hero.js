import { useContext } from 'react';
import UIContext from '../context/ui-context';
import Contacts from './Contacts';

const Hero = () => {
  const uiCtx = useContext(UIContext);

  return (
    <div className='hero' id='hero'>
      <div className={`hero-content ${uiCtx.isDark ? 'dark' : null}`}>
        <h1>Aya Takamura</h1>
        <p>
          <span className='hero-colorText'>
            a Brand Marketer-turned-Frontend Developer
          </span>
          &nbsp;who cares about user experience when building products. I am
          passionate about understanding customers’ needs. I adopt my
          user-centric mindset to create easy-to-use applications.
        </p>
      </div>
      <Contacts />
    </div>
  );
};

export default Hero;
