import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './profil.css';

interface Event {
  id: number;
  title: string;
  status: string;
}

const Profile: React.FC = () => {
  const [profilePicture, setProfilePicture] = useState<string>('/default-profile.png');
  const [participatedEvents, setParticipatedEvents] = useState<string[]>(['Clean-Up Beach', 'Plant Trees']);
  const [interestedEvents, setInterestedEvents] = useState<string[]>([]);
  const [allEvents, setAllEvents] = useState<Event[]>([
    { id: 1, title: 'Business Eco System', status: '' },
    { id: 2, title: 'Net Zero', status: '' },
    { id: 3, title: 'With SDGS', status: '' },
    { id: 4, title: 'Eco Responsable', status: '' },
    { id: 5, title: 'Eco Engagé', status: '' },
    { id: 6, title: 'Eco Responsable', status: '' },
    { id: 7, title: 'EcoSystem Restoration', status: '' },
  ]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setProfilePicture(URL.createObjectURL(file));
    }
  };

  const handleEventClick = (id: number, action: string): void => {
    setAllEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === id ? { ...event, status: action } : event
      )
    );

    const selectedEvent = allEvents.find((event) => event.id === id)?.title;

    if (action === 'Participate' && selectedEvent && !participatedEvents.includes(selectedEvent)) {
      setParticipatedEvents([...participatedEvents, selectedEvent]);
    } else if (action === 'Interested' && selectedEvent && !interestedEvents.includes(selectedEvent)) {
      setInterestedEvents([...interestedEvents, selectedEvent]);
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredEvents = allEvents.filter((event) =>
    event.title.toLowerCase().includes(searchQuery)
  );

  return (
    <div>
      <Header />
      <div className="profile-container">
        <h1 className="profile-title">Mon Profil</h1>
        <div className="profile-card">
          <div className="profile-image">
            <img src={profilePicture} alt="Profile" />
            <label className="edit-image-label">
              Modifier
              <input type="file" onChange={handleImageChange} />
            </label>
          </div>
          <div className="profile-details">
            <h2>Firas Chtourou</h2>
            <p><strong>ID:</strong> 8574621</p>
            <p><strong>Email:</strong> firaschtourou86@gmail.com</p>
          </div>
        </div>

        <div className="profile-section">
          <h2>Événements auxquels j'ai participé</h2>
          {participatedEvents.length > 0 ? (
            <ul>
              {participatedEvents.map((event, index) => (
                <li key={index}>{event}</li>
              ))}
            </ul>
          ) : (
            <p>Vous n'avez pas encore participé à des événements.</p>
          )}
        </div>

        <div className="profile-section">
          <h2>Événements qui m'intéressent</h2>
          {interestedEvents.length > 0 ? (
            <ul>
              {interestedEvents.map((event, index) => (
                <li key={index}>{event}</li>
              ))}
            </ul>
          ) : (
            <p>Vous n'avez pas encore marqué d'événements comme intéressants.</p>
          )}
        </div>

        <div className="profile-section">
          <h2>Tous les Événements</h2>
          <input
            type="text"
            className="search-bar"
            placeholder="Rechercher des événements..."
            value={searchQuery}
            onChange={handleSearch}
          />
          {filteredEvents.length > 0 ? (
            <ul className="event-list">
              {filteredEvents.map((event) => (
                <li key={event.id} className="event-item">
                  <span className="event-title">{event.title}</span>
                  <div className="action-buttons">
                    <button
                      className="action-button participate"
                      onClick={() => handleEventClick(event.id, 'Participate')}
                    >
                      Participer
                    </button>
                    <button
                      className="action-button interested"
                      onClick={() => handleEventClick(event.id, 'Interested')}
                    >
                      Intéressé
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>Aucun événement correspondant trouvé.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
