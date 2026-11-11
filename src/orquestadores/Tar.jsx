
import Tarjeta from "./tarjeta";

export default function Tar({ tarjetas }) {
    return (
        <div className="contenido">
            <h2>Juegos de nuestra comunidad</h2>

            <div className="contenedor-juegos">
                {tarjetas.map((tarjeta) => (
                    <Tarjeta
                        key={tarjeta.id}
                        nombre={tarjeta.nombre}
                        genero={tarjeta.genero}
                        descripcion={tarjeta.descripcion}
                        imagen={tarjeta.imagen}
                        enlace={tarjeta.enlace}
                        color={tarjeta.color}
                    />
                ))}
            </div>
        </div>
    );
}
