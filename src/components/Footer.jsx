import React from 'react'
import '../css/style_footer.scss'
import { Link, NavLink } from 'react-router-dom'


const Footer = () => {
  return (
      <footer className='footer'>
        <nav className='nav_footer'>
        <NavLink to='/Agentes' className='nav_button'>
            Agentes
          </NavLink>
          <NavLink to='/Armas' className='nav_button'>
            Armas
          </NavLink>
          <NavLink to='/Mapas' className='nav_button'>
            Mapas
          </NavLink>
        </nav>
      </footer>
  )
}

export default Footer