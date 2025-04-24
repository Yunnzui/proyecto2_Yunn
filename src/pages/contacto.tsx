import React from 'react';
import './contacto.css';

const Contacto = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert('Formulario enviado');
    };

    return (
        <div className="contacto-container">
            <h1 className="contacto-titulo">Formulario de Contacto</h1>
            <form className="contacto-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Tu nombre" required />
                <input type="email" placeholder="Tu correo electrónico" required />
                <label htmlFor="tema-select">Selecciona un tema:</label>
                <select id="tema-select" required>
                    <option value="">Selecciona un tema</option>
                    <option value="consulta">Consulta</option>
                    <option value="soporte">Soporte</option>
                    <option value="sugerencia">Sugerencia</option>
                </select>
                <textarea placeholder="Tu mensaje" rows={4} required></textarea>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default Contacto;
