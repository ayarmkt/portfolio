import './App.css';
import React from 'react';
import { useState } from 'react';
//import { Route } from 'react-router-dom';
//import classes from './App.css';
import { useEffect } from 'react';
import { useLayoutEffect } from 'react';
import { useContext } from 'react';
import { animateScroll as scroll } from 'react-scroll';

import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import { AiOutlineToTop } from 'react-icons/ai';
import useWindowDimensions from './hooks/useWindowDimensions';
import HamburgerMenu from './components/Navbar/HamburgerMenu';
import UIContext from './context/ui-context';

function App() {
  const [showIcon, setShowIcon] = useState(false);
  const { width: vw } = useWindowDimensions();
  const uiCtx = useContext(UIContext);
  //const [mobile, setMobile] = useState(false);

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
    //const topPos = ref.current.getBoundingClientRect().top;
    //const topPos = ref.current.offsetTop;
    //const bottomPos = ref.current.offsetTop + ref.current.offsetHeight;

    if (80 < window.scrollY) {
      setShowIcon(true);
      //setFadein(true);
      console.log('true');
    } else {
      console.log('false');
      setShowIcon(false);
      //setFadein(false);
    }
  };

  useLayoutEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 100 });
  };

  // let yOffset;
  // let yScroll;
  // useEffect(() => {
  //   yOffset = window.pageYOffset;
  //   console.log(yOffset);
  //   yScroll = window.scrollY;
  //   console.log(yScroll);
  // }, [yOffset, yScroll]);

  //let yScroll = window.scrollY;
  //const visible = yScroll >= 300 ? visible : '';

  // ${showIcon ? showIcon : ''}

  return (
    <React.Fragment>
      <header>
        {!uiCtx.mobile && <Navbar />}
        {uiCtx.mobile && <HamburgerMenu />}
      </header>
      <main>
        {/* <Route path='/about'> */}
        <About />
        {/* </Route> */}

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