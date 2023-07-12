import React, { useState, useEffect } from 'react';
import './styles/nawBar.css';

const NavBar = () => {
  const [nawBar, setNawBar] = useState(true);
  const [activeItem, setActiveItem] = useState('');

  const handleMenu = () => {
    setNawBar(!nawBar);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const homeSection = document.getElementById('home');
      const aboutMeSection = document.getElementById('aboutMe');
      const knowledgeSection = document.getElementById('knowledge');
      const proyectSection = document.getElementById('proyect');
      const contactMeSection = document.getElementById('contactMe');

      if (
        scrollPosition >= homeSection.offsetTop &&
        scrollPosition < aboutMeSection.offsetTop
      ) {
        setActiveItem('home');
      } else if (
        scrollPosition >= aboutMeSection.offsetTop &&
        scrollPosition < knowledgeSection.offsetTop
      ) {
        setActiveItem('aboutMe');
      } else if (
        scrollPosition >= knowledgeSection.offsetTop &&
        scrollPosition < proyectSection.offsetTop
      ) {
        setActiveItem('knowledge');
      } else if (
        scrollPosition >= proyectSection.offsetTop &&
        scrollPosition < contactMeSection.offsetTop
      ) {
        setActiveItem('proyect');
      } else if (scrollPosition >= contactMeSection.offsetTop) {
        setActiveItem('contactMe');
        
      } else {
        setActiveItem('');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleItemClick = (page) => {
    setActiveItem(page);
    handleMenu();
  };

  const scrollToBottom = () => {
    window.scrollTo(10, document.body.scrollHeight);
    handleMenu();
  }

  return (
    <nav className="nawBar">
      <div className="menuResponsive">
        <div
          onClick={handleMenu}
          className="bx handleIconNavbar bxs-dashboard"
        ></div>
      </div>

      <ul className={`nawBar-list ${nawBar ? 'active' : ''}`}>
        <li
          className={`nawBar-itens ${activeItem === 'home' ? 'itensActive' : ''
            }`}
          onClick={() => handleItemClick('home')}
        >
          <a href="#home">Inicio</a>
        </li>
        <li
          className={`nawBar-itens ${activeItem === 'aboutMe' ? 'itensActive' : ''
            }`}
          onClick={() => handleItemClick('aboutMe')}
        >
          <a href="#aboutMe">Sobre Mi</a>
        </li>
        <li
          className={`nawBar-itens ${activeItem === 'knowledge' ? 'itensActive' : ''
            }`}
          onClick={() => handleItemClick('knowledge')}
        >
          <a href="#knowledge">Conocimientos</a>
        </li>
        <li
          className={`nawBar-itens ${activeItem === 'proyect' ? 'itensActive' : ''
            }`}
          onClick={() => handleItemClick('proyect')}
        >
          <a href="#proyect">Proyectos</a>
        </li>

        <li
          className={`nawBar-itens ${activeItem === 'contactMe' ? 'itensActive' : ''
            }`}
          onClick={scrollToBottom}
        >
          <a>Contactame</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
