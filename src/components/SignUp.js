import React, { useState } from 'react';
import './SignLogin.css'
import { useNavigate } from 'react-router-dom'


const SignUp = () => {
    const navigate = useNavigate();
    const home1 = () => {
        navigate('/home1')
    }
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };


  return (
    <div className="design-container">
      <div className="content-wrapper">
        <div className="text-container">
          <h1> Discover Culinary Magic  </h1>
          <h1>Cook With us</h1>
          <p>
          Find recipes tailored to your ingredients. Whether you're a seasoned chef or a kitchen beginner, we'll help you create delicious meals with what you already have. 
          </p>
          
          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="form-fields">
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name: (eg: Sachee Agarwal)" 
                className="input-field" 
                required
              />
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address: (eg: sachee.agarwal2023@vitstudent.ac.in)" 
                className="input-field" 
                required
              />
              <input 
                type="password" 
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password: (eg: 23BDS0087)" 
                className="input-field" 
                required
              />
            </div>
            <button type="submit" className="signup-btn1" onClick={home1}>
              Sign up
            </button>
          </form>
        </div>
      </div>
      
    </div>
  );
};

export default SignUp;