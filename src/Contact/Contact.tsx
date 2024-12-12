import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './contact.css';

const Contact: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="contact-container">
        <h1 className="contact-title">Contactez-nous</h1>
        <p className="contact-description">
          Si vous rencontrez un problème avec votre compte, veuillez remplir le formulaire ci-dessous. Nous sommes là pour vous aider !
        </p>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input type="text" id="name" name="name" placeholder="Votre nom" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Votre email" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Sujet</label>
            <input type="text" id="subject" name="subject" placeholder="Sujet du message" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Décrivez votre problème" rows={5} required></textarea>
          </div>
          <button type="submit" className="submit-button">Envoyer</button>
        </form>
        <div className="social-media">
          <h2>Suivez-nous</h2>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
