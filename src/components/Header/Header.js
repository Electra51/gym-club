import React from 'react';
import logo from '../../images/strongman.png';
import './Header.css';

const Header = () => {
    return (
        <nav className='nav'>
            <img className='logo' src={logo} alt="" />
            <h3> GYM-CLUB</h3>
        </nav>
    );
};

export default Header;