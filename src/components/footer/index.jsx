import React from 'react';
import logo from './../../images/logo.svg'
import './style.scss';
import location from '../../images/location.png';
import email from '../../images/email.png';
import call from '../../images/call.png';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container footer-inner flex-center">
                <div className="top flex-center">
                    <img src={logo} alt="" />
                    <p className='paragraph'>I have always striven to fix beauty in wood, stone,</p>
                    <p className='paragraph'>glass or pottery, that has been my creed.</p>
                </div>
                <div className="informations flex-center">
                    <div>
                        <img src={email} alt="Email" />
                        <div className="information-title">Email</div>
                        <p className='paragraph small'>pompeopotery@gmail.com</p>
                    </div>
                    <div>
                        <img src={location} alt="Location" />
                        <div className="information-title">find</div>
                        <p className='paragraph small'>Central Park, Manhattan <br /> New York, 1101</p>
                    </div>
                    <div>
                        <img src={call} alt="Email" />
                        <div className="information-title">Call</div>
                        <p className='paragraph small'>+1 292 345 678</p>
                    </div>
                </div>
            </div>
            <hr />
            <div className="bottom flex-center">
                <p className='paragraph'>Template design by <b>Dorian Hoxha</b>  - Template developed by <a className='bold red' href="https://t.me/ismoilTurdaliyev">Ismoil Turdaliyev</a></p>
            </div>
        </footer>
    );
}

export default Footer;

