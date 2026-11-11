import "../../style/Usuario.css";

export default function Usuario() {
    return (
        <div className="perfil">
            <div className="banner"></div>


            <div className="perfil-principal">

                <div className="foto-perfil-container">
                    <img className="foto-perfil"src={"/src/imagenes/logo, usuario/piel de codoo.png"} alt="Foto de perfil"/>
                </div>

                <div className="info-usuario">
                    <h1>
                        Mimi
                    </h1>
                    <p>@usuario</p>
                </div>

                <button className="boton-editar" onClick={() => window.location.href = "/index.html"}>
                    Volver
                    </button>

            </div>

            <div className="perfil-contenido">


                <section className="perfil-card">
                    <h2>Sobre mí</h2>

                    <p>
                        mi piel es como la de un codo
                    </p>
                </section>

                <section className="perfil-card">
                    <h2>Estadísticas</h2>

                    <div className="estadisticas">

                        <div className="estadistica">
                            <span>🎮</span>
                            <h3>0</h3>
                            <p>Juegos</p>
                        </div>

                        <div className="estadistica">
                            <span>⭐</span>
                            <h3>0</h3>
                            <p>Favoritos</p>
                        </div>

                        <div className="estadistica">
                            <span>🏆</span>
                            <h3>0</h3>
                            <p>Logros</p>
                        </div>

                    </div>
                </section>


                <section className="perfil-card">
                    <h2>Juegos favoritos</h2>

                    <div className="juegos-vacios">
                        <span>🎮</span>
                        <p>Aún no tienes juegos favoritos.</p>
                    </div>
                </section>

            </div>

        </div>
    );
}