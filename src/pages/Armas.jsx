import React, { useEffect, useState } from 'react'
import Arma from '../components/Arma'
import '../css/style_armas.scss'


const Agentes = () => {
  return (
    <div>
      <ul className='ul_armas'>
        {<Arma/>}
      </ul>
    </div>
  )
}

export default Agentes