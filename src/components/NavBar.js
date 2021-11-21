import { Link as LinkScroll } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';
import icon from '../assets/icon.png';
import PDF from '../assets/CV_Aya Takamura.pdf';

const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 500 });
  };

  return (
    <header>
      <nav className='navbar'>
        <div className='home-icon'>
          <img src={icon} alt='home' onClick={scrollToTop} />
        </div>
        <ul>
          <li>
            <LinkScroll
              className='nav-link'
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
              className='nav-link'
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
              className='nav-link'
              href={PDF}
              target='_blank'
              rel='noopener noreferrer'
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
