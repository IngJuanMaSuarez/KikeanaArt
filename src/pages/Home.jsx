import React from 'react';
import { Slideshow } from '../components/Slideshow';

import logo600 from '../assets/images/600pxTranspKikeana15Oct20.png';
import logo800 from '../assets/images/800pxTranspKikeana15Oct20.png';
import logo1200 from '../assets/images/1200pxTranspKikeana15Oct20.png';

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

import icon_like from '../assets/icons/icon_like.png';
import icon_newsletter from '../assets/icons/icon_newsletter.png';

import icon_instagram_footer from '../assets/icons/icon_instagram_footer.svg';
import icon_facebook_footer from '../assets/icons/icon_facebook_footer.svg';
import icon_twitter_footer from '../assets/icons/icon_twitter_footer.svg';
import icon_pinterest_footer from '../assets/icons/icon_pinterest_footer.svg';
import icon_tiktok_footer from '../assets/icons/icon_tiktok_footer.svg';
import icon_whatsapp_footer from '../assets/icons/icon_whatsapp_footer.svg';
import icon_messenger_footer from '../assets/icons/icon_messenger_footer.svg';

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
            <Slideshow />
        </div>

        <main>
            
            <div className="container">
                <div className = "card">
                    <div className = "card-header">
                        <img src = "https://i.pinimg.com/564x/9f/d7/60/9fd7604c25f8d044b2d9a1bf55fa0d53.jpg" alt = "" />
                    </div>
                    <div className = "card-body">
                        <span class = "tag tag-teal">Animalitos</span>
                        <h4>Unicornio Emma</h4>
                        <p>Una nueva integrante a la familia de Unicornios de Kikeana 🦄, su nombre es EMMA, ella es muy cariñosa y amorosa 🤗💞</p>
                    </div>
                </div>

                <div className = "card">
                    <div className = "card-header">
                        <img src="https://i.pinimg.com/564x/98/76/51/987651318c5f0b0532a3cd7e225cc9c6.jpg" alt="" />
                    </div>
                    <div className = "card-body">
                        <span class = "tag tag-purple">Series y Peliculas</span>
                        <h4>Vanellope Von Schweetz</h4>
                        <p>Vanellope de Ralph el demoledor, ella es una niña muy traviesa 🤪, juguetona y tiene un gran sentido del humor</p>
                    </div>
                </div>

                <div className = "card">
                    <div className = "card-header">
                        <img src="https://i.pinimg.com/564x/2c/91/74/2c917477657b163df7e2c8820d662111.jpg" alt="" />
                    </div>
                    <div className = "card-body">
                        <span class = "tag tag-purple">Series y Peliculas</span>
                        <h4>Mérida</h4>
                        <p>Mérida y su familia representan lo que es el amor hacia los que queremos👨‍👩‍👧‍👦, la unión, la lucha y el sacrificio💪</p>
                    </div>
                </div>

                <div className = "card">
                    <div className = "card-header">
                        <img src="https://i.pinimg.com/564x/84/d9/b5/84d9b5af95d916752ca64511b84eb874.jpg" alt="" />
                    </div>
                    <div className = "card-body">
                        <span class = "tag tag-purple">Series y Peliculas</span>
                        <h4>Cruella de Vil</h4>
                        <p>Desde los mas excéntricos desfiles de moda y glamour les presentamos a Cruella de Vil, una hermosa y refinada mujer diseñadora de modas💁🏻‍♀️💫</p>
                    </div>
                </div>

                <div className = "card">
                    <div className = "card-header">
                        <img src="https://i.pinimg.com/564x/04/41/0f/04410fe61ece3bec2e44958ffaf01828.jpg" alt="" />
                    </div>
                    <div className = "card-body">
                        <span class = "tag tag-pink">Figuras</span>
                        <h4>Policia</h4>
                        <p>¡Dios y Patria! , el lema de nuestra Policía Nacional 🚨👮‍♂️. Un homenaje a aquellos que cumplen con los códigos y apoyan a la ciudadanía 💪</p>
                    </div>
                </div>

                <div className = "card">
                    <div className = "card-header">
                        <img src="https://i.pinimg.com/564x/c6/5d/b2/c65db27d318fbabc5d1e0ed40d5d41a6.jpg" alt="" />
                    </div>
                    <div className = "card-body">
                        <span class = "tag tag-purple">Series y Peliculas</span>
                        <h4>Chavo del Ocho</h4>
                        <p>Y recuerden, la venganza nunca es buena, mata el alma y la envenena. Eso eso eso 😊</p>
                    </div>
                </div>

                <div className = "card">
                    <div className = "card-header">
                        <img src="https://i.pinimg.com/564x/1b/86/66/1b866646917a0ec9f0e5ccc10a984b6f.jpg" alt="" />
                    </div>
                    <div className = "card-body">
                        <span class = "tag tag-teal">Animalitos</span>
                        <h4>Milu la Pulpita Reversible</h4>
                        <p>Pulpos Reversibles! Úsalos para ayudar a expresar o comunicar tus sentimientos, incluso para jugar con tu pareja 👫</p>
                    </div>
                </div>

                <div className = "card">
                    <div className = "card-header">
                        <img src="https://i.pinimg.com/564x/11/13/f8/1113f8bc7740b6c3cdae36c6228fe3df.jpg" alt="" />
                    </div>
                    <div className = "card-body">
                        <span class = "tag tag-pink">Figuras</span>
                        <h4>Diablito</h4>
                        <p>Que tal un lindo día lleno de aventuras, maldades y locuras junto con este diablito 😈😍?</p>
                    </div>
                </div>

                <div className = "card">
                    <div className = "card-header">
                        <img src="https://i.pinimg.com/564x/93/10/72/9310721b5f1983a2b4a8e74151316c62.jpg" alt="" />
                    </div>
                    <div className = "card-body">
                        <span class = "tag tag-teal">Animalitos</span>
                        <h4>Dumbo</h4>
                        <p>Con ustedes la máxima atracción de este circo 🤹‍♂️🤡. Un joven elefante, cuyas orejas de gran tamaño le permiten volar 🐘</p>
                    </div>
                </div>

                <div className = "card">
                    <div className = "card-header">
                        <img src="https://i.pinimg.com/564x/89/b5/18/89b518fa05df44bee3d9a8191e8fc5c8.jpg" alt="" />
                    </div>
                    <div className = "card-body">
                        <span class = "tag tag-pink">Figuras</span>
                        <h4>Pesebre</h4>
                        <p>🎄🎅🎁 ¡Llegó diciembre! ☃️🦌🎀. Nos place compartir con ustedes este hermoso Pesebre que hicimos con mucho cariño</p>
                    </div>
                </div>

                <div className = "card">
                    <div className = "card-header">
                        <img src="https://i.pinimg.com/564x/03/03/26/0303261b46885253dad8febaa22cc7ae.jpg" alt="" />
                    </div>
                    <div className = "card-body">
                        <span class = "tag tag-teal">Animalitos</span>
                        <h4>Skye</h4>
                        <p>Que tal una caminata por el parque junto con esta preciosa perrita🐕❤️?, su nombre es Skye😁 !Por cierto es la compañía más fiel!</p>
                    </div>
                </div>

                <div className = "card">
                    <div className = "card-header">
                        <img src="https://i.pinimg.com/564x/75/ae/be/75aebe998237f2c1e2cd808955e62519.jpg" alt="" />
                    </div>
                    <div className = "card-body">
                        <span class = "tag tag-teal">Animalitos</span>
                        <h4>Pingüinito</h4>
                        <p>Este lindo y tierno pingüinito 🐧 viene desde los mas helados polos 🥶 para hacerte muy feliz con su compañía</p>
                    </div>
                </div>
            </div>
        </main>

        <footer>
            <div className = "footer-up">
                <div className='contact-container'>
                    <a href="mailto:KikeanaArt@gmail.com" target="_blank">
                        <img src= { icon_newsletter } alt="" />
                    </a>
                    <div className='contact-information'>
                        <p>Envíanos un mail 💌. Recibimos comentarios, sugerencias o preguntas ¡lo que quieras!</p>
                    </div>
                </div>
                <div className='contact-container'>
                    <a href="https://instabio.cc/KikeanaArt" target="_blank">
                        <img src= { icon_like } alt="" />
                    </a>
                    <div className='contact-information'>
                        <p>Si te gusta lo que hacemos apóyanos con un ❤️ y síguenos en nuestras redes sociales.</p>
                    </div>
                </div>
            </div>
            <div className = "footer-down">
                <div className = "social-media-footer-container">
                    <a href = "https://www.instagram.com/KikeanaArt" target="_blank">
                        <img src = { icon_instagram_footer } alt = "Icono de nuestro Instagram" />
                    </a>
                    <a href = "https://www.facebook.com/KikeanaArt" target="_blank">
                        <img src = { icon_facebook_footer } alt = "Icono de nuestro Facebook" />
                    </a>
                    <a href = "https://twitter.com/KikeanaArt" target="_blank">
                        <img src = { icon_twitter_footer } alt = "Icono de nuestro Twitter" />
                    </a>
                    <a href = "https://co.pinterest.com/KikeanaArt" target="_blank">
                        <img src = { icon_pinterest_footer } alt = "Icono de nuestro Pinterest" />
                    </a>
                    <a href = "https://www.tiktok.com/@KikeanaArt" target="_blank">
                        <img src = { icon_tiktok_footer } alt = "Icono de nuestro Tiktok" />
                    </a>
                    <a href = "https://wa.me/message/UFD4QQZHUERLC1" target="_blank">
                        <img src = { icon_whatsapp_footer } alt = "Icono de nuestro WhatsApp" />
                    </a>
                    <a href = "https://m.me/KikeanaArt" target="_blank">
                        <img src = { icon_messenger_footer } alt = "Icono de nuestro Messenger" />
                    </a>
                </div>
                <p>Kikeana - Amigurumi - Crochet - Colombia</p>
            </div>
        </footer>
    </div>
  )
}

export { Home };