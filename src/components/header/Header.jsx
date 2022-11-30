import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react'
import './header.css';
import logo from '@/assets/HeaderLogo.svg';

export default function Header() {
    const [setIsOpen] = useState(true)

    return(
            <header>
                <Link className='header-link-logo' to='/home'>
                    <img className='header-logo' src={logo} alt='Logo Kasa'/>
                </Link>
                <nav className='nav-normal'>
                    <ul>
                        <li><Link className='header-link' to='/home'>Accueil</Link></li>
                        <li><Link className='header-link' to='/about'>A Propos</Link></li>
                    </ul>
                </nav>
                <div className='nav-hidden'>
                    <button className='nav-button' onClick={() => setIsOpen(false)}>
                        <nav>
                                <ul>
                                    <li><Link className='header-link' to='/home'>Accueil</Link></li>
                                    <li><Link className='header-link' to='/about'>A Propos</Link></li>
                                </ul>
                        </nav>
                    </button>
                </div>    
            </header>
    );
};