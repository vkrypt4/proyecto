
import "../style/tarjeta.css";

export default function Tarjeta({
    nombre,
    genero,
    descripcion,
    imagen,
    enlace,
    color
}) {
    return (
        <article
            className="tarjeta"
            style={color ? { backgroundColor: color } : {}}
        >
            <img
                className="imagen-juego"
                src={imagen}
                alt={`Portada de ${nombre}`}
            />

            <div className="info-juego">
                <h2>{nombre}</h2>

                <span className="genero">
                    {genero || "Creado por la comunidad"}
                </span>

                <p>{descripcion}</p>

                {enlace && (
                    <a
                        className="boton-juego"
                        href={enlace}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Ver más
                    </a>
                )}
            </div>
        </article>
    );
}
