import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Card from './components/card';
import Sidebar from './components/sidebar';
import Datos from './components/datos';




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Card/>
    <Sidebar />
    <Datos />
  </StrictMode>,
);
  