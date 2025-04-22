import React, { useState, useEffect } from 'react';
import alumnosData from '../data/alumnos.json';
import './Tarjetas.css';

interface Alumno {
    titulo: string;
    años: number;
    alumno: string;
    imagen: string;
}

const Tarjetas = () => {
    const [alumnos, setAlumnos] = useState<Alumno[]>([]);
    const [vista, setVista] = useState<'tabla' | 'tarjetas'>('tabla');

    useEffect(() => {
        setAlumnos(alumnosData); // cargamos datos desde JSON local
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Vista de Alumnos</h1>
            <button
                onClick={() => setVista(vista === 'tabla' ? 'tarjetas' : 'tabla')}
                className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                Cambiar a vista de {vista === 'tabla' ? 'Tarjetas' : 'Tabla'}
            </button>

            {vista === 'tabla' ? (
                <div className="overflow-auto">
                    <table className="min-w-full border border-gray-300 bg-white rounded-lg shadow-md">
                        <thead className="bg-blue-200 text-gray-800">
                            <tr>
                                <th className="p-3 text-left">Imagen</th>
                                <th className="p-3 text-left">Carrera</th>
                                <th className="p-3 text-left">Años</th>
                                <th className="p-3 text-left">Alumno</th>
                            </tr>
                        </thead>
                        <tbody>
                            {alumnos.map((item, index) => (
                                <tr key={index} className="border-t">
                                    <td className="p-3">
                                        <img src={item.imagen} alt={item.titulo} className="w-12 h-12 rounded" />
                                    </td>
                                    <td className="p-3 font-semibold">{item.titulo}</td>
                                    <td className="p-3">{item.años}</td>
                                    <td className="p-3">{item.alumno}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="tarjeta-container">
                    {alumnos.map((item, index) => (
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
            )}
        </div>
    );
};

export default Tarjetas;

