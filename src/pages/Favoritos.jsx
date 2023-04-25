import { Box } from "@chakra-ui/react";
import React from "react";
import { CircleLoader } from "react-spinners";

const Favoritos = () => {
  let datos = JSON.parse(localStorage.getItem("favoritos"));

  console.log(datos);

  return (
    <Box>
      {!datos ? (
        <CircleLoader color="#b12f3a" />
      ) : (
        datos.map((agenteFav, index) => {
          return <li key={index}>{agenteFav.displayName}</li>;
        })
      )}
    </Box>
  );
};
export default Favoritos;
