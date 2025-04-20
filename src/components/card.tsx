interface CardProps {
    licenciatura: string;
    anios: number;
    autor: string;
}

const Card = ({ licenciatura, anios, autor }: CardProps) => {
    return (
        <div className="card">
            <h3>{licenciatura}</h3>
            <p>Años de estudio: {anios}</p>
            <p>Autor: {autor}</p>
        </div>
    );
};

export default Card;
