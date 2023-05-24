//Importaciones
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import {
  FormLabel,
  FormControl,
  Input,
  VStack,
  Center,
  Button,
  InputRightElement,
  InputGroup,
  FormErrorMessage,
} from "@chakra-ui/react";

import "../css/style_iniciosesion.scss";
import { useNavigate } from "react-router-dom";
import Popup from "../components/PopUp";
//<------------------------- Page Register -------------------------->
const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  //Creo un useState para el popup.
  const [isPopupOpen, setPopupOpen] = useState(false);

  const [show1, setShow1] = useState(false);
  const handleClick1 = () => setShow1(!show1);

  const usuarios = localStorage.getItem("usuarios")
    ? JSON.parse(localStorage.getItem("usuarios"))
    : [];

  const navigate = useNavigate();
  const [show2, setShow2] = useState(false);
  const handleClick2 = () => setShow2(!show2);

  const pass = useRef({});
  pass.current = watch("contraseña", "");

  const onSubmit = (datos) => {
    const { nombre, apellido, email, contraseña, repetircontraseña } = datos;

    const datosUsuario = {
      nombre: nombre,
      apellidos: apellido,
      email: email,
      contraseña: contraseña,
    };
    if (repetircontraseña === contraseña) {
      usuarios.push(datosUsuario);
      localStorage.setItem("usuarios", JSON.stringify(usuarios));

      setPopupOpen(true);
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
  };

  return (
    <Center alignContent="center" justify="center" background={"gray"}>
      <VStack>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Nombre */}
          <FormControl isInvalid marginBottom={10} marginTop={10}>
            <FormLabel>Nombre</FormLabel>
            <Input
              background={"white"}
              autoComplete="off"
              type="name"
              placeholder="Nombre"
              {...register("nombre", {
                required: {
                  value: true,
                  message: "Este campo es requerido",
                },
                pattern: {
                  value: /^[A-z]{3,20}$/,
                  message: "El nombre es incorrecto",
                },
              })}
            />
            {errors.nombre && (
              <FormErrorMessage className="error">
                {errors.nombre.message}
              </FormErrorMessage>
            )}
          </FormControl>
          {/* Apellidos */}
          <FormControl isInvalid marginBottom={10}>
            <FormLabel>Apellidos</FormLabel>
            <Input
              background={"white"}
              type="name"
              autoComplete="off"
              placeholder="Apellidos"
              {...register("apellido", {
                required: {
                  value: true,
                  message: "Este campo es requerido",
                },
                pattern: {
                  value: /^[A-z]{3,20}\s[A-z]{3,20}$/,
                  message: "Los apellidos son incorrectos",
                },
              })}
            />
            {errors.apellido && (
              <FormErrorMessage className="error">
                {errors.apellido.message}
              </FormErrorMessage>
            )}
          </FormControl>
          {/* Email */}
          <FormControl isInvalid marginBottom={10}>
            <FormLabel>Email</FormLabel>
            <Input
              background={"white"}
              placeholder="Email"
              autoComplete="off"
              {...register("email", {
                required: {
                  value: true,
                  message: "Este campo es requerido",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i,
                  message: "El email es incorrecto",
                },
              })}
            />
            {errors.email && (
              <FormErrorMessage className="error">
                {errors.email.message}
              </FormErrorMessage>
            )}
          </FormControl>
          {/* Contraseña */}
          <FormControl isInvalid marginBottom={10}>
            <FormLabel>Contraseña</FormLabel>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show1 ? "text" : "password"}
                placeholder="Contraseña"
                background={"white"}
                {...register("contraseña", {
                  required: {
                    value: true,
                    message: "Es necesario rellenar el campo",
                  },
                  minLength: {
                    value: 10,
                    message: "La contraseña debe tener al menos 10 caracteres",
                  },
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!.@#$%]).{8,24}$/,
                    message:
                      "La contraseña debe incluir almenos una maysucula, una minuscula, un numero y un caracter especial",
                  },
                })}
              />
              <InputRightElement width="4.75rem">
                <Button
                  background={"gray"}
                  h="1.75rem"
                  size="sm"
                  onClick={handleClick1}
                >
                  {show1 ? "Ocultar" : "Ver"}
                </Button>
              </InputRightElement>
            </InputGroup>
            {errors.contraseña && (
              <FormErrorMessage className="error">
                {errors.contraseña.message}
              </FormErrorMessage>
            )}
          </FormControl>
          {/* Repetir Contraseña */}
          <FormControl isInvalid marginBottom={10}>
            <FormLabel>Repetir Contraseña</FormLabel>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                background={"white"}
                type={show2 ? "text" : "password"}
                placeholder="Repetir Contraseña"
                {...register("repetircontraseña", {
                  validate: (value) =>
                    value === pass.current || "La contraseña no es la misma",
                })}
              />
              <InputRightElement width="4.75rem">
                <Button
                  background={"gray"}
                  h="1.75rem"
                  size="sm"
                  onClick={handleClick2}
                >
                  {show2 ? "Ocultar" : "Ver"}
                </Button>
              </InputRightElement>
            </InputGroup>
            {errors.repetircontraseña && (
              <FormErrorMessage className="error">
                {errors.repetircontraseña.message}
              </FormErrorMessage>
            )}
          </FormControl>
          <Button marginBottom={10} type="submit" color={"gray"}>
            Entrar
          </Button>
        </form>
        <Popup
          isOpen={isPopupOpen}
          onClose={() => setPopupOpen(false)}
          text={"Usuario registrado correctamente"}
        />
      </VStack>
    </Center>
  );
};

//<--------------------- Exportacion ----------------->
export default Register;
