import React from 'react';
import { createRoot } from 'react-dom/client';
import WorkPage from './WorkPage.jsx';
import './home.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WorkPage />
  </React.StrictMode>,
);
