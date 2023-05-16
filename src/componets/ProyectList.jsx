import React from 'react'
import Proyects from './Proyects'
import './styles/proyecList.css'


const proyectUno = {
    img: '/proyects/proyecto1.png',
    name: 'Web ecommerce',
    descripcion: 'JavaScript |  HTML5 | CSS',
    url: 'https://ecomerce-waltercamacho.netlify.app/'
}

const proyectDos = {
    img: '/proyects/proyecto2.png',
    name: 'Galleta de la Fortuna',
    descripcion: 'JavaScript | React |  HTML5 | CSS',
    url : 'https://lighthearted-crepe-889e7b.netlify.app/'
}
const proyectTres = {
  img: '/proyects/proyecto3.png',
  name: 'Aplicacion del Clima',
  descripcion: 'JavaScript | React |  HTML5 | CSS',
  url: 'https://weatherapp-camacho-walter.netlify.app/'
}
const proyectCuatro = {
  img: '/proyects/proyecto4.png',
  name: 'Rick and Morty',
  descripcion: 'JavaScript | React |  HTML5 | CSS',
  url: 'https://rick-morty-camacho-walter.netlify.app/'
}

const proyectCinco = {
  img: '/proyects/proyecto5.png',
  name: 'Registro de Usuarios',
  descripcion: 'JavaScript | React |  HTML5 | CSS | CRUD',
  url: 'https://userperson-camacho-walter.netlify.app/'
}

const proyectSeis = {
  img: '/proyects/proyecto6.png',
  name: 'Pokemon',
  descripcion: 'JavaScript | React |  HTML5 | CSS | Redux',
  url: 'https://pokedex-walter-camacho.netlify.app/'
}
const proyectSiete = {
  img: '/proyects/proyecto7.png',
  name: 'ecommerce',
  descripcion: 'JavaScript | React |  HTML5 | CSS | Redux',
  url: 'https://ecommerce-walter-camacho.netlify.app/'
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
        <Proyects proyecto={proyectCinco} />
        <Proyects proyecto={proyectSeis} />
        <Proyects proyecto={proyectSiete} />
        </div>
    </div>
  )
}

export default ProyectList