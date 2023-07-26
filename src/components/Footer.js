import React from 'react';
import './Footer.css';

import MyAvatar from '../assets/images/image-1.svg';
 

const Footer = () => {
  return (
    <footer className="footerBox">
        <img src={MyAvatar} alt="my avatar" className="footerAvatar" />
        
        <div className="author">
            <span className="authorText">Creation of</span>
            <a href="https://github.com/rodrigompires?tab=repositories" className="btnFlip" data-back="Developer"
                data-front="Rodrigo Pires" target="_blank" rel="noopener noreferrer"> </a>
        </div>
  </footer>
  )
}

export default Footer