import React, { useState } from 'react';
import Logo from '../images/Logom.png';
import { useNavigate } from 'react-router-dom';

function Headerf() {
    const navigate = useNavigate();
    const [menuActive, setMenuActive] = useState(false);
    
    const home = () => {
        navigate('/');
    };
    
    const action2 = () => {
        navigate('/action2');
    };
    
    const login = () => {
        navigate('/action3');
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
            <div className="auth-buttons">
                <button className="login-btn" onClick={login}>Login</button>
                <button className="signup-btn" onClick={action2}>Sign Up</button>
            </div>
        </div>
        </>
    );
}

export default Headerf;