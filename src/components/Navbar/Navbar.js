import classes from './Navbar.module.css';
import { useState } from 'react';
import { useLayoutEffect } from 'react';
import { useContext } from 'react';
import UIContext from '../../context/ui-context';
//import { Link } from 'react-router-dom';
//import { NavLink } from 'react-router-dom';
//import { Link, animateScroll as scroll } from 'react-scroll';
import { Link as LinkScroll } from 'react-scroll';

const Navbar = () => {
  //const [sticky, setsticky] = useState(false);
  const uiCtx = useContext(UIContext);

  const onScroll = () => {
    //const topPos = ref.current.getBoundingClientRect().top;
    //const topPos = ref.current.offsetTop;
    //const bottomPos = ref.current.offsetTop + ref.current.offsetHeight;

    if (1 < window.scrollY) {
      uiCtx.setNavIsSticky();
      //setFadein(true);
      //console.log('true');
    } else {
      //console.log('false');
      uiCtx.setNavIsNotSticky();
      //setFadein(false);
    }
  };

  useLayoutEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  // const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);

  // hamburgerToggleHandler = () => {
  //   hamburgerIsOpen ? setHamburgerIsOpen(false) : setHamburgerIsOpen(true);
  // };

  return (
    <nav className={uiCtx.navIsSticky ? classes.sticky : ''}>
      {/* <div
        className={classes['hamburger-menu']}
        // onClick={hamburgerToggleHandler}
      >
        <div className={classes.hamburger} />
        <div className={classes.hamburger} />
        <div className={classes.hamburger} />
      </div> */}
      <li>
        <LinkScroll
          className={classes.link}
          activeClass={classes.active}
          to='about'
          spy={true}
          smooth={true}
          offset={-70}
          duration={100}
        >
          About
        </LinkScroll>
      </li>
      <li>
        <LinkScroll
          className={classes.link}
          activeClass={classes.active}
          to='skills'
          spy={true}
          smooth={true}
          offset={-70}
          duration={100}
        >
          Skills
        </LinkScroll>
      </li>
      <li>
        <LinkScroll
          className={classes.link}
          activeClass={classes.active}
          to='projects'
          spy={true}
          smooth={true}
          offset={-70}
          duration={100}
        >
          Projects
        </LinkScroll>
      </li>

      <li>
        <LinkScroll
          className={classes.link}
          activeClass={classes.active}
          to='contact'
          spy={true}
          smooth={true}
          offset={-70}
          duration={100}
        >
          Contact
        </LinkScroll>
      </li>
    </nav>
  );
};

export default Navbar;
