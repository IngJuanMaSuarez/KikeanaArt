import React from 'react';

import icon_home from '../assets/icons/icon_home.svg';
import icon_about_us from '../assets/icons/icon_about_us.svg';
import icon_news from '../assets/icons/icon_news.svg';
import icon_amigurumis from '../assets/icons/icon_amigurumis.svg';
import icon_pattern from '../assets/icons/icon_pattern.svg';

const NavBar = () => {
  return (

    <nav className = "navbar">
        <ul>
            <li>
                <a href = "">
                    <img src = { icon_home } alt = "Icono para ir al inicio" />Inicio
                </a>
            </li>
            <li>
                <a href = "">
                    <img src = { icon_news } alt = "Icono para ir a la sección de las noticias" />Noticias Crocheteras
                </a>
            </li>
            <li>
                <a href = "">
                    <img src = { icon_amigurumis } alt = "Icono para ir a la sección de nuestros amigurumis" />Nuestros Amigurumis
                </a>
            </li>
            <li>
                <a href = "">
                    <img src = { icon_pattern } alt = "Icono para ir a la sección de patrones gratis" />Patrones Gratis
                </a>
            </li>
            <li>
                <a href = "">
                    <img src = { icon_about_us } alt = "Icono para ir a la sección sobre nosotros" />Sobre Nosotros
                </a>
            </li>
        </ul>
    </nav>
    
  )
}

export { NavBar };