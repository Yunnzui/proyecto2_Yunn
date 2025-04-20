import './card.css';
import 'bootstrap/dist/css/bootstrap.min.css';

interface CardProps {
    licenciatura: string;
    anios: string;
    alumno: string;
}

function Card({ licenciatura, anios, alumno }: CardProps) {
    const obtenerImagen = (licenciatura: string): string => {
        switch (licenciatura.toLowerCase()) {
            case 'ingeniería en sistemas':
                return 'https://cdn-icons-png.flaticon.com/512/1055/1055687.png';
            case 'ingeniería mecanica':
                return 'https://cdn-icons-png.flaticon.com/512/2942/2942842.png';
            case 'medico general':
                return 'https://cdn-icons-png.flaticon.com/512/3774/3774299.png';
            case 'administración de empresas':
                return 'https://cdn-icons-png.flaticon.com/512/2070/2070864.png'; // Imagen de Administración de Empresas
            default:
                return 'https://cdn-icons-png.flaticon.com/512/565/565547.png'; // imagen por defecto
        }
    };

    return (
        <div className="card">
            <img src={obtenerImagen(licenciatura)} alt={licenciatura} className="card-img" />
            <div className="card-info">
                <h3>{licenciatura}</h3>
                <p>Años de estudio: {anios}</p>
                <p className="alumno">Alumno: {alumno}</p>
            </div>
        </div>
    );
}

function App() {
    return (
        <div className="card-container">
            <Card licenciatura="Ingeniería en Sistemas" anios="3" alumno="Yunnuen Pulido" />
            <Card licenciatura="Ingeniería Mecanica" anios="4" alumno="Zoro" />
            <Card licenciatura="Medico General" anios="3.5" alumno="Trafalgar D. Water Law" />
            <Card licenciatura="Administración de Empresas" anios="5" alumno="Nami" />
        </div>
    );
}

export default App;
export { Card, App };
