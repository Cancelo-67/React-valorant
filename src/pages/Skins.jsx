import { Center, VStack, Box, Text, SimpleGrid } from "@chakra-ui/react";
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
    <Center bg="gray" py={8}>
      <VStack spacing={4}>
        <Box as="ul" className="ul_skins" listStyleType="none">
          {!skins ? (
            <CircleLoader color="#b12f3a" />
          ) : (
            <SimpleGrid columns={3} spacing={4}>
              {skins.map((skin) => {
                if (
                  skin.displayName.includes("Standard") ||
                  skin.displayName === "Random Favorite Skin" ||
                  skin.displayName === "Melee" ||
                  skin.displayName === "Luxe Knife" ||
                  skin.displayName === "Sovereign Marshal" ||
                  skin.displayName === "Nitro Odin"
                ) {
                  return null;
                } else {
                  return (
                    <Box key={skin.uuid} textAlign="center">
                      <Text backgroundColor={"#b12f3a"} borderRadius={"6px"}>
                        {skin.displayName}
                      </Text>
                      <img src={skin.displayIcon} alt={skin.displayName} />
                    </Box>
                  );
                }
              })}
            </SimpleGrid>
          )}
        </Box>
      </VStack>
    </Center>
  );
};

export default Arma1;
