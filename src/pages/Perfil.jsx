import { Box } from "@chakra-ui/react";
import React from "react";

const Perfil = () => {
  const usuarioLogueado = JSON.parse(localStorage.getItem("usuarioActual"));
  return (
    <Box backgroundColor={"gray"}>
      <div className="ul_mapas">
        <p>Nombre:{usuarioLogueado.nombre}</p>
        <p>Apellidos:{usuarioLogueado.apellidos}</p>
        <p>Correo Electronico:{usuarioLogueado.email}</p>
      </div>
    </Box>
  );
};

export default Perfil;
