import React from 'react';
import './style.scss';
import titleImg from '../../images/hero-title-&.svg';
import Offers from './offers';
import { firstProduct, secondProduct } from './product/data';
import Product from './product';
import AbsoluteText from '../absoluteText';

const About = () => {
    return (
        <div className='about' id='about'>
            <div className="container about-inner">
                <AbsoluteText align="left">Hand Craft Pottery</AbsoluteText>
                <h4 className="topline">Product Categories</h4>
                <h2 className="title">Porcelain <img src={titleImg} alt="" /> Pottery </h2>
                <Offers />
            </div>
            <hr />
            <div className="container about-inner">
            <AbsoluteText align="right">Featured Products</AbsoluteText>
                <div className="products">         
                    <Product data={firstProduct} />
                    <Product data={secondProduct} />
                </div>
            </div>
        </div>
    );
}

export default About;

