import './App.css';
import React from 'react';
//import { Route } from 'react-router-dom';
//import classes from './App.css';
import { useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';

import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import { AiOutlineToTop } from 'react-icons/ai';

function App() {
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

  return (
    <React.Fragment>
      <header>
        <Navbar />
      </header>
      <main>
        {/* <Route path='/about'> */}
        <About />
        {/* </Route> */}

        <Skills />
        <Projects />
        <Contact />
        <AiOutlineToTop
          className='to-top-icon'
          size='40px'
          onClick={scrollToTop}
        />
      </main>
    </React.Fragment>
  );
}

export default App;
