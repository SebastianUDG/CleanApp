import React from 'react';
import './App.css';

function App() {
  const handleServiceClick = (service) => {
    alert(`Has seleccionado: ${service}`);
  };

  return (
    <div className="App">
      <header>
        <h1>Clean-Clean</h1>
        <p>Lavandería Premium</p>
      </header>

      <main>
        <section className="services">
          <h2>Nuestros Servicios</h2>
          <div className="service-buttons">
            <button className="service-btn" onClick={() => handleServiceClick('Lavado Básico')}>
              Lavado Básico
            </button>
            <button className="service-btn" onClick={() => handleServiceClick('Lavado Express')}>
              Lavado Express
            </button>
            <button className="service-btn" onClick={() => handleServiceClick('Planchado')}>
              Planchado
            </button>
            <button className="service-btn" onClick={() => handleServiceClick('Lavado en Seco')}>
              Lavado en Seco
            </button>
            <button className="service-btn" onClick={() => handleServiceClick('Servicio Premium')}>
              Servicio Premium
            </button>
          </div>
        </section>

        <section className="contact">
          <h2>Contacto</h2>
          <p>¿Tienes alguna pregunta? Contáctanos:</p>
          <button className="contact-btn">WhatsApp</button>
          <button className="contact-btn">Llamar</button>
        </section>
      </main>

      <footer>
        <p>&copy; 2023 Clean-Clean. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
