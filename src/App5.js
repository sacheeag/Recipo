import Headerf2 from './components/Headerf2'
import DiscoverBox from './components/DiscoverBox';

import Footer from './components/Footer'
import Section2 from './components/Section2'
import Recipes from './components/Recipes';
import ShareRecipe from './components/ShareRecipe';
import LandingPage from './components/Landingpage';
function App5() {
  return (
    <div className="App">
      <Headerf2 />
      <div className="main-content">
      <DiscoverBox />
        <LandingPage />
        
        <ShareRecipe />
        <Recipes />
        <Section2 />
        
      </div>
      <Footer />
    </div>
  );
}

export default App5;