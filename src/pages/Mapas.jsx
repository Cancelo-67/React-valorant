import '../css/style_maps.scss'

import React, { useEffect, useState } from 'react'
import { Box } from '@chakra-ui/react'

const Agentes = () => {
  const url = 'https://valorant-api.com/v1/maps'
  const [mapas , setMapas] = useState()
  const fetchApi = async () => {
    const response = await fetch(url)
    console.log(response.status)
    const responseJSON = await response.json()
    setMapas(responseJSON.data)
    console.log(responseJSON.data)
  }
  useEffect(() => {
    fetchApi()
  }, [])
  return (
    <Box background={'gray'}>
      <ul className='ul_mapas'>
        {!mapas ? 'Cargando...' : 
        mapas.map( (mapa) => {
          return <li id={mapa.uuid} className=''>
            <img src={mapa.splash} alt="" />
            <p>{mapa.displayName}</p>
          </li>
        })
        }
      </ul>
    </Box>
  )
}

export default Agentes