import React from 'react'
import './styles/aboutMe.css'


const AboutMe = () => {

  const handleCV =() => {
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
          <p>Hola! Mi nombre es  Walter Antonio Camacho Pacheco, recién graduado en Ingeniería Informática y en búsqueda de oportunidades para realizar mis prácticas pre profesionales. Me considero una persona proactiva, capaz de adaptarme rápidamente a situaciones nuevas y trabajar en equipo de manera efectiva para alcanzar objetivos comunes. Estoy altamente motivado para aprender y mejorar mis habilidades técnicas y blandas, y así contribuir al crecimiento y éxito de la organización. Agradezco de antemano la oportunidad de demostrar mi potencial.</p>
          <button onClick={handleCV} type="button">See CV</button>
        </div>
        
      </div>

    </div>

  )
}

export default AboutMe