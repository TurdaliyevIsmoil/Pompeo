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
        <nav className='navbar flex-center'>
            <div className="container navbar-inner">
                <div className="logo flex-center">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="opener-mobile flex-center">
                    <FaBars onClick={toggle} />
                </div>
                <menu className={`menu flex-center ${mobile ? 'opened' : 'closed'}`}>
                    <li>
                        <Link to='hero'>Home</Link>
                    </li>
                    <li>
                        <Link to='hero'>About</Link>
                    </li>
                    <li>
                        <Link to='hero'>Shop</Link>
                    </li>
                    <li>
                        <Link to='hero'>contact</Link>
                    </li>
                    <div className={`closer-mobile ${mobile ? 'block' : 'none'}`}>
                        <FaTimes onClick={toggle} />
                    </div>
                    <li>
                        <Link to='hero' className='flex-center'><HiOutlineShoppingCart /> cart</Link>
                    </li>
                </menu>
            </div>
        </nav>
    );
}

export default Navbar;
