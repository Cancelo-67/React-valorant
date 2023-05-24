import { Box } from "@chakra-ui/react";
import Arma from "../components/Arma";
import "../css/style_armas.scss";

const Agentes = () => {
  return (
    <Box bg="gray" color="gray" py={8}>
      <Box maxW="container.lg" mx="auto">
        <Arma />
      </Box>
    </Box>
  );
};

export default Agentes;
