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
        </div>
    );
};

export default App;
export { App, Sidebar };