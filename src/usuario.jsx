import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Usuario from "./componentes/user";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Usuario />
    </StrictMode>
);