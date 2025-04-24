import './galeria.css';
import img1 from "../assets/image.png";
import img2 from "../assets/ace.png.jpg";
import img3 from "../assets/law.png.jpg";
import img4 from "../assets/zoro.png.jpg";

const Gallery = () => {
  const images = [img1, img2, img3, img4];

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Galería de Imágenes</h1>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image} alt={`Imagen ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
