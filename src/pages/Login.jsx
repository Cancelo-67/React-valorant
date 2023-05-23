import {
  Center,
  VStack,
  FormControl,
  Input,
  FormLabel,
  InputGroup,
  InputRightElement,
  Button,
  cookieStorageManager,
} from "@chakra-ui/react";
import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../css/style_iniciosesion.scss";
import { LoginContext } from "../context/LoginContext";

const InicioSesion = () => {
  const [show, setShow] = useState(false);
  const { register, handleSubmit } = useForm({ mode: "onChange" });
  const handleClick = () => setShow(!show);
  const navigate = useNavigate();
  const usuarios = JSON.parse(localStorage.getItem("usuarios"));
  //Declaramos el context
  let { user, setUser } = useContext(LoginContext);

  const onSubmit = (datos) => {
    const { email, contraseña } = datos;
    usuarios.map((usuario) => {
      if (usuario.email === email && usuario.contraseña === contraseña) {
        const usuarioActual = {
          nombre: usuario.nombre,
          apellidos: usuario.apellidos,
          email: usuario.email,
          contraseña: usuario.contraseña,
        };
        setUser(true);
        localStorage.setItem("usuarioActual", JSON.stringify(usuarioActual));
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
