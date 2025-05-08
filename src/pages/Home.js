import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Home() {
  const navigate = useNavigate();
  const servicios = ['Lavado Básico', 'Lavado Express', 'Planchado', 'Lavado en Seco', 'Servicio Premium'];

  return (
    <div className="App">
      <header>
        <h1>Clean-Clean</h1>
        <p>Lavandería Premium</p>
      </header>
      <main>
        <h2>Nuestros Servicios</h2>
        <div className="service-buttons">
          {servicios.map((s) => (
            <button key={s} className="service-btn" onClick={() => navigate(`/servicio/${s}`)}>
              {s}
            </button>
          ))}
        </div>
      </main>
      <footer>
        <p>&copy; 2025 Clean-Clean. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Home;
