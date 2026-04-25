import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <main className="hero-section">
      <div className="hero-content">
        <h1>El arte de la paciencia</h1>
        <p>
          Descubre la serenidad a través del cuidado y diseño de árboles Bonsái.
          Un espacio para reconectar con la naturaleza.
        </p>

        <Link to="../../pages/Reservas.jsx" className="btn">
          Reserva un taller
        </Link>
      </div>

      <div className="hero-image"></div>
    </main>
  );
}

export default Hero;