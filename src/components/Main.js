import React from 'react'


function Main() {
    const [ingredients, setIngredients] = React.useState([]);
    const [recipeShown, setRecipeShown] = React.useState(false)
    
    const ingredientlist = ingredients.map((ing, index) => (
        <li key={index}>{ing}</li>
    ))
    
    function handleSubmit(event) {
        event.preventDefault();
        const formdata = new FormData(event.currentTarget);
        const newIngredient = formdata.get("ingredient");
        setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
        event.currentTarget.reset(); 
    }
    
    function toggleRecipeShown() {
        setRecipeShown(prevShown => !prevShown)
    }
    
    function displaybox() {
        if (ingredients.length >= 4) {
            return (
                <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={toggleRecipeShown}>Get a recipe</button>
                </div>
            )
        }
    }
    
    function addingred() {
        if (ingredients.length) {
            return (
                <section className="ingredientsOnHand">
                    <h2>Ingredients on hand:</h2>
                    <ul className="ingredients-list" aria-live="polite">
                        {ingredientlist}
                    </ul>
                    {displaybox()}
                </section>
            )
        }
    }

    return (
        <main className="main">
            <form onSubmit={handleSubmit}>
                <label className="addingredient">
                    <input type="text" placeholder="eq. oregano" 
                           aria-label="Add Ingredient" name="ingredient" />
                    <button>Add Ingredient</button>
                </label>
            </form>
            {addingred()}
        </main>
    )
}

export default Main;