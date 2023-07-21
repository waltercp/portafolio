import React from 'react'
import './styles/banner.css'

const Banner = () => {

  const scrollToSection = () => {
    const section = document.getElementById("contactMe");
    section.scrollIntoView({ behavior: "smooth" });
  }
  const handleCV = () => {
    window.open('https://drive.google.com/file/d/1tkk1Ppu3co7h4Ftr8xxFaut4Fru6xDB4/view?usp=sharing',
      '_blank')
  }

  return (
    <div className='banner' id='home'>
      <div className='banner-content'>
        <div className='banner-Info'>
          <h1>  <span>Desarrollador Web </span>Full-Stack</h1>
          <p>¡Hola! Soy Walter Camacho, un Desarrollador Web Full-Stack con experiencia en JavaScript, React, HTML5, CSS, node.js y bases de datos SQL. He trabajado en el desarrollo ágil de aplicaciones web de alta calidad y me destaco en el trabajo en equipo. Busco constantemente mejorar tanto mis habilidades técnicas como blandas. Soy proactivo, adaptable y altamente motivado. Estoy listo para asumir nuevos desafíos y aportar valor a tu equipo.</p>
          
          <div className='bannerButton'>
            <button onClick={scrollToSection}>Contactame</button>
            <button onClick={handleCV} type="button">Ver CV</button>
          </div>

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