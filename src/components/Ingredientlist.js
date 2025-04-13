function Ingredientlist(props) {
    const ingredientlist = props.ingredients.map((ing, index) => (
        <li key={index}>{ing}</li>
    ))
    // if (ingredients.length) {
        return (
            <section className="ingredientsOnHand">
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">
                    {ingredientlist}
                </ul>
                {props.ingredients.length >= 4 &&
             
                <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={props.getRecipe}>Get a recipe</button>
                </div>}

        
            </section>
            
        )
    }
    

export default Ingredientlist