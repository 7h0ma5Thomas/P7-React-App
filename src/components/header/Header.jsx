import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logo from '@/assets/HeaderLogo.svg';

export default function Header() {
    return (
            <header>
                <Link className='header-link-logo' to='/home'>
                    <img className='header-logo' src={logo} alt='Logo Kasa'/>
                </Link>
                <nav>
                    <ul>
                        <li><Link className='header-link' to='/home'>Accueil</Link></li>
                        <li><Link className='header-link' to='/about'>A Propos</Link></li>
                    </ul>
                </nav>  
            </header>
    );
};