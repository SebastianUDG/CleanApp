import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../App.css';

function Servicio() {
  const { nombre } = useParams();

  return (
    <div className="form-container">
      <h2>Solicitar: {nombre}</h2>
      <form>
        <input type="text" placeholder="Nombre completo" required />
        <input type="tel" placeholder="Teléfono" />
        <textarea placeholder="Detalles del servicio"></textarea>
        <button type="submit">Solicitar</button>
      </form>
      <Link to="/home">← Volver</Link>
    </div>
  );
}

export default Servicio;
