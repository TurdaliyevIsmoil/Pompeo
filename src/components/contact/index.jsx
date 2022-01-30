import React from 'react';
import img from '../../images/telegram.png';
import icon from '../../images/hero-title-&.svg';
import './style.scss';
import AbsoluteText from '../absoluteText';

const Contact = () => {
    return (
        <div className='contact' id='contact'>
            <div className="container">
                <AbsoluteText align="right">Lets get in touch</AbsoluteText>
                <img src={img} alt="News Image" />
                <div className="topline">latest news</div>
                <div className="title">Lates news <img src={icon} alt="" /> <br /> New Updates</div>
                <form>
                    <input type="email" placeholder="Email" /> <button type='button'>subscribe</button><br />
                    <div className="check flex-center">
                        <input type="checkbox" id='check' />
                        <label htmlFor='check'>
                            Sign up for our newsletter
                        </label>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;

