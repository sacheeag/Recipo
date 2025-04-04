import './Discover.css'
import { useNavigate } from 'react-router-dom'
function DiscoverBox() {
    const navigate = useNavigate();
    const action=()=>{
        navigate('/action')
    }
    const recipee=()=> {
        navigate('/recipe')
    }
    return(
        <>
            
            <div className="discover">
                <div className="dis">
                    <h1 onClick={action}>Discover</h1>
                </div>
            <div className="explore">
                <p onClick={recipee}>Explore</p>
            </div>
            <div className="savor">
                <p onClick={recipee}>Savor</p>
            </div>
            <div className="embark">
                <p onClick={recipee}>Embark on</p>
            </div>
            <div className="indulge">
                <p onClick={recipee}>Indulge</p>
            </div>
            </div>
        </>
    )
}
export default DiscoverBox;