
import { useState } from "react";
import "../../style/Navbar.css";

export default function Navbar({ cambiarSeccion }) {
    const [menuAbierto, setMenuAbierto] = useState(false);
    const [busqueda, setBusqueda] = useState("");

    const seleccionarSeccion = (seccion) => {
        cambiarSeccion(seccion);
        setMenuAbierto(false);
    };

    return (
        <nav className="navbar">
            <button
                className="menu-btn"
                onClick={() => setMenuAbierto(!menuAbierto)}
            >
                ☰
            </button>

            <div className={`menu ${menuAbierto ? "activo" : ""}`}>
                <button onClick={() => seleccionarSeccion("Inicio")}>Inicio</button>
                <button onClick={() => seleccionarSeccion("Terror")}>Terror</button>
                <button onClick={() => seleccionarSeccion("Shooters")}>Shooters</button>
                <button onClick={() => seleccionarSeccion("Aventura")}>Aventura</button>
                <button onClick={() => seleccionarSeccion("Accion")}>Accion</button>
                <button onClick={() => seleccionarSeccion("RPG")}>RPG</button>
                <button onClick={() => seleccionarSeccion("Estrategia")}>Estrategia</button>
                <button onClick={() => seleccionarSeccion("Deportes")}>Deportes</button>
                <button onClick={() => seleccionarSeccion("Logica")}>Logica</button>

                <button onClick={() => seleccionarSeccion("Subir")}>Subir</button>

                <button onClick={() => seleccionarSeccion("Informacion")}>Información</button>
                <button onClick={() => seleccionarSeccion("Contacto")}>Contacto</button>

                <div className="buscador">
                    <input
                        type="text"
                        placeholder="Buscar"
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                    />
                    <button className="buscar-btn">+</button>
                </div>
            </div>
        </nav>
    );
}
