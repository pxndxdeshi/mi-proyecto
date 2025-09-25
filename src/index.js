import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Asegúrate de importar 'App'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App /> {/* Renderiza el componente App */}
  </React.StrictMode>
);