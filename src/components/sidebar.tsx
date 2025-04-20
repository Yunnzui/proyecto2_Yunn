import React from 'react';
import './sidebar.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 

interface SidebarProps {
    position?: 'left' | 'right'; // default: left
}

const Sidebar: React.FC<SidebarProps> = ({ position = 'left' }) => {
    return (
        <><div className="sidebar"></div><h2>Yunn Examen</h2><ul className="sidebar-list">
            <li className="sidebar-item">Inicio</li>
            <li className="sidebar-item">Productos</li> 
            <li className="sidebar-item">Contacto</li>
            <li className="sidebar-item">Galeria</li>
        
        </ul></>
        );
    };
    
    export default Sidebar;