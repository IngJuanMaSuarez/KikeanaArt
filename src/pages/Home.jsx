import React from 'react';

import logo600 from '../assets/images/600pxTranspKikeana15Oct20.png';
import logo800 from '../assets/images/800pxTranspKikeana15Oct20.png';
import logo1200 from '../assets/images/1200pxTranspKikeana15Oct20.png';
import banner1_600 from '../assets/images/Banner1Small600.jpg';
import banner1_800 from '../assets/images/Banner1Medium800.jpg';
import banner1_1200 from '../assets/images/Banner1Large1200.jpg';

import icon_menu from '../assets/icons/icon_menu.svg';
import icon_instagram from '../assets/icons/icon_instagram.svg';
import icon_facebook from '../assets/icons/icon_facebook.svg';
import icon_twitter from '../assets/icons/icon_twitter.svg';
import icon_pinterest from '../assets/icons/icon_pinterest.svg';
import icon_tiktok from '../assets/icons/icon_tiktok.svg';
import icon_whatsapp from '../assets/icons/icon_whatsapp.svg';
import icon_messenger from '../assets/icons/icon_messenger.svg';

import icon_home from '../assets/icons/icon_home.svg';
import icon_about_us from '../assets/icons/icon_about_us.svg';
import icon_news from '../assets/icons/icon_news.svg';
import icon_amigurumis from '../assets/icons/icon_amigurumis.svg';
import icon_pattern from '../assets/icons/icon_pattern.svg';

const Home = () => {
  return (
    <div>
        <header>
            <div className = "header-message">Envíos a toda Colombia</div>
            
            <div className = "header-container">

                <label for = "toggle">
                    <img src = { icon_menu } alt = "Icono de Menu Desplegable" />
                </label>
                <input className = "checkbox" type = "checkbox" id = "toggle"/>

                <nav className = 'navbar-mobile'>
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
                
                <picture className = "logo">
                    <source media = "(min-width:800px)" srcset = { logo1200 } />
                    <source media = "(min-width:600px)" srcset = { logo800 } />
                    <img src = { logo600 } />
                </picture>

                <section className = "main-input">
                    <div className = "main-search-container">
                        <input type = "text" placeholder = "Buscar..." />
                        <span className = "search-icon">
                        </span>
                    </div>
                    <div className = "social-media-container">
                        <a href = "https://www.instagram.com/KikeanaArt" target="_blank">
                            <img src = { icon_instagram } alt = "Icono de nuestro Instagram" />
                        </a>
                        <a href = "https://www.facebook.com/KikeanaArt" target="_blank">
                            <img src = { icon_facebook } alt = "Icono de nuestro Facebook" />
                        </a>
                        <a href = "https://twitter.com/KikeanaArt" target="_blank">
                            <img src = { icon_twitter } alt = "Icono de nuestro Twitter" />
                        </a>
                        <a href = "https://co.pinterest.com/KikeanaArt" target="_blank">
                            <img src = { icon_pinterest } alt = "Icono de nuestro Pinterest" />
                        </a>
                        <a href = "https://www.tiktok.com/@KikeanaArt" target="_blank">
                            <img src = { icon_tiktok } alt = "Icono de nuestro Tiktok" />
                        </a>
                        <a href = "https://wa.me/message/UFD4QQZHUERLC1" target="_blank">
                            <img src = { icon_whatsapp } alt = "Icono de nuestro WhatsApp" />
                        </a>
                        <a href = "https://m.me/KikeanaArt" target="_blank">
                            <img src = { icon_messenger } alt = "Icono de nuestro Messenger" />
                        </a>
                    </div>
                </section>

            </div>
        </header>
        
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

        <div className = "banner">
            <picture>
                <source media = "(min-width:800px)" srcset = { banner1_1200 } />
                <source media = "(min-width:600px)" srcset = { banner1_800 } />
                <img src = { banner1_600 } alt="Imagen 1 del Banner, Tejiendo Amigurumis"/>
            </picture>
        </div>

        <main>
            <div className = "main-container">Contenedor Principal</div>
            <aside>
                <div className = "social-media">Redes Sociales</div>
                <div className = "aux">Auxiliar</div>
            </aside>
        </main>
        <footer>
            <div className = "footer-left">Footer Izquierdo</div>
            <div className = "footer-right">Footer Derecho</div>
        </footer>
    </div>
  )
}

export { Home };