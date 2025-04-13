import React, { useState } from 'react';
import Logo from '../images/Logom.png';
import { useNavigate } from 'react-router-dom';

function Headerf2() {
    const navigate = useNavigate();
    const [menuActive, setMenuActive] = useState(false);
    
    const home = () => {
        navigate('/');
    };
    
    
    
    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };
    
    return (
        <>
        <div className="header">
            <div className="mobile-menu-toggle" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="title">
                <img src={Logo} alt="Sachee Agarwal 23BDS0087" />
                <span onClick={home}>Recipo</span>
            </div>
            <div className={`nav-links ${menuActive ? 'active' : ''}`}>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/recipe">Recipes</a>
                <a href="/">Contact</a>
            </div>
            
        </div>
        </>
    );
}

export default Headerf2;