import {Link} from "react-router-dom";

function Header(){
    return(
        <nav className="navbar">
            <Link className="logo" to="/">
                Zenith Bonsái
            </Link>
            <div className="nav-links">
                <Link to="/Filosofia">Filosofía</Link>
                <Link to="/Galeria">Galería</Link>
                <Link to="/Reservas">Reservas</Link>
            </div>
        </nav>
    );
}

export default Header;