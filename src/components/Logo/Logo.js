import React from "react";
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import fire from './fire.png';

const Logo = () => {
    return (
    <Tilt className = "br2 shadow-2">
        <div style={{ height: '100px'}}>
          <img alt = 'logo' src={fire}></img>
        </div>
    </Tilt>
    )
}

export default Logo;