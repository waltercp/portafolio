import React from 'react'
import './styles/banner.css'

const Banner = () => {

  const scrollToSection = () => {
    const section = document.getElementById("contactMe");
    section.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className='banner' id='home'>
      <div className='banner-content'>
        <div className='banner-Info'>
          <h1>  <span>Hi!</span> I'am a Front-End Developer.</h1>
          <p>Como Desarrollador Web Full-Stack, poseo sólidos conocimientos en el desarrollo de aplicaciones utilizando diversas tecnologías tales como JavaScript, React, HTML5, CSS y en la implementación de bases de datos SQL. Además, cuento con experiencia en la creación de soluciones web de calidad y en la implementación de prácticas de desarrollo ágil, garantizando así la entrega oportuna y satisfactoria de los proyectos en los que me desempeño.</p>
          <button onClick={scrollToSection}>Contact me</button>
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