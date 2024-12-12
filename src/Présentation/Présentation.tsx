import React from 'react';
import './présentation.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Présentation: React.FC = () => {
  return (
    <div className="presentation-container">
      <Header />
      <div className="presentation-content">
        <h1 className="presentation-title">À propos de notre site</h1>
        <p className="presentation-text">
          Avec une prise de conscience croissante des questions environnementales, notre site web se positionne comme une
          plateforme dédiée à la promotion et à l'organisation d'événements éco-responsables.
        </p>
        <p className="presentation-text">
          Que vous soyez une entreprise, une organisation, ou un particulier, nous vous offrons un espace pour découvrir,
          organiser, et partager des initiatives respectueuses de l'environnement. Nos catégories d'événements incluent des
          conférences, des ateliers pratiques, des clean-ups, des cours en ligne, et bien plus encore.
        </p>
        <p className="presentation-text">
          Rejoignez-nous pour agir concrètement et contribuer à un avenir plus durable, tout en vous connectant avec une
          communauté engagée partageant les mêmes valeurs.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Présentation;
