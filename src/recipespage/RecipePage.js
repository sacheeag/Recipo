import React from "react";
import './Page.css'
const RecipePage = () => {
  return (
    <div className="carousel-card">
      <div className="overlay">
        <p className="trending">Trending now</p>
        <h2 className="title">Mike’s famous salad with cheese</h2>
        <p className="author">By John Mike</p>
        <div className="nav-arrows">
          <span className="arrow">&#8592;</span>
          <span className="dots"> • • • </span>
          <span className="arrow">&#8594;</span>
        </div>
      </div>
    </div>
  );
};

export default RecipePage;
