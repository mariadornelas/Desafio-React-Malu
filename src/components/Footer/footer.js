import React from 'react';
import './footer.css';
import { FaFacebookSquare } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { IoLogoLinkedin } from 'react-icons/io';
import { FaTwitterSquare } from 'react-icons/fa';


const Footer = () => {
    return(
        <>
            <div className='footer-container'>
                <div className='footer-newsletter'>
                    <h1>Newsletter</h1>
                    <p>Quer ficar por dentro da nossa empresa? Coloque seu email no campo abaixo.</p>
                    <div className='form5'>
                        <input placeholder='Email' type="email"></input>
                        <button className='button-news'>Inscrever</button>
                    </div>
                </div>
                <div className='footer-center'>
                    <div className='reserved'>
                        <h1>© 2022 By Astro. All Rights Reserved.</h1>
                    </div>
                </div>
                <div className='footer-social'>
                    <div className='icons'>
                        <i><FaFacebookSquare /></i>
                        <i><RiInstagramFill /></i>
                        <i><IoLogoLinkedin /></i>
                        <i><FaTwitterSquare /></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;