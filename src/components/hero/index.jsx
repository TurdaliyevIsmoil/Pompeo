import React from 'react';
import './style.scss';
import titleQuote from '../../images/hero-title-&.svg';
import heroImg from '../../images/hero.png';

const Hero = () => {
    return (
        <header className='hero-section flex-center'>
            <div className="container hero-inner flex-center">
                <div className="first-column">
                    <div className="topline">Pompeo POttery</div>
                    <div className="title big">Unique Porcelain <br />Stone Collection <img src={titleQuote} alt="" /></div>
                    <p>Unique & modern pottery made by our master in porcelain & stones</p>
                    <button className='button'>Shop Collection</button>
                </div>
                <div className="second-column">
                    <img src={heroImg} alt="" />
                </div>
            </div>

        </header>
    );
}

export default Hero;
