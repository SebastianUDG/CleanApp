import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Register() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <div className="form-container">
      <h2>Crear Cuenta</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nombre completo" required />
        <input type="email" placeholder="Correo electrónico" required />
        <input type="password" placeholder="Contraseña" required />
        <input type="tel" placeholder="Teléfono" />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Register;
