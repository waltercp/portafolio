import React from 'react'
import './styles/nawBar.css'

const NavBar = () => {
  return (
    <nav className='nawBar'>
        <div className='nawBar-fondo'></div>
        <ul className='nawBar-list' >
            <li>Home</li>
            <li>Projects</li>
            <li>About me</li>
            <li>Contact me</li>
        </ul>
    </nav>
  )
}

export default NavBar


