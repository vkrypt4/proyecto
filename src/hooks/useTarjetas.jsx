
import { useState } from "react";

export default function useTarjetas() {
    const [tarjetas, setTarjetas] = useState([]);

    const agregar = (nueva) => {
        setTarjetas([...tarjetas, nueva]);
    };

    return { tarjetas, agregar };
}
