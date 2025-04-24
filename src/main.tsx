import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Sidebar from './components/sidebar';
import Home from './pages/home';
import Contacto from './pages/contacto';
import Productos from './pages/productos';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Galeria from './pages/galeria';
import Tarjetas from './pages/tarjetas';
import Tanques from './pages/tanques';




createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <Router>
      <Sidebar />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/tarjetas" element={<Tarjetas />} />
        <Route path="/tanques" element={<Tanques />} />

      </Routes>
    </Router>

  </StrictMode>,
);
