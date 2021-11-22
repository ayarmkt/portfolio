import './App.scss';
import React from 'react';
import {
  //useState,
  useEffect,
  //useLayoutEffect,
  useContext,
} from 'react';
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
  // const [showIcon, setShowIcon] = useState(false);
  const { width: vw } = useWindowDimensions();

  useEffect(() => {
    if (vw <= 420) {
      uiCtx.setMobile();
    } else {
      uiCtx.setNotMobile();
    }
  }, [vw, uiCtx]);

  // const onScroll = () => {
  //   if (80 < window.scrollY) {
  //     setShowIcon(true);
  //   } else {
  //     setShowIcon(false);
  //   }
  // };

  // useLayoutEffect(() => {
  //   window.addEventListener('scroll', onScroll);
  //   return () => window.removeEventListener('scroll', onScroll);
  // }, []);

  return (
    <React.Fragment>
      {!uiCtx.mobile && <Navbar />}
      {uiCtx.mobile && <HamburgerMenu />}
      {/* {!uiCtx.mobile && <Navbar />}
        {uiCtx.mobile && <HamburgerMenu />} */}

      <main>
        <Hero />
        <AboutMe />
        <Projects />
        {/* <About />
        <Skills />
        <Projects />*/}
      </main>
      {/* <Contacts /> */}
      <Footer />
      <Contacts />
      <ScrollToTopIcon />
    </React.Fragment>
  );
}

export default App;
