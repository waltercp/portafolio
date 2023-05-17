import React from 'react'
import './styles/aboutMe.css'


const AboutMe = () => {

  const handleCV = () => {
    window.open('https://drive.google.com/file/d/1JUJOSFjDDyiONdnfSfeXSN2gyvEYt-J-/view?usp=sharing',
      '_blank')
  }
  return (
    <div className='aboutMe' id='aboutMe'>
      <div className='aboutMe-content'>
        <div className='aboutMe-image'>
          <img src="/miFoto.png" alt="" />
        </div>
        <div className='aboutMe-Info'>
          <h2>About <span>Me</span> </h2>
          <p>¡Hola! Mi nombre es Walter Antonio Camacho Pacheco y recientemente he completado mi carrera en Ingeniería Informática. Actualmente, estoy buscando oportunidades para realizar mis prácticas pre profesionales. Me considero una persona proactiva y me adapto rápidamente a nuevas situaciones. Trabajar en equipo es algo en lo que me desenvuelvo de manera efectiva, siempre enfocado en alcanzar objetivos comunes.
            Estoy altamente motivado para seguir aprendiendo y mejorar tanto mis habilidades técnicas como blandas. Creo en el constante crecimiento y deseo contribuir al éxito de la organización donde tenga la oportunidad de demostrar mi potencial.</p>
          <button onClick={handleCV} type="button">See CV</button>
        </div>

      </div>

    </div>

  )
}

export default AboutMe

