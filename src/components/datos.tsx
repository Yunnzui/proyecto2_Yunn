import './tabla.css';


const datos = [
  { nombre: 'Sanji', licenciatura: 'Gastronomía', anios: '4' },
  { nombre: 'Zoro', licenciatura: 'Educación Física', anios: '3' },
  { nombre: 'Robin', licenciatura: 'Arqueología', anios: '5' }
];

interface Alumno {
  nombre: string;
  licenciatura: string;
  anios: string;
}

function App() {
  return (
    <div className="container-tabla">
      <h2 className="titulo-tabla">📚 Listado de Carreras</h2>
      <table className="tabla-carreras">
        <thead>
          <tr>
            <th>Nombre del Alumno</th>
            <th>Licenciatura</th>
            <th>Años de Estudio</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((alumno: Alumno, index: number) => (
            <tr key={index}>
              <td>{alumno.nombre}</td>
              <td>{alumno.licenciatura}</td>
              <td>{alumno.anios}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
export { App, datos };
export type { Alumno };