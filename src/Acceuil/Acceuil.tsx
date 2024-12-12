import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import EventBox from './EventBox';
import styles from './acceuil.module.css';
import gauche from './gauche.png';
import droite from './droite.png';
import Slide3 from './Slide1.png';
import Slide2 from './Slide2.png';
import Slide1 from './Slide3.png';
import Slide4 from './Slide4.png';

const Acceuil: React.FC = () => {
  const images: string[] = [Slide1, Slide2, Slide3, Slide4];
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const nextSlide = (): void => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = (): void => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  return (
    <div>
      <Header />
      <div className={styles.sliderContainer}>
        <img
          alt="Previous Slide"
          src={gauche}
          className={styles.arrow}
          onClick={prevSlide}
        />
        <div className={styles.slider}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className={`${styles.slideImage} ${
                index === currentSlide ? styles.active : ''
              }`}
            />
          ))}
        </div>
        <img
          alt="Next Slide"
          src={droite}
          className={styles.arrow}
          onClick={nextSlide}
        />
      </div>
      <h1>Nos Evenements </h1>
      <EventBox />
      <Footer />
    </div>
  );
};

export default Acceuil;
