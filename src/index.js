import React from 'react';
import ReactDOM from 'react-dom/client';
import 'primereact/resources/themes/lara-dark-blue/theme.css';  // Tema futurista
import 'primereact/resources/primereact.min.css';  // CSS de PrimeReact
import 'primeicons/primeicons.css';  // Iconos de PrimeReact
import './styles.css';  // Tu archivo de estilos
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
