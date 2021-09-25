import classes from './HamburgerMenu.module.css';
import { useState } from 'react';

import { Link as LinkScroll } from 'react-scroll';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenuHandler = () => {
    setMenuOpen(true);
  };

  const closeMenuHandler = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={classes.nav}>
      <ul className={`${classes.links} ${menuOpen ? classes.open : ''}`}>
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
      </ul>
      {!menuOpen && (
        <GiHamburgerMenu
          className={classes.icon}
          size='50px'
          onClick={openMenuHandler}
        />
      )}
      {menuOpen && (
        <GrClose
          className={classes.icon}
          size='50px'
          onClick={closeMenuHandler}
        />
      )}
    </nav>
  );
};

export default HamburgerMenu;
