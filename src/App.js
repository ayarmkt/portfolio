import './App.css';
import React from 'react';
import { useState, useEffect, useLayoutEffect, useContext } from 'react';
import { animateScroll as scroll } from 'react-scroll';

import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import HamburgerMenu from './components/Navbar/HamburgerMenu';
import useWindowDimensions from './hooks/useWindowDimensions';
import UIContext from './context/ui-context';
import { AiOutlineToTop } from 'react-icons/ai';

function App() {
  const uiCtx = useContext(UIContext);
  const [showIcon, setShowIcon] = useState(false);
  const { width: vw } = useWindowDimensions();

  useEffect(() => {
    if (vw <= 1023) {
      uiCtx.setMobile();
      console.log(vw);
    } else {
      uiCtx.setNotMobile();
      console.log(vw);
    }
  }, [vw]);

  const onScroll = () => {
    if (80 < window.scrollY) {
      setShowIcon(true);
    } else {
      setShowIcon(false);
    }
  };

  useLayoutEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 100 });
  };

  return (
    <React.Fragment>
      <header>
        {!uiCtx.mobile && <Navbar />}
        {uiCtx.mobile && <HamburgerMenu />}
      </header>
      <main>
        <About />
        <Skills />
        <Projects />
        <Contact />
        <AiOutlineToTop
          className={`to-top-icon ${showIcon ? 'showIcon' : ''}`}
          size='50px'
          onClick={scrollToTop}
        />
      </main>
    </React.Fragment>
  );
}

export default App;
