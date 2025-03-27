import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import "./Navbar.css"; // Archivo para estilos personalizados
import Carrusel from "../carrusel/Carrusel";


const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img
              src="/image_transparent.png"
              className="img-fluid"
              alt="logo"
              width={130}
              height={100}
            />
            <h1 className="ms-2 text-primary fs-2">LUMAFER</h1>
          </a>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <Menu size={30} color="var(--bs-primary)" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link custom-hover fs-5" to="/">Inicio</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link custom-hover fs-5" to="/nosotros">Nosotros</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link custom-hover fs-5" to="/servicios">Servicios</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link custom-hover fs-5" to="/contacto" >Contacto</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Carrusel />
    </>
  );
};

export default Navbar;
