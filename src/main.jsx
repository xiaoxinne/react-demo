import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import RouteApp from './config/router.config.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouteApp />
  </StrictMode>
);
