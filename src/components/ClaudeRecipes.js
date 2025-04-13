import ReactMarkdown from "react-markdown";

function ClaudeRecipe(props) {
    const safeRecipe = typeof props.recipe === "string" ? props.recipe : "";

    return (
        <section className="suggested-recipe-container" aria-live="polite">
            {safeRecipe ? (
                <ReactMarkdown>{safeRecipe}</ReactMarkdown>
            ) : (
                <p>No recipe found. Please try again.</p>
            )}
        </section>
    );
}

export default ClaudeRecipe;
