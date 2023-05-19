import { Box } from "@chakra-ui/react";
import React from "react";
import { CircleLoader } from "react-spinners";
import "../css/style_agentes.scss";

const Favoritos = () => {
  let datos = JSON.parse(localStorage.getItem("favoritos"));

  return (
    <Box className="div_agente" background={"gray"}>
      <ul className="ul_agente">
        {!datos ? (
          <CircleLoader color="#b12f3a" />
        ) : (
          datos.map((agenteFav, index) => {
            return (
              <li className="li_agente" key={index} background={"red"}>
                {agenteFav.displayName}
                <img src={agenteFav.bustPortrait} />
              </li>
            );
          })
        )}
      </ul>
    </Box>
  );
};
export default Favoritos;
