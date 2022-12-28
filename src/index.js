import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// On rattache notre application au HTML via l'id 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));
// Effectue le rendu du composant React
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
