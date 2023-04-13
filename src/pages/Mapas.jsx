import "../css/style_maps.scss";

import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import { CircleLoader } from "react-spinners";

const Agentes = () => {
  const url = "https://valorant-api.com/v1/maps";
  const [mapas, setMapas] = useState();
  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setMapas(responseJSON.data);
  };
  useEffect(() => {
    fetchApi();
  }, []);
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

export default Agentes;
