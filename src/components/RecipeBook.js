import './Discover.css'
import { useNavigate } from 'react-router-dom'
function RecipeBook () {
    const navigate = useNavigate();
    const recipee = () => {
        navigate('/recipe')
    }
    
    return (
        <>
            <div className="RecipeBook">
                <div className="Recipe-Book-inner">
                    <h1>RECIPE BOOK</h1>
                    <p>Get access to different recipes from all the countries which are easy and quick to cook</p>
                    
                </div>
                <button className="RecipeBook-button" onClick={recipee}>Go to Recipe Book</button>
            </div>
        </>
    )
}
export default RecipeBook;