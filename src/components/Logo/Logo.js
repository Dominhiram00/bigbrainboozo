import React from "react";
import Tilt from 'react-parallax-tilt';
import './Logo.css';

const Logo = () => {
    return (
    <Tilt className = "br2 shadow-2">
        <div style={{ height: '100px'}}>
          <h1>🧻Welcome to the Simple Site🧻</h1>
        </div>
    </Tilt>
    )
}

export default Logo;