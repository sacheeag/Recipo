import Soup from '../images/Soup.jpg'
import Pizza1 from '../images/Pizza1.jpg'
import Dessert from '../images/Dessert.jpg'
import Vegan from '../images/Vegan.jpg'
import './Discover.css'
import { useNavigate } from 'react-router-dom'
function Recipes() {
    const navigate = useNavigate();
    const recipee=()=> {
        navigate('/recipe')
    }
    return(
        <>
            <div className="recipeComponent">
                <div className="heading">
                    <h1>Popular and Top Rated Recipes</h1>
                    <div className="imgtxt">
                        <div className="comp1">
                            <img src={Soup} alt="soup" onClick={recipee}/>
                            <p onClick={recipee}>Healthy Recipes</p>
                        </div>
                        <div className="comp2">
                            <img src={Pizza1} alt="pizza" onClick={recipee}/>
                            <p onClick={recipee}>Quick & Easy</p>
                        </div>
                        <div className="comp3">
                            <img src={Dessert}alt="dessert" onClick={recipee}/>
                            <p onClick={recipee}>Desserts</p>
                        </div>
                        <div className="comp4">
                            <img src={Vegan} alt="vegan" onClick={recipee}/>
                            <p onClick={recipee}>Vegan & Vegetarian</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Recipes;

