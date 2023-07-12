import React from 'react'
import Proyects from './Proyects'
import './styles/proyecList.css'


const proyectUno = {
    img: '/proyects/proyecto1.png',
    name: 'Web ecommerce',
    tecnologias: 'JavaScript |  HTML5 | CSS',
    descripcion: 'Este proyecto es un ecommerce. Incluye un carrito de compras para que los usuarios puedan seleccionar y comprar productos de forma conveniente. Además, cuenta con un filtro por categoría que facilita la búsqueda y navegación de productos específicos.',
    url: 'https://ecomerce-waltercamacho.netlify.app/'
}

const proyectDos = {
    img: '/proyects/proyecto2.png',
    name: 'Galleta de la Fortuna',
    tecnologias: 'React | JavaScript |  HTML5 | CSS',
    descripcion: 'Este proyecto cosiste en cambiar una frase de la fortuna y el fondo de manera aleatoria.',
    url : 'https://lighthearted-crepe-889e7b.netlify.app/'
}
const proyectTres = {
  img: '/proyects/proyecto3.png',
  name: 'Aplicacion del Clima',
  tecnologias: 'React | JavaScript |  HTML5 | CSS',
  descripcion: 'Este proyecto consiste en una aplicación sobre el clima, que muestra la condición del clima de acuerdo a su ciudadad o país.',
  url: 'https://weatherapp-camacho-walter.netlify.app/'
}
const proyectCuatro = {
  img: '/proyects/proyecto4.png',
  name: 'Rick and Morty',
  tecnologias: 'React | JavaScript |  HTML5 | CSS',
  descripcion: 'Este proyecto utiliza la API de The Rick and Morty para presentar información detallada sobre los residentes de las distintas ubicaciones de la serie. Los usuarios pueden explorar y obtener datos relevantes de los personajes, como su nombre, especie, origen y estado.',
  url: 'https://rick-morty-camacho-walter.netlify.app/'
}

const proyectCinco = {
  img: '/proyects/proyecto5.png',
  name: 'Registro de Usuarios',
  tecnologias:'JavaScript | React |  HTML5 | CSS | CRUD',
  descripcion: 'Este proyecto está diseñado para permitir a los usuarios crear, editar y eliminar perfiles de usuario, utilizando el sistema CRUD (Create, Read, Update, Delete)',
  url: 'https://userperson-camacho-walter.netlify.app/'
}

const proyectSeis = {
  img: '/proyects/proyecto6.png',
  name: 'Pokemon',
  tecnologias: 'JavaScript | React |  HTML5 | CSS | Redux',
  descripcion: 'Este proyecto utiliza la API de PokéAPI para presentar de manera concisa la información más relevante de los Pokémon. Los usuarios pueden filtrar los Pokémon por su tipo, lo que les permite acceder rápidamente a los datos que buscan.',
  url: 'https://pokedex-walter-camacho.netlify.app/'
}
const proyectSiete = {
  img: '/proyects/proyecto7.png',
  name: 'Ecommerce',
  tecnologias: 'JavaScript | React |  HTML5 | CSS | Redux',
  descripcion: 'En este proyecto de ecommerce, Utilice un backend para gestionar el registro y login de usuarios. Implementé características clave como un buscador de productos en tiempo real, filtros por categoría y precios, y rutas protegidas para garantizar la seguridad de los usuarios.',
  url: 'https://ecommerce-walter-camacho.netlify.app/'
}



const ProyectList = () => {
  return (
    <div className= 'proyectList' id='proyect'>
      <h2> <span>Ultimos </span>Proyectos</h2>
        <div className='proyectList-content' >
        <Proyects proyecto={proyectSiete} />
        <Proyects proyecto={proyectSeis} />
        <Proyects proyecto={proyectCinco} />
        <Proyects proyecto={proyectCuatro} />
        <Proyects proyecto={proyectTres} />
        <Proyects proyecto={proyectDos} />
        <Proyects proyecto={proyectUno} />
        </div>
    </div>
  )
}

export default ProyectList