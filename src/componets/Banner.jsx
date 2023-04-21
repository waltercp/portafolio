import React from 'react'
import './styles/banner.css'

const Banner = () => {
  return (
    <div className='banner'>
      <div className='banner-content'>
        <div className='banner-Info'>
          <h1>  <span>Hi!</span> I'am a Frontend Developer.</h1>
          <p>Como Desarrollador Web Full-Stack, poseo sólidos conocimientos en el desarrollo de aplicaciones utilizando diversas tecnologías tales como JavaScript, React, HTML5, CSS y en la implementación de bases de datos SQL. Además, cuento con experiencia en la creación de soluciones web de calidad y en la implementación de prácticas de desarrollo ágil, garantizando así la entrega oportuna y satisfactoria de los proyectos en los que me desempeño.</p>
          <button>Click here</button>
        </div>
        <div className='banner-fondo'></div>
        <div className='banner-image'>
          <img src="/miFoto.png" alt="" />
        </div>
      
      </div>
    </div>
  )
}

export default Banner