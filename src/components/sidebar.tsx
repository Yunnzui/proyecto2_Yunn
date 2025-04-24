import { Link } from 'react-router-dom';
import './sidebar.css';


function Sidebar() {
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
                <li className="nav-item">
                    <Link to="/tarjetas"><span className="icon">🃏</span></Link>
                </li>
                <li className="nav-item">
                    <Link to="/tanques"><span className="icon">Archivo Json</span></Link>
                </li>
            </ul>


        </div>
    );
}

export default Sidebar;