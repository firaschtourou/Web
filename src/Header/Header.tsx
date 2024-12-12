import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';
import logo from './logo .png';
import logout from './logout.png';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>
      
      {/* Navigation */}
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link to="/acceuil" className={styles.navLink}>Accueil</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/présentation" className={styles.navLink}>Présentation</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/consulter" className={styles.navLink}>Consulter</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/organiser" className={styles.navLink}>Organiser</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/profil" className={styles.navLink}>Profil</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/contact" className={styles.navLink}>Contact</Link>
          </li>
        </ul>
      </nav>
      
      {/* Logout */}
      <div className={styles.logoutContainer}>
        <Link to="/" className={styles.logout}>
          <img src={logout} alt="Logout" className={styles.logout} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
