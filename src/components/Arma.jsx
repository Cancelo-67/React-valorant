import { Box, Link, Text, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { CircleLoader } from "react-spinners";
import { Link as ChakraLink } from "react-router-dom";
import "../css/style_armas.scss";

const Arma = () => {
  const url = "https://valorant-api.com/v1/weapons";
  const [armas, setArmas] = useState();

  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setArmas(responseJSON.data);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <Box color="gray" py={4}>
      {!armas ? (
        <Box className="div_load" textAlign="center">
          <CircleLoader color="#b12f3a" />
        </Box>
      ) : (
        <SimpleGrid columns={3} spacing={8}>
          {armas.map((arma) => (
            <Box key={arma.uuid} color="gray" textAlign="center">
              <li>
                <Text backgroundColor={"#b12f3a"} fontSize={"18px"}>
                  {arma.displayName}
                </Text>
                <ChakraLink to={`/armas/${arma.uuid}`}>
                  <img
                    src={arma.displayIcon}
                    alt={arma.displayName}
                    boxSize="150px"
                  />
                </ChakraLink>
                {arma.weaponStats && (
                  <Text>Daño: {arma.weaponStats.fireRate}</Text>
                )}
              </li>
            </Box>
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default Arma;
