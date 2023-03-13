import React, { useEffect, useState } from 'react'
import { CircleLoader } from 'react-spinners'
import { Box, Input } from '@chakra-ui/react'
import '../css/style_agentes.scss'
import corazonVacio from '../img/heart-regular.svg'
import corazonLleno from '../img/heart-solid.svg'

const Agentes = () => {
  const url = 'https://valorant-api.com/v1/agents?isPlayableCharacter=true'
  //useState de los personajes
  const [agentes, setAgentes] = useState()
  //useState del buscador de personajes
  const [buscar, setBuscar] = useState("")
  //useState que la uso para que aparezca el boton de con el corazon relleno o sin rellenar

  const fetchApi = async () => {
    const response = await fetch(url)
    const responseJSON = await response.json()
    setAgentes(responseJSON.data)
  }

  useEffect(() => {
    fetchApi()
  }, [])


const tratarFavorito = (e) => {
  console.log(e)
   // comprobar si está en favoritos => checkIfFavorito()
      // true => llamar a eliminarFavorito()
      // false =>  llamar a añadirFavorito()


}


checkIfFavorito = () => {
  // o compruebo el corazon
  // o voy a favorito y checkeo si está
  // Devuelva un booleano
}

eliminarFavorito = () => {
  ///cambiar el corazon 
  // descarego favoritos, lo recorro, elimino el elemento que ha selecconado y lo vuelvo a subir.

}


añadirFavorito = () => {
  ///cambiar el corazon 
  // descarego favoritos, añado el elemento que ha selecconado y lo vuelvo a subir.

}



  // const eliminarFav= agente =>{
  //   localStorage.removeItem(`agente${agente.displayName}`)
  //   //TODO: Hacer que se elimine la uuid del localstorage y actualizar el array agenteFavorito.
  //   setGuardado(false)
    
  // }

  // const guardarfav = agente =>{
  //   //agenteFavorito.push(agente)
  //   localStorage.setItem(`agente${agente.displayName}`, JSON.stringify(agente))
  //   //localStorage.setItem('favoritos', JSON.stringify(agentefav))
  //   setGuardado(true)
  //   //localStorage.clear()
  // }

  //Busqueda de personajes
  const buscador = (e) => {
    setBuscar(e.target.value)
  }
  //Devuelve el personaje introducido en el input
  const resultado = !buscar ? agentes : agentes.filter( dato => dato.displayName.toLowerCase().includes(buscar.toLocaleLowerCase()))


  return (
    <Box className='div_agente' background={'gray'} >
      <Input value={buscar} onChange={buscador} type="text" autoComplete='off' width={500} placeholder = 'Buscar personaje' background={'white'}/>
      <ul className='ul_agente'>
        {!agentes ? <CircleLoader color="#b12f3a"/> :
        resultado.map( (agente,index) => {
          return <li key={index} className='li_agente' id={agente.uuid}>
            <p>{agente.displayName}</p>
            <img src={agente.bustPortrait} alt={`Imagen de ${agente.displayName}`}/>
            <p>{agente.role.displayName}</p>
              <button key={agente.uuid} onClick={(e)=>tratarFavorito()}><img width='30px' src={corazonVacio}/></button>
          </li>
        })
        }
      </ul>
    </Box>
  )
}

export default Agentes