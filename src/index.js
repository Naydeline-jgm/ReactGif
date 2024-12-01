import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Estilos opcionales

// Componente principal
function App() {
  return (
    <div>
      <h1>¡Hola Mundo desde React!</h1>
    </div>
  );
}

// Selecciona el contenedor HTML y renderiza la aplicación
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
