import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Asegúrate de que el nombre App es correcto

// Conecta con el <div id="root"> en public/index.html
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);