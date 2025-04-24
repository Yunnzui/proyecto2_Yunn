import './home.css';

const Inicio = () => {
    return (
        <div className="inicio-container">
            <div className="inicio-card">
                <h1 className="inicio-title">Bienvenido a Mi Proyecto de Evalución</h1>
                <p className="inicio-text">
                    Explora nuestras secciones, conoce nuestros productos, visita la galería o contáctanos.
                </p>
                <div className="inicio-buttons">
                    <a href="/productos" className="btn">Ver Productos</a>
                    <a href="/galeria" className="btn btn-secundario">Ir a Galería</a>
                    <a href="/contacto" className="btn btn-contacto">Contacto</a>
                </div>
            </div>
        </div>
    );
};

export default Inicio;
