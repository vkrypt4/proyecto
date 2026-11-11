
import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";

import Navbar from "./componentes/page/Navbar";
import Header from "./componentes/page/header";
import Contenido from "./componentes/page/contenido";
import useTarjetas from "./hooks/useTarjetas";

function App() {
    const [seccion, setSeccion] = useState("Inicio");

    const { tarjetas, agregar } = useTarjetas();

    return (
        <>
            <Header />

            <Navbar cambiarSeccion={setSeccion} />

            <Contenido
                seccion={seccion}
                tarjetas={tarjetas}
                agregar={agregar}
            />
        </>
    );
}

export default App;

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);
