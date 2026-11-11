
import { useState } from "react";
import Formulario from "./Formulario";
import Tar from "../../orquestadores/Tar";
import useFormulario from "../../hooks/useFormulario";

export default function FormularioPage({ agregar, tarjetas }) {
    const [vista, setVista] = useState("formulario");

    const volver = () => {
        setVista("lista");
    };

    const props = useFormulario({ agregar, volver });

    return (
        <div>
            {vista === "formulario" ? (
                <Formulario {...props} />
            ) : (
                <>
                    <Tar tarjetas={tarjetas} />

                    <div className="botones-formulario">
                        <button onClick={() => setVista("formulario")}>
                            Publicar otro juego
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}
