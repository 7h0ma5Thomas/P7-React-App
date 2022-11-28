import React from 'react';
import logo from '@/assets/FooterLogo.svg';
import './footer.css'

const Footer = () => {
    return (
        <footer>
            <img className='footer-logo' src={logo} alt='Logo Kasa'/>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;