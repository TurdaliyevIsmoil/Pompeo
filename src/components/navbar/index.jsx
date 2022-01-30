import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../../images/logo.svg';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { FaBars, FaTimes } from 'react-icons/fa';
import './style.scss';

const Navbar = () => {
    const [mobile, setmobile] = useState(false);
    const toggle = () => setmobile((prev) => !prev)
    return (
        <><nav className='navbar flex-center'>
            <div className="container navbar-inner">

                <div className="logo flex-center">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="opener-mobile flex-center">
                    <FaBars onClick={toggle} />
                </div>
                <menu className={`menu flex-center ${mobile ? 'opened' : 'closed'}`}>
                    <li>
                        <Link to='hero' onClick={toggle} spy={true} smooth={true} offset={-80} >Home</Link>
                    </li>
                    <li>
                        <Link to='about' onClick={toggle} spy={true} smooth={true} offset={-80} >About</Link>
                    </li>
                    <li>
                        <Link to='shop' onClick={toggle} spy={true} smooth={true} offset={-80} >Shop</Link>
                    </li>
                    <li>
                        <Link to='contact' onClick={toggle} spy={true} smooth={true} offset={-80} >contact</Link>
                    </li>
                    <div className={`closer-mobile ${mobile ? 'block' : 'none'}`}>
                        <FaTimes onClick={toggle} />
                    </div>
                    <li>
                        <Link className='flex-center'><HiOutlineShoppingCart /> cart</Link>
                    </li>
                </menu>
            </div>
        </nav> <div className="place"></div>
        </>

    );
}

export default Navbar;
