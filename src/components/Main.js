import React from 'react'
import ClaudeRecipe from './ClaudeRecipes';
import Ingredientlist from './Ingredientlist';
import {getRecipeFromOpenRouter} from "./Aiss";

function Main() {
    const [ingredients, setIngredients] = React.useState([]);
    const [recipe, setRecipe] = React.useState("")
    
    
    function handleSubmit(event) {
        event.preventDefault();
        const formdata = new FormData(event.currentTarget);
        const newIngredient = formdata.get("ingredient");
        setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
        event.currentTarget.reset(); 
    }
    
    async function getRecipe() {
        const recipeidea= await getRecipeFromOpenRouter(ingredients);
        console.log(recipeidea);
        setRecipe(recipeidea);
    }
    


    return (
        <main className="main">
            <h1>Enter the Ingredients you have: </h1>
            <form onSubmit={handleSubmit}>
                <label className="addingredient">
                    <input type="text" placeholder="eq. oregano" 
                           aria-label="Add Ingredient" name="ingredient" />
                    <button>Add Ingredient</button>
                </label>
            </form>
            {ingredients.length>0 && <Ingredientlist ingredients={ingredients} getRecipe={getRecipe}/>}
             {recipe && <ClaudeRecipe recipe={recipe}/> }
        </main>
    )
}

export default Main;