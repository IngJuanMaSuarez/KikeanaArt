import React from 'react';
import { Slide } from 'react-slideshow-image';

const Slideshow = () => {

    const slideImages = [
        'https://i.pinimg.com/564x/e2/9d/5d/e29d5d63657d6888a83d031c2da9bd8d.jpg',
        'https://i.pinimg.com/564x/8c/c4/f6/8cc4f686610b862990a0f0ccadef853b.jpg',
        'https://i.pinimg.com/564x/75/ae/be/75aebe998237f2c1e2cd808955e62519.jpg'
    ];

    const properties = {
        duration: 3000,
      };

    return (
        <div>
            <Slide easing="ease" {...properties}>
                <div className="each-slide">
                    <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                    </div>
                </div>
            <div className="each-slide">
                <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                </div>
            </div>
            <div className="each-slide">
                <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                </div>
            </div>
        </Slide>
    </div>
    )
}

export { Slideshow };