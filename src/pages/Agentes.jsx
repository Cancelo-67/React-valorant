import React, { useEffect, useState } from 'react'
import { CircleLoader } from 'react-spinners'
import { Box, Input } from '@chakra-ui/react'
import '../css/style_agentes.scss'

const Agentes = () => {
  const url = 'https://valorant-api.com/v1/agents?isPlayableCharacter=true'
  const [agentes , setAgentes] = useState()
  const [buscar, setBuscar] = useState("")
  const fetchApi = async () => {
    const response = await fetch(url)
    const responseJSON = await response.json()
    setAgentes(responseJSON.data)
  }
  useEffect(() => {
    fetchApi()
  }, [])

  //Funcion 
  const guardarfav = () =>{
    console.log(document.querySelector(".li_agente"))
  }



  //Busqueda
  const buscador = (e)=>{
    setBuscar(e.target.value)
  }
  const resultado = !buscar ? agentes : agentes.filter((dato)=>dato.displayName.toLowerCase().includes(buscar.toLocaleLowerCase()))


  return (
    <Box className='div_agente' background={'gray'} >
      <Input value={buscar} onChange={buscador} type="text" autoComplete='off' width={500}/>
      <ul className='ul_agente'>
        {!agentes ? <CircleLoader color="#b12f3a"/> :
        resultado.map( (agente,index) => {
          return <li key={index} className='li_agente' id={agente.displayName}>
            <p>{agente.displayName}</p>
            <img src={agente.bustPortrait} alt=""/>
            <p>{agente.role.displayName}</p>
            <button onClick={guardarfav}>Favoritos</button>
          </li>
        })
        }
      </ul>
    </Box>
  )
}

export default Agentes