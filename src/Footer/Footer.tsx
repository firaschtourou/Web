import React from 'react';
import styles from './footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMap, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contactInfo}>
        <p>
          <FontAwesomeIcon icon={faEnvelope} /> Email: ECOEVENTHUB@email.com
        </p>
        <p>
          <FontAwesomeIcon icon={faPhone} /> Phone: +1 234 567 890
        </p>
        <p>
          <FontAwesomeIcon icon={faMap} /> Address: 1234 develper, JavaScript City, TS
        </p>
      </div>
      <div className={styles.socialIcons}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
        </a>
        <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGooglePlay} className={styles.icon} />
        </a>
      </div>
      <div className={styles.copyright}>
        <p>© 2024 ECOEVENTHUB. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
