import React from 'react';
import styles from './eventBox.module.css'; // Pour le CSS
import img1 from './image1.png';
import img2 from './image2.png';
import img3 from './image3.png';
import img4 from './image4.png';
import img5 from './image5.png';
import img6 from './image6.png';

// Type pour un événement
interface Event {
  id: number;
  title: string;
  image: string;
  description: string;
  location: string;
  organizer: string;
  date: string;
  status: 'En cours' | 'À venir' | 'Terminé';
  rating: number | null; // `null` si l'événement n'a pas encore de note
}

// Liste des événements
const events: Event[] = [
  {
    id: 1,
    title: 'BUSINESS ECO SYSTEM',
    image: img1,
    description: 'Explorez les écosystèmes d\'affaires durables et leur impact sur l\'économie.',
    location: 'Paris, France',
    organizer: 'Chambre de Commerce Internationale',
    date: '2024-11-20',
    status: 'En cours',
    rating: null,
  },
  {
    id: 2,
    title: 'NET ZERO',
    image: img2,
    description: 'Atteindre la neutralité carbone grâce à des innovations révolutionnaires.',
    location: 'Londres, Royaume-Uni',
    organizer: 'Alliance pour le Climat',
    date: '2024-11-22',
    status: 'En cours',
    rating: null,
  },
  {
    id: 3,
    title: 'WITH SDGS',
    image: img3,
    description: 'Un focus sur les objectifs de développement durable et leur mise en œuvre.',
    location: 'New York, États-Unis',
    organizer: 'Nations Unies',
    date: '2024-12-05',
    status: 'À venir',
    rating: null,
  },
  {
    id: 4,
    title: 'ECO RESPONSABLE',
    image: img4,
    description: 'Adoptez une approche écologique pour un avenir durable.',
    location: 'Berlin, Allemagne',
    organizer: 'Forum Mondial de l\'Environnement',
    date: '2024-12-10',
    status: 'À venir',
    rating: null,
  },
  {
    id: 5,
    title: 'ECO ENGAGE',
    image: img5,
    description: 'Engagement des entreprises dans les pratiques durables.',
    location: 'Tokyo, Japon',
    organizer: 'Association Asiatique pour l\'Écologie',
    date: '2024-10-15',
    status: 'Terminé',
    rating: 4.5,
  },
  {
    id: 6,
    title: 'ECO RESPONSABLE',
    image: img6,
    description: 'Solutions écologiques pour un impact environnemental réduit.',
    location: 'Montréal, Canada',
    organizer: 'Institut de Recherche en Durabilité',
    date: '2024-10-20',
    status: 'Terminé',
    rating: 3.8,
  },
];

// Fonction pour générer les étoiles jaunes
const renderStars = (rating: number): JSX.Element[] => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span
        key={i}
        className={`${styles.star} ${i <= Math.round(rating) ? styles.filled : ''}`}
      >
        ★
      </span>
    );
  }
  return stars;
};

const EventBox: React.FC = () => {
  return (
    <div className={styles.eventContainer}>
      {events.map((event) => (
        <div className={styles.eventBox} key={event.id}>
          <img src={event.image} alt={event.title} className={styles.eventImage} />
          <div className={styles.eventDetails}>
            <h3 className={styles.eventTitle}>{event.title}</h3>
            <p className={styles.eventDescription}>{event.description}</p>
            <p className={styles.eventLocation}>Lieu: {event.location}</p>
            <p className={styles.eventOrganizer}>Organisateur: {event.organizer}</p>
            <p className={styles.eventDate}>Date: {event.date}</p>
            <p className={styles.eventStatus}>Statut: {event.status}</p>
            {event.rating !== null && (
              <p className={styles.eventRating}>
                Note : {renderStars(event.rating)}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventBox;
