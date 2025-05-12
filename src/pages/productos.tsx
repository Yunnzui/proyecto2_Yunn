import React from 'react';
import './productos.css';

const productos = [
    {
        id: 1,
        nombre: 'Audífonos Gamer',
        descripcion: 'Alta fidelidad y comodidad para largas sesiones.',
        imagen: 'https://cdn-icons-png.flaticon.com/512/1063/1063245.png',
    },
    {
        id: 2,
        nombre: 'Mouse RGB',
        descripcion: 'Ergonómico con luces LED personalizables.',
        imagen: 'https://cdn-icons-png.flaticon.com/512/4571/4571042.png',
    },
    {
        id: 3,
        nombre: 'Teclado Mecánico',
        descripcion: 'Ideal para gaming y trabajo con gran respuesta.',
        imagen: 'https://cdn-icons-png.flaticon.com/512/3127/3127903.png',
    },
    {
        id: 4,
        nombre: 'Monitor Curvo',
        descripcion: 'Full HD 144Hz para una experiencia envolvente.',
        imagen: 'https://cdn-icons-png.flaticon.com/512/1198/1198365.png',
    },
];

const Productos: React.FC = () => {
    return (
        <main className="productos-container">
            <h1 className="titulo">Nuestros Productos</h1>
            <div className="productos-grid">
                {productos.map((prod) => (
                    <div key={prod.id} className="producto-card">
                        <img src={prod.imagen} alt={prod.nombre} className="producto-img" />
                        <h2 className="producto-nombre">{prod.nombre}</h2>
                        <p className="producto-desc">{prod.descripcion}</p>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Productos;