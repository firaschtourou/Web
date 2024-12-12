import React from 'react';
import { Link } from 'react-router-dom';
import styles from './headerHome.module.css';
import logo from './logo .png';
import login from './logout.png';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>
      
      {/* Navigation */}
      <nav className={styles.navbar}>
      <h1>Bienvenue à ECOEVENTHUB </h1>
      </nav>
      {/* Logout */}
      <div className={styles.logoutContainer}>
        <Link to="/auth" className={styles.logout}>
          <img src={login} alt="Logout" className={styles.logout} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
