import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            <div className="logo">Y</div>

            <ul className="nav">
                <li className="nav-item active">
                    <Link to="/home"><span className="icon">🏠</span></Link>
                </li>
                <li className="nav-item">
                    <Link to="/productos"><span className="icon">🥇</span></Link>
                </li>
                <li className="nav-item">
                    <Link to="/contacto"><span className="icon">📞</span></Link>
                </li>
                <li className="nav-item">
                    <Link to="/galeria"><span className="icon">📷</span></Link>
                </li>
            </ul>

            <div className="user">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
                    alt="Usuario"
                    className="avatar"
                />
                <span className="dropdown-icon">▼</span>
            </div>
        </div>
    );
};

export default Sidebar;
