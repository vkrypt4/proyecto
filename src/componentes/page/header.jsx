import "../../style/header.css";
import logo from "../../imagenes/logo, usuario/logo.png";
import user from "../../imagenes/logo, usuario/user.png";

export default function Header() {
    return (
        <header className="header">
            <img className="logo" src={logo} alt="Logo de PIXY" />
            <button className="user-btn" onClick={() => window.location.href = "/ver mas.html"}>
                <img className="user" src={user} alt="Usuario" />
            </button>
        </header>
    );
}
