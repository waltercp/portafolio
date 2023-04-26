import React from 'react'
import Proyects from './Proyects'
import './styles/proyecList.css'


const proyectUno = {
    img: '/proyects/proyecto1.png',
    name: 'Web ecommerce',
    descripcion: 'JavaScript |  HTML5 | CSS'
}

const proyectDos = {
    img: '/proyects/proyecto2.png',
    name: 'Galleta de la Fortuna',
    descripcion: 'JavaScript | React |  HTML5 | CSS'
}
const proyectTres = {
  img: '/proyects/proyecto3.png',
  name: 'Aplicacion del Clima',
  descripcion: 'JavaScript | React |  HTML5 | CSS'
}
const proyectCuatro = {
  img: '/proyects/proyecto4.png',
  name: 'Rick and Morty',
  descripcion: 'JavaScript | React |  HTML5 | CSS'
}

const ProyectList = () => {
  return (
    <div className= 'proyectList' id='proyect'>
      <h2> <span>Latest </span>Project</h2>
        <div className='proyectList-content' >
        <Proyects proyecto={proyectUno} />
        <Proyects proyecto={proyectDos} />
        <Proyects proyecto={proyectTres} />
        <Proyects proyecto={proyectCuatro} />
        </div>
    </div>
  )
}

export default ProyectList