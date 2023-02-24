import React from 'react'
import { useForm } from 'react-hook-form'
import '../css/style_iniciosesion.scss'

const InicioSesion = () => {
  const { register, handleSubmit } = useForm(); 


  return (
    <div className='div_inicio'>
        <form>
          <input type="text" label=""/>
          <input type="password" />
          <button to="" >Iniciar Sesion</button>
        </form>
    </div>
  )
}

export default InicioSesion