import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

import reportWebVitals from './reportWebVitals';
import Routess from './Routess';
import { Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routess />
  </React.StrictMode>
);