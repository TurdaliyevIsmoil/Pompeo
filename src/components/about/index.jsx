import React from 'react';
import './style.scss';
import titleImg from '../../images/hero-title-&.svg';
import vases from '../../images/vase.png';
import mugs from '../../images/mugs.png';
import plates from '../../images/plates.png';

const About = () => {
    return (
        <div className='about'>
            <div className="container about-inner">
                <h4 className="topline">Product Categories</h4>
                <h2 className="title">Porcelain <img src={titleImg} alt="" /> Pottery </h2>
                <div className="offers">
                    <div className="offer flex-center">
                        <img src={vases} alt="Vases" />
                        Vases
                    </div>
                    <div className="offer flex-center">
                        <img src={mugs} alt="Mugs" />
                        mugs
                    </div>
                    <div className="offer flex-center">
                        <img src={plates} alt="Plates" />
                        plates
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;

