import Logo from '../images/Logom.png'

function Footer () {
    return (
        <>
            <div className="footer">
                <div className="logobox">
                    <img src={Logo} alt="logo"/>
                    <p>© 2025 Recipo, Inc.
                    All rights reserved.<br /><b> Made by SACHEE AGARWAL 23BDS0087 </b></p>
                </div>
            
            <div className="linkbox">
                <div className="linkcolumn1">
                    <b>Company</b>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/recipe">Recipes</a>
                    <a href="/contact">Contact</a>
                </div>
                <div className="linkcolumn2">
                    <b>Resources</b>
                    <a href="/">FAQs</a>
                    <a href="/">Careers</a>
                    <a href="/">Terms</a>
                    <a href="/">Privacy</a>
                </div>
                <div className="linkcolumn3">
                    <b>Connect</b>
                    <a href="/">Instagram</a>
                    <a href="/">Twitter</a>
                    <a href="/">Facebook</a>
                    <a href="/">Youtube</a>
                </div>
            </div>
            </div>
        </>
    )
}
export default Footer