import React from 'react'
import './styles/banner.css'

const Banner = () => {

  const scrollToSection = () => {
    const section = document.getElementById("contactMe");
    section.scrollIntoView({ behavior: "smooth" });
  }
  const handleCV = () => {
    window.open('https://drive.google.com/file/d/1JUJOSFjDDyiONdnfSfeXSN2gyvEYt-J-/view?usp=sharing',
      '_blank')
  }

  return (
    <div className='banner' id='home'>
      <div className='banner-content'>
        <div className='banner-Info'>
          <h1>  <span>Hi!</span> I'am a Front-End Developer.</h1>
          <p>¡Hola! Soy Walter Antonio Camacho Pacheco, un Desarrollador Web Full-Stack con sólidos conocimientos en JavaScript, React, HTML5, CSS y bases de datos SQL. Tengo experiencia en el desarrollo ágil de aplicaciones web de alta calidad, garantizando entregas oportunas y satisfactorias. Recientemente completé mi carrera en Ingeniería Informática y estoy buscando oportunidades para realizar mis prácticas pre profesionales. Soy una persona proactiva, adaptable y me destaco en el trabajo en equipo para alcanzar objetivos comunes. Estoy altamente motivado para continuar mi desarrollo y mejorar tanto mis habilidades técnicas como blandas.</p>
          <div className='bannerButton'>
            <button onClick={scrollToSection}>Contact me</button>
            <button onClick={handleCV} type="button">See CV</button>
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