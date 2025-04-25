import React, { useEffect, useState } from 'react';
import './TanqueTable.css';

interface Tanque {
    tanque: string;
    Nacion: string;
    precio: number;
}

const TanqueTable: React.FC = () => {
    const [datos, setDatos] = useState<Tanque[]>([]);

    useEffect(() => {
        fetch('/tanques.json')
            .then(res => res.json())
            .then(data => setDatos(data))
            .catch(err => console.error("Error al cargar JSON:", err));
    }, []);

    return (
        <div className="tanque-container">
            <h2 className="tanque-title">Lista de Tanques</h2>
            <table className="tanque-table">
                <thead>
                    <tr>
                        <th>Tanque</th>
                        <th>Nación</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {datos.map((item, index) => (
                        <tr key={index}>
                            <td>{item.tanque}</td>
                            <td>{item.Nacion}</td>
                            <td>{item.precio}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TanqueTable;
