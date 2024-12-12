import React, { useState, ChangeEvent, FormEvent } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./consulter.module.css"; // Assurez-vous que le fichier CSS est nommé correctement
import img1 from "./image1.png";
import img2 from "./image2.png";
import img3 from "./image3.png";
import img4 from "./image4.png";
import img5 from "./image5.png";
import img6 from "./image6.png";
import img7 from "./image7.png";

// Définition des types pour les événements et les filtres
interface Event {
  id: number;
  title: string;
  type: string;
  image: string;
  location: string;
  date: string;
  status: string;
}

interface Filters {
  date: string;
  location: string;
  type: string;
  status: string;
}

const countries = [
  "France",
  "Royaume-Uni",
  "États-Unis",
  "Allemagne",
  "Japon",
  "Canada",
  "Tunisie",
];

const events: Event[] = [
  { id: 1, title: "BUSINESS ECO SYSTEM", type: "Conférences", image: img1, location: "Paris, France", date: "2024-11-20", status: "En cours" },
  { id: 2, title: "NET ZERO", type: "Hackathons ou Think Tanks", image: img2, location: "Londres, Royaume-Uni", date: "2024-11-22", status: "En cours" },
  { id: 3, title: "WITH SDGS", type: "Ateliers pratiques", image: img3, location: "New York, États-Unis", date: "2024-12-05", status: "À venir" },
  { id: 4, title: "ECO RESPONSABLE", type: "Clean-ups", image: img4, location: "Berlin, Allemagne", date: "2024-12-10", status: "À venir" },
  { id: 5, title: "ECO ENGAGE", type: "Événements communautaires", image: img5, location: "Tokyo, Japon", date: "2024-10-15", status: "Terminé" },
  { id: 6, title: "ECO RESPONSABLE", type: "Activités éducatives pour les enfants", image: img6, location: "Montréal, Canada", date: "2024-10-20", status: "Terminé" },
  { id: 7, title: "EcoSystem Restoration", type: "Cours en ligne", image: img7, location: "Tunis, Tunisie", date: "2024-10-08", status: "Terminé" },
];

const Consulter: React.FC = () => {
  const [filters, setFilters] = useState<Filters>({ date: "", location: "", type: "", status: "" });
  const [filteredEvents, setFilteredEvents] = useState<Event[]>(events);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handleFilterSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    const { date, location, type, status } = filters;
    const filtered = events.filter((event) => {
      return (
        (date === "" || event.date === date) &&
        (location === "" || event.location.toLowerCase().includes(location.toLowerCase())) &&
        (type === "" || event.type === type) &&
        (status === "" || event.status === status)
      );
    });

    setFilteredEvents(filtered);
  };

  const handleButtonClick = (type: string, eventTitle: string) => {
    alert(`Vous avez choisi "${type}" pour l'événement "${eventTitle}".`);
  };

  return (
    <div className={styles.container}>
      <Header />
      <h1 className={styles.title}>Filtrer les Événements</h1>
      <form className={styles.filterForm} onSubmit={handleFilterSubmit}>
        <div className={styles.filterGroup}>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={filters.date}
            onChange={handleFilterChange}
            className={styles.filterInput}
          />
        </div>
        <div className={styles.filterGroup}>
          <label htmlFor="location">Localisation:</label>
          <select
            id="location"
            name="location"
            value={filters.location}
            onChange={handleFilterChange}
            className={styles.filterSelect}
          >
            <option value="">Tous</option>
            {countries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.filterGroup}>
          <label htmlFor="type">Type d'Événement:</label>
          <select
            id="type"
            name="type"
            value={filters.type}
            onChange={handleFilterChange}
            className={styles.filterSelect}
          >
            <option value="">Tous</option>
            <option value="Conférences">Conférences</option>
            <option value="Ateliers pratiques">Ateliers pratiques</option>
            <option value="Clean-ups">Clean-ups</option>
            <option value="Cours en ligne">Cours en ligne</option>
            <option value="Événements communautaires">Événements communautaires</option>
            <option value="Activités éducatives pour les enfants">Activités éducatives pour les enfants</option>
            <option value="Hackathons ou Think Tanks">Hackathons ou Think Tanks</option>
          </select>
        </div>
        <div className={styles.filterGroup}>
          <label htmlFor="status">Status:</label>
          <select
            id="status"
            name="status"
            value={filters.status}
            onChange={handleFilterChange}
            className={styles.filterSelect}
          >
            <option value="">Tous</option>
            <option value="En cours">En cours</option>
            <option value="Terminé">Terminé</option>
            <option value="À venir">À venir</option>
          </select>
        </div>
        <button type="submit" className={styles.filterButton}>
          Valider
        </button>
      </form>

      <div className={styles.eventList}>
        {(isSubmitted ? filteredEvents : events).length > 0 ? (
          (isSubmitted ? filteredEvents : events).map((event) => (
            <div key={event.id} className={styles.eventCard}>
              <img src={event.image} alt={event.title} className={styles.eventImage} />
              <h3 className={styles.eventTitle}>{event.title}</h3>
              <p className={styles.eventLocation}>{event.location}</p>
              <p className={styles.eventDate}>{event.date}</p>
              <p className={styles.eventType}>{event.type}</p>
              <p className={styles.eventStatus}>{event.status}</p>
              <div className={styles.buttonGroup}>
                <button
                  className={styles.actionButton}
                  onClick={() => handleButtonClick("Participer", event.title)}
                >
                  Participer
                </button>
                <button
                  className={styles.actionButton}
                  onClick={() => handleButtonClick("Intéressé", event.title)}
                >
                  Intéressé
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className={styles.noEvents}>Aucun événement ne correspond aux critères sélectionnés.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Consulter;
