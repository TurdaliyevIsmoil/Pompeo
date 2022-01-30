import React from 'react';
import './style.scss';
import titleQuote from '../../images/hero-title-&.svg';
import heroImg from '../../images/hero.png';
import Link from 'react-scroll/modules/components/Link';

const Hero = () => {
    return (
        <header className='hero-section flex-center' id='hero'>
            <div className="container hero-inner flex-center">
                <div className="first-column">
                    <div className="topline">Pompeo POttery</div>
                    <div className="title big">Unique Porcelain <br />Stone Collection <img src={titleQuote} alt="" /></div>
                    <p className='paragraph'>Unique & modern pottery made by our master in porcelain & stones</p>
                    <Link to='about' spy={true} smooth={true} offset={-80}> <button className='button'>Shop Collection</button></Link>
                </div>
                <div className="second-column">
                    <img src={heroImg} alt="" />
                </div>
            </div>

        </header>
    );
}

export default Hero;
