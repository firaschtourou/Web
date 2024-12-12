import React, { useState, ChangeEvent, FormEvent } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./organizer.css";

// Définir l'interface Event
interface Event {
  title: string;
  description: string;
  organizer: string;
  type: string;
  location: string;
  date: string;
  poster: File | null;
}

const Organizer: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]); // Liste des événements
  const [formData, setFormData] = useState<Event>({
    type: "",
    location: "",
    date: "",
    title: "",
    description: "",
    organizer: "",
    poster: null,
  }); // Formulaire d'ajout/édition
  const [editIndex, setEditIndex] = useState<number>(-1); // Index pour modifier un événement

  // Gérer les changements dans les champs du formulaire
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Gérer le changement de fichier (poster)
  

  // Soumettre le formulaire (ajouter ou modifier un événement)
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (editIndex !== -1) {
      const updatedEvents = [...events];
      updatedEvents[editIndex] = { ...formData };
      setEvents(updatedEvents);
      setEditIndex(-1);
    } else {
      setEvents([...events, formData]);
    }
    setFormData({
      type: "",
      location: "",
      date: "",
      title: "",
      description: "",
      organizer: "",
      poster: null,
    });
  };

  // Modifier un événement
  const handleEdit = (index: number) => {
    setFormData(events[index]);
    setEditIndex(index);
  };

  // Supprimer un événement
  const handleDelete = (index: number) => {
    setEvents(events.filter((_, i) => i !== index));
  };

  // Partager un événement
  const handleShare = (event: Event) => {
    alert(`Sharing event: ${event.title}`);
  };

 // Gérer le changement de fichier (poster)
const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
  if (e.target.files && e.target.files[0]) {
    setFormData((prev) => ({ ...prev, poster: e.target.files![0] }));
  }
};

return (
  <div>
    <Header />
    <div className="organizer-container">
      <h1>Organizer Votre Evenement</h1>
      <form className="event-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Titre d'évenement "
          required
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description d'évenement "
          required
        ></textarea>
        <input
          type="text"
          name="organizer"
          value={formData.organizer}
          onChange={handleChange}
          placeholder="Nom d'organizateur"
          required
        />
        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="">Sélectionner le type d'événement</option>
          <option value="Conference">Conference</option>
          <option value="Workshop">Workshop</option>
          <option value="Clean-up">Clean-up</option>
        </select>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Localisation"
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        {/* Nouveau champ pour importer l'image */}
        <input
          type="file"
          name="poster"
          accept="image/*"
          onChange={handleFileChange}
        />
        <button type="submit">{editIndex !== -1 ? "Modify" : "Validate"}</button>
      </form>

      {/* Affichage de l'image */}
      {events.length > 0 && (
        <table className="event-table">
          <thead>
            <tr>
              <th>Poster</th>
              <th>Title</th>
              <th>Description</th>
              <th>Organizateur</th>
              <th>Type</th>
              <th>Localisation</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => (
              <tr key={index}>
                <td>
                  {event.poster && (
                    <img
                      src={URL.createObjectURL(event.poster)}
                      alt={event.title}
                      className="poster-image"
                    />
                  )}
                </td>
                <td>{event.title}</td>
                <td>{event.description}</td>
                <td>{event.organizer}</td>
                <td>{event.type}</td>
                <td>{event.location}</td>
                <td>{event.date}</td>
                <td>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleDelete(index)}>Cancel</button>
                  <button onClick={() => handleShare(event)}>Share</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {events.length === 0 && <p>Commence à Ajouter Votre Evenement Maintenent !!</p>}
    </div>
    <Footer />
  </div>
);

};

export default Organizer;
