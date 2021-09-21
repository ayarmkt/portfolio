import classes from './Navbar.module.css';
import { useLayoutEffect, useContext } from 'react';

import UIContext from '../../context/ui-context';
import { Link as LinkScroll } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';
import icon from '../../assets/icon.png';

const Navbar = () => {
  const uiCtx = useContext(UIContext);

  const onScroll = () => {
    if (1 < window.scrollY) {
      uiCtx.setNavIsSticky();
    } else {
      uiCtx.setNavIsNotSticky();
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
    <nav
      className={`${classes.nav} ${uiCtx.navIsSticky ? classes.sticky : ''}`}
    >
      <div className={classes.icon}>
        <img src={icon} alt='home' onClick={scrollToTop} />
      </div>
      <ul className={classes.linkList}>
        <li className={classes.linkItem}>
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
        <li className={classes.linkItem}>
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
        <li className={classes.linkItem}>
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
        <li className={classes.linkItem}>
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
      </ul>
    </nav>
  );
};

export default Navbar;
