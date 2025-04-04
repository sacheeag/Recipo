import Headerf2 from './components/Headerf2'
import RecipePage from './recipespage/RecipePage';
import Footer from './components/Footer'
import RecipeCard from './recipespage/RecipeCard';


function App6() {
  return (
    <div className="App">
      <Headerf2 />
      <div className="main-content">
        <RecipePage />
        
        
        <RecipeCard />
      
      </div>
      <Footer />
    </div>
  );
}

export default App6;