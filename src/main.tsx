import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/card';
import Sidebar from './components/sidebar';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Card/>
    <Sidebar />
  </StrictMode>,
);
  