import Logo from '../images/Logom.png'
import { useNavigate } from 'react-router-dom'

function Headerf2() {
    const navigate = useNavigate();
    const home = () => {
        navigate('/')
    }
    
    
    return (
        <>
        <div className="header">
            <div className="title">
                <img src={Logo} alt="Sachee Agarwal 23BDS0087" />
                <span onClick={home}>Recipo</span>
            </div>
            <div className="nav-links">
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/recipe">Recipes</a>
                <a href="/">Contact</a>
            </div>
            
        </div>
        </>
    )
}
export default Headerf2;