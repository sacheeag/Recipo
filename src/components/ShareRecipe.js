import React from 'react';
import './ShareRecipe.css';
import ShareRecipee from '../images/ShareRecipe.jpg';
import { useNavigate } from 'react-router-dom'
function ShareRecipe() {
    const navigate = useNavigate();
    const share=()=>{
        navigate('/share')
    }
  return (
    <div className="share-recipes-container">
      <div className="share-image">
        <img src={ShareRecipee} alt="Phone displaying food photos" />
      </div>
      <div className="share-content">
        <h2>Share Your <span className="highlight">Recipes</span></h2>
        <p>
        Create and publish your favorite dishes for the world to try. Join a community of food lovers today!
        </p>
        <button className="create-recipe-btn" onClick={share}>Create New Recipe</button>
      </div>
    </div>
  );
}

export default ShareRecipe;