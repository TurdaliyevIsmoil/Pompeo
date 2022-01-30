import React from 'react';
import './style.scss';

const AbsoluteText = ({ align, children }) => {
    return (
        <div className={`absolute-text flex-center ${align === "left" ? 'left' : 'right'}`}><div>{children}</div></div>
    );
}

export default AbsoluteText;

