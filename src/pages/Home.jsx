import React from 'react';

import logo600 from '../assets/images/600pxTranspKikeana15Oct20.png';
import logo800 from '../assets/images/800pxTranspKikeana15Oct20.png';
import logo1200 from '../assets/images/1200pxTranspKikeana15Oct20.png';
import banner1_600 from '../assets/images/Banner1Small600.jpg';
import banner1_800 from '../assets/images/Banner1Medium800.jpg';
import banner1_1200 from '../assets/images/Banner1Large1200.jpg';
import icon_menu from '../assets/icons/icon_menu.svg';

const Home = () => {
  return (
    <div>
        <header>
            <div className = "header-message">Envíos a toda Colombia</div>
            
            <div className = "header-container">

                <img src = { icon_menu } alt="Icono de Menu Desplegable" className = "icon-menu" />
                
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
                </section>

            </div>
        </header>
        
        <nav className = "navbar">
            <ul>
                <li>
                    <a href = "">Inicio</a>
                </li>
                <li>
                    <a href = "">Noticias Crocheteras</a>
                </li>
                <li>
                    <a href = "">Nuestros Amigurumis</a>
                </li>
                <li>
                    <a href = "">Patrones Gratis</a>
                </li>
                <li>
                    <a href = "">Sobre Nosotros</a>
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