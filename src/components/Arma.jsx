import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CircleLoader } from 'react-spinners'
import '../css/style_armas.scss'

const Arma = () => {
    const url = 'https://valorant-api.com/v1/weapons'
    const [armas , setArmas] = useState()
    const fetchApi = async () => {
      const response = await fetch(url)
      const responseJSON = await response.json()
      setArmas(responseJSON.data)
    }
    useEffect(() => {

      fetchApi()
    }, [])

   
    
  return (
    <>
    {!armas ? <CircleLoader color="#b12f3a" /> :
    armas.map((arma)=>{

      if(arma.weaponStats === null) { 
        return (
        <div>
          <li>
            <p>{arma.displayName}</p>
            <Link to={`/armas/${arma.displayName}`} ><img src={arma.displayIcon}/></Link>
            <button>Favoritos</button>
          </li>
        </div>
        )
      }else{
        return (
      <div>
        <li>
          <p>{arma.displayName}</p>
          <Link to={`/armas/${arma.uuid}`} ><img src={arma.displayIcon}/></Link>
          <p>Daño: {arma.weaponStats.fireRate}</p>
          <button>Favoritos</button>
      </li>
      </div>)
      }
    
    })}
    </>
    )
}
export default Arma