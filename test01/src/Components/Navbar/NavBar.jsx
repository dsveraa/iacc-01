import React from 'react'
import './Navbar.css';

const NavBar = () => {
  return (
    <header className='header'>
        <a href="/" className='logo'>Logo</a>

        <nav className='navbar'>
            <a href="">Home</a>
            <a href="">Nosotros</a>
            <a href="">Servicios</a>
            <a href="">Contacto</a>
        </nav>
        <button>Agenda Aqui</button>
      
    </header>
  )
}

export default NavBar
