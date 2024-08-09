import React from 'react'
import './Card.css'



const Card = ({image,titulo,descripcion}) => {
  return (
    <div className="conteiner">
    <div className='card'>
        <img src={image} alt="Peluqueria" />
        <h2>{titulo}</h2>
        <p>{descripcion}</p>
         
    </div>
    </div>
  )
}

export default Card
