import './App.scss';
import React from 'react';
import { useState, useEffect, useLayoutEffect, useContext } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import Hero from './components/Hero';
import Navbar from './components/NavBar';
import Projects from './components/Projects';

import useWindowDimensions from './hooks/useWindowDimensions';
import UIContext from './context/ui-context';
import { AiOutlineToTop } from 'react-icons/ai';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';

function App() {
  const uiCtx = useContext(UIContext);
  const [showIcon, setShowIcon] = useState(false);
  const { width: vw } = useWindowDimensions();

  useEffect(() => {
    if (vw <= 1023) {
      uiCtx.setMobile();
    } else {
      uiCtx.setNotMobile();
    }
  }, [vw, uiCtx]);

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
      <Navbar />
      {/* {!uiCtx.mobile && <Navbar />}
        {uiCtx.mobile && <HamburgerMenu />} */}

      <main>
        <Hero />
        <AboutMe />
        <Projects />
        {/* <About />
        <Skills />
        <Projects />*/}
        {/* <AiOutlineToTop
          className={`to-top-icon ${showIcon ? 'showIcon' : ''}`}
          size='50px'
          onClick={scrollToTop}
        /> */}
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
