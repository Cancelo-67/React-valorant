import React, { useContext, useState } from "react";
import "../css/style_navbar.scss";
import { Link, NavLink } from "react-router-dom";
import logo from "../img/logo_transparent.png";
import { LoginContext } from "../context/LoginContext";
import Popup from "./PopUp";

const Navbar = () => {
  const { user, setUser } = useContext(LoginContext);
  const [isPopupOpen, setPopupOpen] = useState(false);

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
            <span className="nav_button-text">Agentes</span>
          </NavLink>
        ) : (
          <NavLink to="/register" className="nav_button">
            <span className="nav_button-text">Agentes</span>
          </NavLink>
        )}
        {user ? (
          <NavLink to="/armas" className="nav_button">
            <span className="nav_button-text">Armas</span>
          </NavLink>
        ) : (
          <NavLink to="/register" className="nav_button">
            <span className="nav_button-text">Armas</span>
          </NavLink>
        )}
        {user ? (
          <NavLink to="/mapas" className="nav_button">
            <span className="nav_button-text">Mapas</span>
          </NavLink>
        ) : (
          <NavLink to="/register" className="nav_button">
            <span className="nav_button-text">Mapas</span>
          </NavLink>
        )}
        {user ? (
          <NavLink to="/favoritos" className="nav_button">
            <span className="nav_button-text">Favoritos</span>
          </NavLink>
        ) : (
          <NavLink to="/register" className="nav_button">
            <span className="nav_button-text">Favoritos</span>
          </NavLink>
        )}
        {user ? (
          <NavLink to="/login" className="nav_button" onClick={cerrarSesion}>
            <span className="nav_button-text">Cerrar Sesion</span>
          </NavLink>
        ) : (
          <NavLink to="/login" className="nav_button">
            <span className="nav_button-text">Login</span>
          </NavLink>
        )}
        {user === true ? (
          <NavLink to="/perfil" className="nav_button">
            <span className="nav_button-text">Perfil</span>
          </NavLink>
        ) : (
          <NavLink to="/register" className="nav_button">
            <span className="nav_button-text">Registrarse</span>
          </NavLink>
        )}
      </nav>
      <Popup
        isOpen={isPopupOpen}
        onClose={() => setPopupOpen(false)}
        text={"Usuario logueado correctamente"}
      />
    </header>
  );
};

export default Navbar;
