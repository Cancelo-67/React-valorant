import React, { useEffect, useState } from "react";
import { CircleLoader } from "react-spinners";
import { Box, Input } from "@chakra-ui/react";
import "../css/style_agentes.scss";
import corazonVacio from "../img/heart-regular.svg";
import corazonLleno from "../img/heart-solid.svg";
import { callApi } from "../helper/callApi";

const Agentes = () => {
  const url = "https://valorant-api.com/v1/agents?isPlayableCharacter=true";
  const [buscar, setBuscar] = useState(Boolean);
  //Array donde se guardara el objeto agente
  //const [favoritos, setFavoritos] = useState([])
  const [selectedAgente, setSelectedAgente] = useState("");

  const [favoritos, setFavoritos] = useState([]);
  const [agentes, setAgentes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [agentesCargados, setagentesCargados] = useState(10);

  //Llamo a la funcion
  useEffect(() => {
    callApi(url).then((resuelto) => {
      const agentesActualizados = resuelto.map((agente) => ({
        ...agente,
        favoritos: false,
      }));
      setAgentes(agentesActualizados);
      setLoading(false);
    });
  }, []);

  //Favoritos
  const handleBookmarks = (e, agente) => {
    setSelectedAgente(agente);

    if (e.target.src === "http://localhost:5173/src/img/heart-regular.svg") {
      añadirFavorito(e, agente);
    } else {
      eliminarFavorito(e, agente);
    }
  };

  //Elimina del array el agente marcado
  const eliminarFavorito = (e, agente) => {
    e.target.src = corazonVacio;
    const posi = favoritos
      .map((object) => object.displayName)
      .indexOf(agente.displayName);
    favoritos.splice(posi, 1);
    console.log("eliminado");
    console.log(favoritos);
    ///cambiar el corazon
    // descargo favoritos, lo recorro, elimino el elemento que ha selecconado y lo vuelvo a subir.
  };
  //Añade el agente marcado al array
  const añadirFavorito = (e, agente) => {
    e.target.src = corazonLleno;
    console.log("añadido");
    favoritos.push(agente);
    console.log(favoritos);
    ///cambiar el corazon
    // descarego favoritos, añado el elemento que ha selecconado y lo vuelvo a subir.
  };
  //Busqueda de personajes
  const buscador = (e) => {
    setBuscar(e.target.value);
  };
  //Devuelve el personaje introducido en el input filtrado por el nombre
  let resultado = !buscar
    ? agentes.slice(0, agentesCargados)
    : agentes
        .filter((dato) =>
          dato.displayName.toLowerCase().includes(buscar.toLocaleLowerCase())
        )
        .slice(0, agentesCargados);

  useEffect(() => {
    function handleScroll() {
      const bottom =
        Math.ceil(window.innerHeight + window.scrollY) >=
        document.documentElement.scrollHeight;
      if (bottom) {
        // si llega al final de la página, carga más elementos
        setagentesCargados(agentesCargados + 5); // cargas 5 elementos mas
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [agentesCargados]);

  return (
    <Box className="div_agente" background={"gray"}>
      <Input
        onChange={buscador}
        type="text"
        autoComplete="off"
        width={500}
        placeholder="Buscar personaje"
        background={"white"}
      />
      <ul className="ul_agente">
        {loading ? (
          <CircleLoader color="#b12f3a" />
        ) : (
          resultado.map((agente, index) => {
            return (
              <li key={index} className="li_agente">
                <p>{agente.displayName}</p>
                <img
                  src={agente.bustPortrait}
                  alt={`Imagen de ${agente.displayName}`}
                />
                <p>{agente.role.displayName}</p>
                <button
                  key={agente.uuid}
                  onClick={(e) => handleBookmarks(e, agente)}
                >
                  <img width="30px" src={corazonVacio} />
                </button>
              </li>
            );
          })
        )}
      </ul>
    </Box>
  );
};

export default Agentes;
