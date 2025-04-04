import './Discover.css'
import { useNavigate } from 'react-router-dom'

function Section1 () {
    const navigate = useNavigate();
    const action=()=>{
        navigate('/action')
    }
    return (
        <>
            <div className="elevate">
                <div className="sachee_agarwal">
                <h1>Elevate <br />Your <br />Culinary</h1>
                <button className="cooking-btn" onClick={action}>Start Cooking Now</button>
                </div>
            </div>
        </>
    )
}
export default Section1