import React from 'react'
import './styles/foteer.css'

const Footer = () => {
    return (
        <footer className='footer' id='contactMe'>

            <div className='footer-containt'>

                <div className='footer-img-container'>
                    <a href="#home"><img className='footer-img' src="/logo.png" alt="" /></a>
                </div>

                <div className='footer-info'>
                    <h1>Contactame</h1>
                    <ul className='footer-info-list'>
                        <li className='footer-info-contac'><a href="https://www.linkedin.com/in/walter-camacho-pacheco/" target="_blank"> <img src="/Icon/linkedinIcon.png" alt="LinkedIn" />Walter Camacho</a></li>
                        <li className='footer-info-contac'><a href="mailto:waltercamachopa@gmail.com" target="_blank"><img src="Icon/gmailIcon.png" alt="Gmail" />waltercamachopa@gmail.com</a></li>
                        <li className='footer-info-contac'><a href="https://wa.me/936495254" target="_blank"><img src="Icon/whatsAppIcon.png" alt="WhatsApp" />936-495-254</a></li>
                        <li className='footer-info-contac'><img src="Icon/celularIcon.png" alt="WhatsApp" />936-495-254</li>
                    </ul>
                </div>
            </div>


           

        </footer>
    )
}

export default Footer

