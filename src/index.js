import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//Importing the fonts I use in the probject.
import './index.css';
import './fonts/GothamBold.ttf';
import './fonts/GothamMedium.ttf';
import './fonts/GothamLight.ttf';

//Remember to open the README for an overview of the project.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

