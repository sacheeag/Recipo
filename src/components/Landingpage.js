import React, { useState, useEffect } from 'react';
import Section1 from './Section1';
import RecipeBook from './RecipeBook';
import './Landingpage.css';

function LandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 2;
  
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === totalSlides - 1 ? 0 : prevSlide + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? totalSlides - 1 : prevSlide - 1));
  };
  
  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    
    return () => clearInterval(interval);
  }, [currentSlide]);
  
  return (
    <div className="landing-page">
      <div className="slider-container">
        <div 
          className="slider-wrapper" 
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          <div className="slide">
            <Section1 />
          </div>
          <div className="slide">
            <RecipeBook />
          </div>
        </div>
        
        <button className="slider-button prev-button" onClick={prevSlide}>
          &lt;
        </button>
        <button className="slider-button next-button" onClick={nextSlide}>
          &gt;
        </button>
        
        <div className="slider-dots">
          {[...Array(totalSlides)].map((_, index) => (
            <button 
              key={index}
              className={`slider-dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LandingPage;