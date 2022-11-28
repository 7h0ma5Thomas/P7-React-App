import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logo from '@/assets/HeaderLogo.svg';

const Header = () => {
    return (
            <header>
                <Link to='/home'>
                    <img className='header-logo' src={logo} alt='Logo Kasa'/>
                </Link>
                <nav>
                    <ul>
                        <li><Link to='/home'>Accueil</Link></li>
                        <li><Link to='/about'>A Propos</Link></li>
                    </ul>
                </nav>
            </header>
    );
};

export default Header;