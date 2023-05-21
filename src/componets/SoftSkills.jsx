import React, { useEffect, useRef, useState } from 'react'
import './styles/softSkills.css'
const SoftSkills = () => {


    const [animationName, setAnimationName] = useState("none")
    const ulRef = useRef()


    useEffect(() => {
        const handleScroll = () => {
            const ul = ulRef.current
            const { y } = ul.getBoundingClientRect()

            const animation = y <= 800 ? 'block' : 'none'

            setAnimationName(animation)

        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div  className='statsSection' id='aboutMe'>

            <h2><span>About </span>Me</h2>

            <div className='moreAbout__Content'>

                <div className='moreAboutMe'>

                    <div className='AboutMeEduacacion'>


                        <div className='eduacacion'>
                            <h4>Educacion</h4>
                            <div className='education-content'>

                                <div className='AboutMeEduacacion__content'>
                                    <div><img src="logounfv.jpg" alt="" /></div>
                                    <span>Ingenieria Informatica</span>
                                </div>

                                <div className='AboutMeEduacacion__content'>
                                    <div className='educationImage'> <img src="logo_academlo.png" alt="" /></div>
                                    <span>Desarrollador Web Full-Stack</span>
                                </div>
                            </div>
                        </div>

                        <div className='MyInfo'>
                            <p><i class='bx bxs-gift'></i><span>Birth:</span>  27/07/1996</p>
                            <p><i class='bx bxs-location-plus'></i><span>Location:</span>  Lima- Peru </p>
                        </div>
                    </div>


                    <ul className='experience__content'>
                        <li>
                            <h4>+100 </h4>
                            <p>Horas de Teoria</p>
                        </li>

                        <li>
                            <h4> +200</h4>
                            <p>Horas de Practica</p>
                        </li>

                        <li>
                            <h4>+7</h4>
                            <p>Proyectos</p>
                        </li>
                    </ul>



                </div>

                <ul className='statsList' ref={ulRef}>
                    <li>
                        <span>Responsabilidad</span>
                        <div className='statBaseBar' style={{ display: animationName }}>
                            <div className='statBar' style={{ width: (85 / 100 * 100) + "%" }}></div>
                        </div>
                    </li>
                    <li>
                        <span>Adaptabilidad</span>
                        <div className='statBaseBar' style={{ display: animationName }}>
                            <div className='statBar' style={{ width: (80 / 100 * 100) + "%" }}></div>
                        </div>
                    </li>
                    <li>
                        <span>Trabajo en equipo</span>
                        <div className='statBaseBar' style={{ display: animationName }}>
                            <div className='statBar' style={{ width: (90 / 100 * 100) + "%" }}></div>
                        </div>
                    </li>
                    <li>
                        <span>Autonomía y gestión del tiempo</span>
                        <div className='statBaseBar' style={{ display: animationName }}>
                            <div className='statBar' style={{ width: (80 / 100 * 100) + "%" }}></div>
                        </div>
                    </li>
                    <li>
                        <span>Resolución de problemas</span>
                        <div className='statBaseBar' style={{ display: animationName }}>
                            <div className='statBar' style={{ width: (80 / 100 * 100) + "%" }}></div>
                        </div>
                    </li>
                </ul>

            </div>



        </div>
    )
}

export default SoftSkills