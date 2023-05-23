import React, { useContext } from "react";
import "../css/style_navbar.scss";
import { Link, NavLink } from "react-router-dom";
import logo from "../img/logo_transparent.png";
import { LoginContext } from "../context/LoginContext";

const Navbar = () => {
  const { user, setUser } = useContext(LoginContext);

  const cerrarSesion = () => {
    setUser(false);
    localStorage.removeItem("usuarioActual");
  };

  return (
    <header className="div_nav">
      <Link to={"/"}>
        <img src={logo} alt="logo_valorant" className="img_nav" />
      </Link>
      <nav className="container_nav">
        {user ? (
          <NavLink to="/agentes" className="nav_button">
            Agentes
          </NavLink>
        ) : (
          <NavLink to="/register" className="nav_button">
            Agentes
          </NavLink>
        )}
        {user ? (
          <NavLink to="/armas" className="nav_button">
            Armas
          </NavLink>
        ) : (
          <NavLink to="/register" className="nav_button">
            Armas
          </NavLink>
        )}
        {user ? (
          <NavLink to="/mapas" className="nav_button">
            Mapas
          </NavLink>
        ) : (
          <NavLink to="/register" className="nav_button">
            Mapas
          </NavLink>
        )}
        {user ? (
          <NavLink to="/favoritos" className="nav_button">
            Favoritos
          </NavLink>
        ) : (
          <NavLink to="/register" className="nav_button">
            Favoritos
          </NavLink>
        )}
        {user ? (
          <NavLink to="/login" className="nav_button" onClick={cerrarSesion}>
            Cerrar Sesion
          </NavLink>
        ) : (
          <NavLink to="/login" className="nav_button">
            Login
          </NavLink>
        )}
        {user === true ? (
          <NavLink to="/perfil" className="nav_button">
            Perfil
          </NavLink>
        ) : (
          <NavLink to="/register" className="nav_button">
            Registrarse
          </NavLink>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
