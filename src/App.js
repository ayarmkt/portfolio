import './App.css';
import React from 'react';
//import classes from './App.css';

import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Skills from './components/Skills/Skills';

import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <React.Fragment>
      <header>
        <Navbar />
      </header>
      <main>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </React.Fragment>
  );
}

export default App;
