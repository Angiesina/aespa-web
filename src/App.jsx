import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';  
import Header from './assets/componentes/Header';  
import Miembros from './assets/componentes/Miembros';
import Inicio from './assets/componentes/Inicio';
import Albumes from './assets/componentes/Albumes';  
import Footer from './assets/componentes/Footer';
import Formulario from './assets/componentes/Formulario';

const App = () => {
  return (
    <div>
      {/* llamar a todos los componentes y crear las rutas a donde se redireccionaran */}
      <Header /> 
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/miembros" element={<Miembros />} /> 
        <Route path="/albumes" element={<Albumes />} />
        <Route path="/formulario" element={<Formulario />} />
      </Routes>
      <Footer /> 
    </div>
  );
};

export default App;

