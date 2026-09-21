import React from 'react';
import { createRoot } from 'react-dom/client';
import ProjectApp from './ProjectApp.jsx';
import '../styles.css';
import '../project.css';

createRoot(document.getElementById('project-root')).render(
  <React.StrictMode><ProjectApp /></React.StrictMode>,
);
