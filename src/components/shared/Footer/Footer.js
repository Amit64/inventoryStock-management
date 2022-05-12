import React from 'react';
import './Footer.css'


const Footer = () => {
    return (
        <footer className='text-center text-white text-xl  bg-cyan-900 footer-content'>
            <h2><small>copyright &copy; {new Date().getFullYear()}</small></h2>
        </footer>
    );
};

export default Footer;