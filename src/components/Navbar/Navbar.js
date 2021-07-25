import styles from './Navbar.module.css';
// import { useState } from 'react';

const Navbar = () => {
  // const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);

  // hamburgerToggleHandler = () => {
  //   hamburgerIsOpen ? setHamburgerIsOpen(false) : setHamburgerIsOpen(true);
  // };

  return (
    <nav>
      <div
        className={styles['hamburger-menu']}
        // onClick={hamburgerToggleHandler}
      >
        <div className={styles.hamburger} />
        <div className={styles.hamburger} />
        <div className={styles.hamburger} />
      </div>
      <li>
        <a href='#about'>About</a>
      </li>
      <li>
        <a href='#skills'>Skills</a>
      </li>
      <li>
        <a href='#projects'>Projects</a>
      </li>

      <li>
        <a href='#contact'>Contact</a>
      </li>
    </nav>
  );
};

export default Navbar;
