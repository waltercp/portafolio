import React, { useState } from 'react'
import './styles/nawBar.css'

const NavBar = () => {
  const [nawBar, setNawBar] = useState(true)


  const handleMenu = () => {
    setNawBar(!nawBar)
  }

  return (
    <nav className='nawBar'>

      <div className='menuResponsive'>
        <div onClick={handleMenu} className="bx handleIconNavbar bxs-dashboard"></div>
      </div>


      <ul className= {`nawBar-list ${nawBar? 'active' : ''} ` } >
        <li onClick={handleMenu} ><a href="#home">Home</a></li>
        <li onClick={handleMenu} ><a href="#aboutMe">About Me</a></li>
        <li onClick={handleMenu} ><a href="#knowledge">Knowlege</a></li>
        <li onClick={handleMenu} ><a href="#proyect">Projects</a> </li>
        <li onClick={handleMenu} ><a href="#contactMe">Contact me</a> </li>
      </ul>
    </nav>
  )
}

export default NavBar


