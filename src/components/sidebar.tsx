import React from 'react';
import './Sidebar.css'; // Asegúrate de tener este archivo de estilos

const Sidebar: React.FC = () => {
    return (
        <div className="topbar">
            <h2 className="topbar-title">Menú</h2>
            <ul className="topbar-list">
                <li className="topbar-item">Inicio</li>
                <li className="topbar-item">Productos</li>
                <li className="topbar-item">Contacto</li>
                <li className="topbar-item">Galería</li>
            </ul>
        </div>
    );
};

const App: React.FC = () => {
    return (
        <div>
            <Sidebar />
            <div className="main-content">
                <h1>Contenido Principal</h1>
                <p>Esta es la zona donde se muestra la información.</p>
            </div>
        </div>
    );
};

export default App;
