import React, { useContext } from "react";
import "../css/style_footer.scss";
import { NavLink } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";

const Footer = () => {
  const { user, setUser } = useContext(LoginContext);

  return (
    <footer className="footer">
      <nav className="nav_footer">
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
      </nav>
    </footer>
  );
};

export default Footer;
