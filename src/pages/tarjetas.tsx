
import React from 'react';
import './tarjetas.css';

const datos = [
    {
        titulo: 'Ingeniería en Sistemas',
        años: 3,
        alumno: 'Yunnuen Pulido',
        imagen: 'https://cdn-icons-png.flaticon.com/512/2721/2721293.png',
    },
    {
        titulo: 'Ingeniería Mecanica',
        años: 4,
        alumno: 'Zoro',
        imagen: 'https://cdn-icons-png.flaticon.com/512/1995/1995476.png',
    },
    {
        titulo: 'Medico General',
        años: 3.5,
        alumno: 'Trafalgar D. Water Law',
        imagen: 'https://cdn-icons-png.flaticon.com/512/387/387561.png',
    },
    {
        titulo: 'Meteorología',
        años: 5,
        alumno: 'Nami',
        imagen: 'https://cdn-icons-png.flaticon.com/512/3076/3076129.png',
    },
];

const Tarjetas = () => {
    return (
        <div className="tarjeta-container">
            {datos.map((item, index) => (
                <div className="tarjeta" key={index}>
                    <img src={item.imagen} alt={item.titulo} />
                    <div className="tarjeta-info">
                        <h3>{item.titulo}</h3>
                        <p>Años de estudio: {item.años}</p>
                        <p><strong>Alumno:</strong> {item.alumno}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Tarjetas;
