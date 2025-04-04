import React, { useState, useRef } from 'react';
import './CreateRecipe.css';
import { useNavigate } from 'react-router-dom'

function CreateRecipe() {
    const navigate = useNavigate();
    const home = () => {
        navigate('/')
    }
  const [recipeTitle, setRecipeTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState('');
  const [steps, setSteps] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleAddIngredient = () => {
    if (newIngredient.trim()) {
      setIngredients([...ingredients, newIngredient]);
      setNewIngredient('');
    }
  };

  const handleAddStep = () => {
    const newStepId = steps.length ? Math.max(...steps.map(step => step.id)) + 1 : 1;
    setSteps([...steps, { id: newStepId, content: '' }]);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };


  return (
    <div className="create-recipe-container">
      <div className="create-recipe-header">
        <h1>Create new recipe</h1>
        <button className="save-button" onClick={home}>Save</button>
      </div>

      <div className="recipe-form">
        <div className="form-group">
          <label htmlFor="recipe-title">Recipe Title:</label>
          <input
            type="text"
            id="recipe-title"
            className="form-control"
            value={recipeTitle}
            onChange={(e) => setRecipeTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Recipe image:</label>
          <input 
            type="file"
            ref={fileInputRef}
            onChange={handleImageUpload}
            accept="image/*"
            style={{ display: 'none' }}
          />
          <div className="image-upload-container">
            {!selectedImage ? (
              <div className="empty-image-container">
                <button className="add-image-btn" onClick={triggerFileInput}>
                  <span className="camera-icon">📷</span>
                  <span>Add Recipe Image</span>
                </button>
              </div>
            ) : (
              <div className="image-preview">
                <img src={selectedImage} alt="Recipe preview" />
                <div className="image-actions">
                  <button className="image-action-btn">Set as cover</button>
                  <button className="image-action-btn" onClick={triggerFileInput}>Change image</button>
                </div>
              </div>
            )}
            
            <div className="image-thumbnails">
              <div className="thumbnail-container">
                <button className="add-photo-btn" onClick={triggerFileInput}>
                  <span className="plus-icon">+</span>
                  <span>Add Photo</span>
                </button>
              </div>
              {selectedImage && (
                <div className="thumbnail-container selected">
                  <img src={selectedImage} alt="Selected thumbnail" className="thumbnail" />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Introduce your recipe"
          />
          <div className="character-count">0 / 150</div>
        </div>

        <div className="form-group">
          <label>Ingredients:</label>
          <ul className="ingredients-list">
            {ingredients.map((ingredient, index) => (
              <li key={index}>
                <input
                  type="text"
                  className="form-control"
                  value={ingredient}
                  onChange={(e) => {
                    const updatedIngredients = [...ingredients];
                    updatedIngredients[index] = e.target.value;
                    setIngredients(updatedIngredients);
                  }}
                />
              </li>
            ))}
            <li>
              <input
                type="text"
                className="form-control"
                value={newIngredient}
                onChange={(e) => setNewIngredient(e.target.value)}
                placeholder="Add ingredients"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleAddIngredient();
                  }
                }}
              />
            </li>
          </ul>
          <button className="add-header-btn" onClick={handleAddIngredient}>
            + Header
          </button>
        </div>

        <div className="form-group">
          <label>Instructions:</label>
          <div className="steps-container">
            {steps.map((step, index) => (
              <div key={step.id} className="step-item">
                <div className="step-header">
                  <div className="step-number">Step {step.id}</div>
                  <div className="step-icon-container">
                    <button className="step-icon-btn">
                      <span className="camera-icon">📷</span>
                    </button>
                  </div>
                </div>
                <textarea
                  className="form-control step-textarea"
                  value={step.content}
                  onChange={(e) => {
                    const updatedSteps = [...steps];
                    updatedSteps[index].content = e.target.value;
                    setSteps(updatedSteps);
                  }}
                />
              </div>
            ))}
            <input
              type="text"
              className="form-control"
              placeholder="Write instructions"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleAddStep();
                }
              }}
            />
          </div>
          <button className="add-header-btn" onClick={handleAddStep}>
            + Header
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateRecipe;