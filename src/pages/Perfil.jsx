import { Box } from "@chakra-ui/react";
import React from "react";

const Perfil = () => {
  const usuarioLogueado = JSON.parse(localStorage.getItem("usuarioActual"));
  const nombre = usuarioLogueado.nombre;
  const apellidos = usuarioLogueado.apellidos;
  const favClave = `favorite_${nombre}_${apellidos}`;
  const datosUsuario = localStorage.getItem(favClave);
  return (
    <Box backgroundColor={"gray"}>
      <div className="ul_mapas">
        <p>Nombre:{datosUsuario.nombre}</p>
        <p>Apellidos:{datosUsuario.apellidos}</p>
        <p>Correo Electronico:{datosUsuario.email}</p>
      </div>
    </Box>
  );
};

export default Perfil;
