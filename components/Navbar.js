// components/Navbar.js
import React from 'react';
import { Link } from 'react-scroll';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="about" smooth={true} duration={500} spy={true} activeClass={styles.active}>
        About
      </Link>
      <Link to="instructor" smooth={true} duration={500} spy={true} activeClass={styles.active}>
        Instructor
      </Link>
      <Link to="reviews" smooth={true} duration={500} spy={true} activeClass={styles.active}>
        Reviews
      </Link>
    </nav>
  );
};

export default Navbar;
