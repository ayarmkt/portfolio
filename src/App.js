import './App.scss';
import React from 'react';
import { useEffect, useContext } from 'react';
import Hero from './components/Hero';
import Navbar from './components/NavBar';
import Projects from './components/Projects';
import useWindowDimensions from './hooks/useWindowDimensions';
import UIContext from './context/ui-context';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import HamburgerMenu from './components/HamburgerMenu';
import Contacts from './components/Contacts';
import ScrollToTopIcon from './UIcomponents/ScrollToTopIcon';

function App() {
  const uiCtx = useContext(UIContext);
  const { width: vw } = useWindowDimensions();

  useEffect(() => {
    if (vw <= 420) {
      uiCtx.setMobile();
    } else {
      uiCtx.setNotMobile();
    }
  }, [vw, uiCtx]);

  return (
    <React.Fragment>
      {!uiCtx.mobile && <Navbar />}
      {uiCtx.mobile && <HamburgerMenu />}

      <main>
        <Hero />
        <AboutMe />
        <Projects />
      </main>
      <Footer />
      {vw > 767 && <Contacts />}
      <ScrollToTopIcon />
    </React.Fragment>
  );
}

export default App;
