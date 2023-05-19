import React, { useEffect, useState } from "react";
import { CircleLoader } from "react-spinners";
import { Box, Input } from "@chakra-ui/react";
import "../css/style_agentes.scss";
import corazonVacio from "../img/corazonVacio.svg";
import corazonLleno from "../img/corazonLleno.svg";
import { callApi } from "../helper/callApi";

const Agentes = () => {
  const favoritosInicial = JSON.parse(localStorage.getItem("favoritos")) || [];

  const url = "https://valorant-api.com/v1/agents?isPlayableCharacter=true";
  const [buscar, setBuscar] = useState(Boolean);
  const [favoritos, setFavoritos] = useState(favoritosInicial);
  const [agentes, setAgentes] = useState([]);
  const [loading, setLoading] = useState(true); // Si es false sale el spinner, si esta false carga el array
  const [agentesCargados, setagentesCargados] = useState(10);
  actualizarLocalStorage(favoritos);

  //Llamo a la funcion
  useEffect(() => {
    callApi(url).then((resuelto) => {
      const agentesActualizados = resuelto.map((agente) => ({
        ...agente,
        favoritos: false,
        corazonFav: corazonVacio,
      }));
      setAgentes(agentesActualizados);
      setLoading(false);
    });
  }, []);
  //Favoritos
  const handleBookmarks = (e, agente) => {
    if (agente.corazonFav === corazonLleno) {
      eliminarFavorito(e, agente);
    } else {
      añadirFavorito(e, agente);
    }
  };

  //Elimina del array el agente marcado
  const eliminarFavorito = (e, agente) => {
    agente.favoritos = false;
    e.target.src = corazonVacio;
    agente.corazonFav = corazonVacio;
    setFavoritos(favoritos.filter((item) => item.uuid !== agente.uuid));
    console.log(favoritos);
    console.log("eliminado");
    ///cambiar el corazon
    // descargo favoritos, lo recorro, elimino el elemento que ha selecconado y lo vuelvo a subir.
  };
  //Añade el agente marcado al array
  const añadirFavorito = (e, agente) => {
    agente.favoritos = true;
    e.target.src = corazonLleno;
    agente.corazonFav = corazonLleno;
    setFavoritos([...favoritos, agente]);
    console.log(favoritos);
    console.log("añadido");
    ///cambiar el corazon
    // descarego favoritos, añado el elemento que ha selecconado y lo vuelvo a subir.
  };
  console.log(favoritos);

  //Actualizara el localstorage cada vez que elimino o añado algo al array
  function actualizarLocalStorage(favoritos) {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }

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

  //Scroll infinito
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
            favoritos.map((agenteFav) => {
              if (agenteFav.uuid === agente.uuid) {
                agente.corazonFav = agenteFav.corazonFav;
              }
            });
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
                  <img width="30px" src={agente.corazonFav} />
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
