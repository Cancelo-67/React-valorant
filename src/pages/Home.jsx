import React from 'react'
import logo from '../img/logo_transparent.png'
import '../css/style_home.scss'

const Home = () => {
  return (
    <main className='div_home'>
        <img src={logo}/>
        <p>Valorant es un hero shooter en primera persona
             multijugador gratuito desarrollado y publicado por Riot Games.
              El juego se anunció por primera vez con el nombre en clave Project A en 
              octubre de 2019. Fue lanzado para Microsoft Windows el 2 de junio de 2020 
              después de su beta cerrada lanzada el 7 de abril de 2020
        </p>
    </main>
  )
}

export default Home