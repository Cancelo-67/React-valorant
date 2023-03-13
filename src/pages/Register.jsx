//Importaciones
import React, {useState} from 'react'
import { useForm } from 'react-hook-form'
import {
  FormLabel,
  FormControl,
  Input,
  VStack,
  FormHelperText,
  Center,
  Button,
  InputRightElement,
  InputGroup,
  FormErrorMessage,
} from '@chakra-ui/react'

import '../css/style_iniciosesion.scss'


//<------------------------- Componente -------------------------->
const Register = () => {
  const { register, handleSubmit, formState: {errors} } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <Center alignContent="center" justify="center" background={'gray'}>
      <VStack>
        <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid marginBottom={10} marginTop={10}>
            <FormLabel>Nombre</FormLabel>
            <Input autoComplete='off' type='name' {...register('Apellido', {required: 'Este campo es requerido'})}></Input>
          </FormControl>
          {/* Apellidos */}
          <FormControl isInvalid marginBottom={10}>
            <FormLabel>Apellidos</FormLabel>
            <Input type='name' {...register('Apellido', {required: 'Este campo es requerido'})}></Input>
          </FormControl>
          {/* Email */}
          <FormControl isInvalid marginBottom={10}>
            <FormLabel>Email</FormLabel>
            <Input {...register('Email', {required: 'Este campo es requerido'})}></Input>
            <FormHelperText color='#b12f3a'>Introduce tu email</FormHelperText>
          </FormControl>
          {/* Contraseña */}
          <FormControl isInvalid marginBottom = {10}>
            <FormLabel>Contraseña</FormLabel>
            <Input type={'password'}{...register('Contraseña', {required: 'Este campo es requerido'})}></Input>
            <FormHelperText color='#b12f3a'>Introduce tu contraseña</FormHelperText>
          </FormControl>
          <Button marginBottom={10} type='submit' color={'gray'}>Entrar</Button>
        </form>
        </VStack>
    </Center>
  )
}


//<--------------------- Exportacion ----------------->
export default Register