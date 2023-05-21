import {
  Center,
  VStack,
  FormControl,
  Input,
  FormLabel,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../css/style_iniciosesion.scss";

const InicioSesion = () => {
  const [show, setShow] = React.useState(false);
  const { register, handleSubmit } = useForm({ mode: "onChange" });
  const handleClick = () => setShow(!show);
  const navigate = useNavigate();
  const usuarios = JSON.parse(localStorage.getItem("usuarios"));

  const onSubmit = (datos) => {
    const { email, contraseña } = datos;
    usuarios.map((usuario) => {
      if (
        usuario.email === datos.email &&
        usuario.contraseña === datos.contraseña
      ) {
        navigate("/");
      }
    });
  };

  return (
    <Center alignContent="center" justify="center" background={"gray"}>
      <VStack>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email */}
          <FormControl marginBottom={10} marginTop={10}>
            <FormLabel>Email</FormLabel>
            <Input
              autoComplete="off"
              type="name"
              placeholder="Email"
              background={"white"}
              {...register("email")}
            />
          </FormControl>
          {/* Contraseña */}
          <FormControl marginBottom={10}>
            <FormLabel>Contraseña</FormLabel>
            <InputGroup>
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Contraseña"
                background={"white"}
                {...register("contraseña")}
              />
              <InputRightElement width="4.75rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Ocultar" : "Ver"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Button marginBottom={10} type="submit" color={"gray"}>
            Entrar
          </Button>
        </form>
      </VStack>
    </Center>
  );
};

export default InicioSesion;
