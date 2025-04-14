import './Description.css';
import image_tech from '../assets/p3.png';
function Description(){
    return(
<div className="login-container">
      <div className="login-form">
        <h2>Desarrollo de Aplicaciones</h2>
        <h3>Proyecto Final #2</h3>
        <fieldset className='legend'>
            <legend>Requerimientos de Entrega</legend>
          <p className='login-p'>1. Crear un componente de tipo SideBar izquierda o derecha con enlaces (Inicio, Productos
            Contacto, Galeria)</p>
          <p className='login-p'>2. Crear un componente de Card y reutilizarlo 2 veces mas posicionarlo de esta manera
            cada una de las Cards debe mostrar los siguientes datos:
            Licenciatura  a;os de estudio. AL final debe decir tu nombre y todos los datos deben ser dinamicos
            jalados con propiedades personalizadas 
           <p className='image-cards'><img src="../../public/tarjetas.png" alt="tarjetas" width={350} height={250} /> </p>
           </p>
            <p className='login-p'>3. Crear un componente dinamico que jale los datos de un archivo JSON y los
              acomode en un formato especifico o tabla.

            </p>
            <p className='login-p'>4. Todas las paginas deben tener dise;o con archivo CSS
            </p>
            <p className='login-p'>4. En el footer deebe tener su nombre y cuatrimestre
            </p>

        </fieldset>
      </div>
      <div className="login-image">
        <img src={image_tech} alt="Login visual" />
      </div>
    </div>
    );
}
export default Description