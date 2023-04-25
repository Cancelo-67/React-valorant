import "../css/style_maps.scss";

import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import { CircleLoader } from "react-spinners";

const Mapas = () => {
  const url = "https://valorant-api.com/v1/maps";
  const [mapas, setMapas] = useState();
  const [mapasCargados, setmapasCargados] = useState([]);
  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setMapas(responseJSON.data);
  };
  useEffect(() => {
    fetchApi();
  }, []);

  useEffect(() => {
    function handleScroll() {
      const bottom =
        Math.ceil(window.innerHeight + window.scrollY) >=
        document.documentElement.scrollHeight;
      if (bottom) {
        // si llega al final de la página, carga más elementos
        setmapasCargados(mapasCargados + 5); // cargas 5 elementos mas
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mapasCargados]);
  return (
    <Box background={"gray"}>
      <ul className="ul_mapas">
        {!mapas ? (
          <CircleLoader color="#b12f3a" />
        ) : (
          mapas.map((mapa) => {
            return (
              <li id={mapa.uuid}>
                <img src={mapa.splash} />
                <p>{mapa.displayName}</p>
              </li>
            );
          })
        )}
      </ul>
    </Box>
  );
};

export default Mapas;
