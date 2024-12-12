import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthPage from './Authentification/Authen';
import Acceuil from './Acceuil/Acceuil';
import Présentation from './Présentation/Présentation';
import Consulter from './Consulter/Consulter';
import Organiser from './Organizer/Organizer';
import Profil from './Profil/Profil';
import Contact from './Contact/Contact';
import Home from './Home/Home';
const App: React.FC = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home />}/>
        <Route path="/auth" element={<AuthPage />}/>
        <Route path="/acceuil" element={<Acceuil />}/>
        <Route path="/présentation" element={<Présentation />}/>
        <Route path="/consulter" element={<Consulter />}/>
        <Route path="/organiser" element={<Organiser />}/>
        <Route path="/profil" element={<Profil />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </div>
  );
};
export default App;
