import React from 'react';
import { createRoot } from 'react-dom/client';
import CaseStudyPage, { slugFromPath } from './CaseStudyPage.jsx';
import './home.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CaseStudyPage slug={slugFromPath(window.location.pathname)} />
  </React.StrictMode>,
);
