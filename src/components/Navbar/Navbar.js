import classes from './Navbar.module.css';
import PDF from '../../assets/CV_Aya Takamura.pdf';
import { Link as LinkScroll } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';
import icon from '../../assets/icon.png';

const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 100 });
  };

  return (
    <nav className={classes.nav}>
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
            About Me
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
          <a
            className={classes.link}
            href={PDF}
            target='_blank'
            rel='noopener noreferrer'
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
