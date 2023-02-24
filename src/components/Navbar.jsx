import React from 'react'
import '../css/style_navbar.scss'
import { Link, NavLink } from 'react-router-dom'
import logo from '../img/logo_transparent.png'

const Navbar = () => {
  return (
    <header className='div_nav'>
      <Link to={"/"}><img src={logo} alt="logo_valorant" className='img_nav' /></Link>
      <nav className='container_nav'>
          <NavLink to='/agentes' className='nav_button'>
            Agentes
          </NavLink>
          <NavLink to='/armas' className='nav_button'>
            Armas
          </NavLink>
          <NavLink to='/mapas' className='nav_button'>
            Mapas
          </NavLink>
          <NavLink to='/favoritos' className='nav_button'>
            Favoritos
          </NavLink>
      </nav>
      <nav className='container_nav2'>
          <NavLink to='/login' className='nav_button'>
            Iniciar Sesion
          </NavLink>
          <NavLink to='/register' className='nav_button'>
            Registrarse
          </NavLink>
      </nav>
    </header>
  )
}

export default Navbar