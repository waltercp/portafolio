import React from 'react'
import './styles/proyects.css'
const Proyects = ({ proyecto }) => {


  const handleCV =() => {
    window.open(proyecto.url)
  }
  return (
    <div className='proyects' >
       <img src={proyecto.img} alt="" />
        <div className='proyect-content' >
            <h3>{proyecto.name}</h3>
            <p>{proyecto.descripcion}</p>
            <button onClick={handleCV}>Click here</button>
        </div>
    </div>

  )
}

export default Proyects