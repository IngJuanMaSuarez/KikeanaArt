import React from 'react';

import icon_like from '../assets/icons/icon_like.png';
import icon_newsletter from '../assets/icons/icon_newsletter.png';

import icon_instagram_footer from '../assets/icons/icon_instagram_footer.svg';
import icon_facebook_footer from '../assets/icons/icon_facebook_footer.svg';
import icon_twitter_footer from '../assets/icons/icon_twitter_footer.svg';
import icon_pinterest_footer from '../assets/icons/icon_pinterest_footer.svg';
import icon_tiktok_footer from '../assets/icons/icon_tiktok_footer.svg';
import icon_whatsapp_footer from '../assets/icons/icon_whatsapp_footer.svg';
import icon_messenger_footer from '../assets/icons/icon_messenger_footer.svg';

const Footer = () => {
  return (
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
  )
}

export { Footer };