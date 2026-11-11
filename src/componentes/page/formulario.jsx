import "../../style/formulario.css";
export default function Formulario({
    datos,
    cambiar,
    enviar,
    reset,
    volver
}) {
    const campos = [
        { nombre: "Nombre", etiqueta: "Título del videojuego", tipo: "text" },
        { nombre: "Imagen", etiqueta: "Link de la imagen", tipo: "url" },
        { nombre: "Descripcion", etiqueta: "Descripción", tipo: "textarea" },
        { nombre: "Color", etiqueta: "Color de la tarjeta", tipo: "color" }
    ];

    return (
        <div className="contenido">
            <h2>Publica tu videojuego</h2>

            <p>
                ¿Eres creador de videojuegos? Comparte tu creación
                con nuestra comunidad.
            </p>

            <form onSubmit={enviar} className="formulario-subir">

                {campos.map((campo) => (
                    <div className="campo-formulario" key={campo.nombre}>
                        <label>{campo.etiqueta}</label>

                        {campo.tipo === "textarea" ? (
                            <textarea
                                name={campo.nombre}
                                value={datos[campo.nombre]}
                                onChange={cambiar}
                                placeholder="Escribe la descripción de tu juego"
                            />
                        ) : (
                            <input
                                type={campo.tipo}
                                name={campo.nombre}
                                value={datos[campo.nombre]}
                                onChange={cambiar}
                                required={campo.nombre !== "Color"}
                            />
                        )}
                    </div>
                ))}

                <div className="botones-formulario">
                    <button type="submit">Publicar juego</button>

                    <button type="button" onClick={reset}>
                        Limpiar
                    </button>

                    <button type="button" onClick={volver}>
                        Volver
                    </button>
                </div>

            </form>
        </div>
    );
}
