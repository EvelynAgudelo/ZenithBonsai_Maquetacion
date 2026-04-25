import "./Galeria.css";

function Galeria() {
    const items = [
    "Arce Japones",
    "Pino Negro",
    "Ficus Retusa",
    "Olmo Chino",
    "Enebro",
    "Azalea"
    ];

    return (
        <section className="galeria-container">
            <div className="galeria-content">
                <h1>Nuestra coleccion</h1>
                <p>
                Un vistazo a algunos de los ejemplares en los que hemos trabajado. Cada árbol cuenta una
                historia de tiempo y paciencia.
                </p>
                <div className="galeria-grid">
                    {items.map((item, index) => (
                    <div key={index} className="card">
                    <p>{item}</p>
                    </div>
                    )
                    )
                    }
                </div>
            </div>
        </section>
    );
}

export default Galeria