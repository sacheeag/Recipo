import Food3 from '../images/Food3.jpg'
import './Discover.css'
import { useNavigate } from 'react-router-dom'
function Section2() {
    const navigate = useNavigate();
    const action=()=>{
        navigate('/action')
    }
    const recipee=()=> {
        navigate('/recipe')
    }
    return (
        <>
            <div className="section2">
                <div className="insideSection">
                    <img src={Food3} alt="foodpic" onClick={recipee}/>
                    <div className="text">
                        <h1>
                            Empower Your Culinary Journey
                        </h1>
                        <p>Embark on a Delectable Expedition: Uncover the Secrets of Mouthwatering Meals and Satisfy Your Cravings for Culinary Perfection</p>
                        <button onClick={action}>Discover your Culinary Potential</button>
                    </div>
                    
                </div>

            </div>
        </>
    )
}
export default Section2