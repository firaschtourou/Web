import React from 'react';
import HeaderHome from '../HeaderHome/HeaderHome';
import Footer from '../Footer/Footer';
import EventBox from './EventBox1';
import styles from './acceuilHome.module.css';
import Slide from './Slide3.png';

const Acceuil: React.FC = () => {
  return (
    <div>
      <HeaderHome />
      <div className={styles.sliderContainer}>
       
        <div className={styles.slider}>
            <img src={Slide} alt="Slide" className={styles.slideImage}/>
        </div>
      </div>
      <h1>Nos Evenements </h1>
      <EventBox />
      <Footer />
    </div>
  );
};

export default Acceuil;
