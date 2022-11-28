import React from 'react';
import { Link } from 'react-router-dom';
import logo from '@/assets/FooterLogo.svg';
import './footer.css'

const Footer = () => {
    return (
        <footer>
            <Link className='footer-link' to='/home'>
                <img className='footer-logo' src={logo} alt='Logo Kasa'/>
            </Link>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;