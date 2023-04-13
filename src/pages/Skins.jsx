import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CircleLoader } from "react-spinners";

const Arma1 = () => {
  const idArma = useParams();
  const [skins, setSkins] = useState();
  let url = `https://valorant-api.com/v1/weapons/${idArma.arma}`;

  const callApi = () => {
    axios.get(url).then((response) => {
      setSkins(response.data.data.skins);
    });
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div>
      <ul>
        {!skins ? (
          <CircleLoader color="#b12f3a" />
        ) : (
          skins.map((skin) => {
            if (
              skin.displayName.includes("Standard") ||
              skin.displayName === "Random Favorite Skin" ||
              skin.displayName === "Melee" ||
              skin.displayName === "Luxe Knife" ||
              skin.displayName === "Sovereign Marshal"
            ) {
              return null;
            } else {
              return (
                <li key={skins.uuid}>
                  <p>{skin.displayName}</p>
                  <img src={skin.displayIcon} alt="" />
                </li>
              );
            }
          })
        )}
      </ul>
    </div>
  );
};

export default Arma1;
