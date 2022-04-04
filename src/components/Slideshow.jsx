import React from 'react';
import { Slide } from 'react-slideshow-image';

const Slideshow = () => {

    const slideImages = [
        'https://i.pinimg.com/originals/e2/9d/5d/e29d5d63657d6888a83d031c2da9bd8d.jpg',
        'https://i.pinimg.com/originals/3b/74/9b/3b749b5e56131799d7ce00e5e64c732b.jpg',
        'https://i.pinimg.com/originals/99/7b/0e/997b0ebff5776436e04c9a0c5e9291b0.jpg'
    ];

    const properties = {
        duration: 2000,
      };

    return (

        <div className = "banner">
            <Slide easing = "ease" {...properties}>
                <div className = "each-slide">
                    <div style = {{'backgroundImage': `url(${slideImages[0]})`}}></div>
                </div>
                <div className = "each-slide">
                    <div style = {{'backgroundImage': `url(${slideImages[1]})`}}></div>
                </div>
                <div className = "each-slide">
                    <div style = {{'backgroundImage': `url(${slideImages[2]})`}}></div>
                </div>
            </Slide>
        </div>
    
    )
}

export { Slideshow };