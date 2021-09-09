import classes from './Navbar.module.css';
// import { useState } from 'react';
//import { Link } from 'react-router-dom';
//import { NavLink } from 'react-router-dom';
//import { Link, animateScroll as scroll } from 'react-scroll';
import { Link as LinkScroll } from 'react-scroll';

const Navbar = () => {
  // const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);

  // hamburgerToggleHandler = () => {
  //   hamburgerIsOpen ? setHamburgerIsOpen(false) : setHamburgerIsOpen(true);
  // };

  return (
    <nav>
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
