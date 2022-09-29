import React from 'react';
import logo from '../../images/strongman.png';
import './Header.css';

const Header = () => {
    return (
        <nav className='nav'>
            <img className='logo' src={logo} alt="" />
            <h1> GYM-CLUB</h1>
        </nav>
    );
};

export default Header;