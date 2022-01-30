import React from 'react';
import './style.scss';
import img from './../../images/collection-1.png';
import Product from './product';
import { products } from './data';
import ReadyToShop from './readyToShop';
import AbsoluteText from '../absoluteText';

const Shop = () => {
    return (
        <div className='shop'>
            <div className="container shop-inner">
                <AbsoluteText align="left">Product Collections</AbsoluteText>
                <div className="topline">Our online store</div>
                <div className="title ">Pottery Collection</div>
                <div className="products">
                    {products.map(data => (
                        <Product data={data} />
                    ))}
                </div>
                <button className="button">View All Products</button>
            </div>
            <ReadyToShop />
        </div>
    );
}

export default Shop;
