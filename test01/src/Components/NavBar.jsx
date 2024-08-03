import React from 'react'

const NavBar = () => {
  return (
    <div className='Container'>
        <div className="logo">
            <h1>Estetica</h1>  
        </div>
        <nav className='Bar'>
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Servicios</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>

        </nav>
        <button>Agenda Aqui</button>
      
    </div>
  )
}

export default NavBar
