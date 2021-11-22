import { useState } from 'react';
import { Link as LinkScroll } from 'react-scroll';

import PDF from '../assets/CV_Aya Takamura.pdf';

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuHandler = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className='hamburger-menu'>
      {/* HAMBURGER ICON */}
      <div
        className={`hamburger-center ${menuOpen ? 'menuIcon-active' : ''}`}
        onClick={menuHandler}
      >
        <div></div>
      </div>
      {/* CONTENT */}

      {menuOpen && (
        <ul
          className={`hamburger-menu-list  ${
            menuOpen ? 'menu-open' : 'menu-close'
          }`}
        >
          <li>
            <LinkScroll
              className='hamburger-nav-link'
              activeClass='nav-link-active'
              to='aboutme'
              spy={true}
              smooth={true}
              offset={0}
              duration={700}
            >
              About Me
            </LinkScroll>
          </li>
          <li>
            <LinkScroll
              className='hamburger-nav-link'
              activeClass='nav-link-active'
              to='projects'
              spy={true}
              smooth={true}
              offset={-30}
              duration={900}
            >
              Projects
            </LinkScroll>
          </li>
          <li>
            <a
              className='hamburger-nav-link'
              href={PDF}
              target='_blank'
              rel='noopener noreferrer'
            >
              Resume
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default HamburgerMenu;
