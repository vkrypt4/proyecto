
import { useState } from "react";

export default function useFormulario({ agregar, volver }) {
    const [datos, setDatos] = useState({
        Nombre: "",
        Imagen: "",
        Descripcion: "",
        Color: ""
    });

    const cambiar = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        });
    };

    const enviar = (e) => {
        e.preventDefault();

        if (!datos.Nombre || !datos.Imagen || !datos.Descripcion) {
            alert("Completa todos los campos");
            return;
        }

        agregar({
            id: Date.now(),
            nombre: datos.Nombre,
            imagen: datos.Imagen,
            descripcion: datos.Descripcion,
            color: datos.Color,
            genero: "Comunidad",
            enlace: ""
        });

        reset();
        volver();
    };

    const reset = () => {
        setDatos({
            Nombre: "",
            Imagen: "",
            Descripcion: "",
            Color: ""
        });
    };

    return {
        datos,
        cambiar,
        enviar,
        reset,
        volver
    };
}
