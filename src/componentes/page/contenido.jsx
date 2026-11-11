import "../../style/contenido.css";
import Tarjeta from "../../orquestadores/tarjeta";
import FormularioPage from "./FormularioPage";
import inicio from "../data/inicio.json";
import juegos from "../data/data.json";

const generos = [
    "Terror",
    "Shooters",
    "Aventura",
    "Accion",
    "RPG",
    "Estrategia",
    "Deportes",
    "Logica"
];

function SeccionJuegos({ genero }) {
    const juegosFiltrados = juegos.filter(
        (juego) => juego.genero === genero
    );

    return (
        <div className="contenido">
            <p>
                Haz entrado a la seccion de {genero},
                disfruta de los juegos que tenemos para ti
            </p>

            <div className="contenedor-juegos">
                {juegosFiltrados.map((juego) => (
                    <Tarjeta
                        key={juego.id}
                        nombre={juego.nombre}
                        genero={juego.genero}
                        descripcion={juego.descripcion}
                        imagen={juego.imagen}
                        enlace={juego.enlace}
                    />
                ))}
            </div>
        </div>
    );
}

function Inicio() {
    return (
        <div className="contenido">
            <h2>No sabes que jugar?</h2>
            <p>
                Navega entre los juegos mas valorados
                por nuestra comunidad.
            </p>

            {inicio.length > 0 && (
                <div
                    className="juego-destacado"
                    style={{
                        backgroundImage: `url(${inicio[0].imagen})`
                    }}
                >
                    <div className="destacado-info">
                        <span className="destacado-genero">
                            {inicio[0].genero}
                        </span>

                        <h1>{inicio[0].nombre}</h1>

                        <p>{inicio[0].descripcion}</p>

                        <a
                            href={inicio[0].enlace}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="boton-destacado"
                        >
                            Ver juego
                        </a>
                    </div>
                </div>
            )}

            <h2 className="titulo-juegos">Más juegos</h2>

            <div className="contenedor-juegos">
                {inicio.slice(1).map((juego) => (
                    <Tarjeta
                        key={juego.id}
                        nombre={juego.nombre}
                        genero={juego.genero}
                        descripcion={juego.descripcion}
                        imagen={juego.imagen}
                        enlace={juego.enlace}
                    />
                ))}
            </div>
        </div>
    );
}

function Informacion() {
    return (
        <div className="contenido">
            <h2>Información</h2>

            <p>
                PIXY es una plataforma dedicada a los amantes del
                gaming, <br></br>trabajamos constantemente
                para satisfacer a <br></br>nuestros usuarios dia a dia,
                buscas algun juego? <br></br>aqui lo encontraras,
                y lo descargaras de la manera mas segura.
            </p>

            <div className="contenedor-info">
                <div className="info-tarjeta">
                    <img
                        className="pfl"
                        src={"/src/imagenes/info miembros/Ren-Hojo.jpg"}
                        alt="Foto de perfil"
                    />

                    <h3>Malaver</h3>

                    <p>
                        Desarrollador y conocedor de varios juegos
                        Malaver juega mucho valorant
                    </p>

                    <p>
                        Estudiada en Desarrollo de software (aun no termina)
                    </p>
                </div>

                <div className="info-tarjeta">
                    <img
                        className="pfl"
                        src={"/src/imagenes/info miembros/mio.jpg"}
                        alt="Foto de perfil"
                    />

                    <h3>Mimi</h3>

                    <p>
                        Desarrolladora y diseñadora de la estetica de la pagina
                    </p>

                    <p>
                        Estudiada en Desarrollo de software (aun no termina)
                    </p>
                </div>
            </div>
        </div>
    );
}

function Contacto() {
    return (
        <div className="contenido">
            <h2>Contacto</h2>

            <p>
                Ponte en contacto con nosotros.
            </p>
        </div>
    );
}

export default function Contenido({ seccion, tarjetas, agregar }) {
    if (seccion === "Inicio") {
        return <Inicio />;
    }

    if (seccion === "Informacion") {
        return <Informacion />;
    }

    if (seccion === "Contacto") {
        return <Contacto />;
    }

    if (seccion === "Subir") {
        return (
            <FormularioPage
                agregar={agregar}
                tarjetas={tarjetas}
            />
        );
    }

    const generoSeleccionado = generos.find(
        (genero) => genero === seccion
    );

    if (generoSeleccionado) {
        return <SeccionJuegos genero={generoSeleccionado} />;
    }

    return null;
}