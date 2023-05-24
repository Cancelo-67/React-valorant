import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { CircleLoader } from "react-spinners";
import "../css/style_agentes.scss";
import corazonVacio from "../img/corazonVacio.svg";

const Favoritos = () => {
  const usuarioLogueado = JSON.parse(localStorage.getItem("usuarioActual"));
  const nombre = usuarioLogueado.nombre;
  const apellidos = usuarioLogueado.apellidos;
  const favClave = `favorite_${nombre}_${apellidos}`;
  let favIni = JSON.parse(localStorage.getItem(favClave))
    ? JSON.parse(localStorage.getItem(favClave))
    : [];
  const [fav, setFav] = useState(favIni);

  const actualizarLocalStorage = () => {
    localStorage.setItem(favClave, JSON.stringify(fav));
  };

  actualizarLocalStorage();

  //Funcion que eliminara a los favoritos del array
  const deleteBookmarks = (e, agenteFav) => {
    agenteFav.corazonFav == corazonVacio;
    setFav(fav.filter((item) => item.uuid !== agenteFav.uuid));
  };

  return (
    <Box className="div_agente" background={"gray"}>
      <ul className="ul_agente">
        {!fav ? (
          <CircleLoader color="#b12f3a" />
        ) : (
          fav.map((agenteFav, index) => {
            return (
              <li className="li_agente" key={index} background={"red"}>
                {agenteFav.displayName}
                <img src={agenteFav.bustPortrait} />
                <button
                  key={agenteFav.uuid}
                  onClick={(e) => deleteBookmarks(e, agenteFav)}
                >
                  <img width="30px" src={agenteFav.corazonFav} />
                </button>
              </li>
            );
          })
        )}
      </ul>
    </Box>
  );
};
export default Favoritos;
