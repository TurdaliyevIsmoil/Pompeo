import React from 'react';

const Product = ({data}) => {
    return (
        <div className={`product flex-center ${data.imgFirst ? 'img-first' : ''}`}>
            <div className="column flex-center">
                <img src={data.img} alt="Image" />
            </div>
            <div className="column">
                <div className="title small">{data.title}</div>
                <p className="paragraph small">{data.paragraph}</p>
                <div className='bold'><a>View Details</a></div>
            </div>
        </div>
    );
}

export default Product;
