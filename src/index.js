import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import App2 from './App2'
import App3 from './App3'
import App4 from './App4';
import App5 from './App5';
import App6 from './App6';
import App7 from './App7';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/action" element={<App2 />} />
        <Route path="/action2" element={<App3 />} />
        <Route path="/action3" element={<App4 />} />
        <Route path="/home1" element={<App5 />}/>
        <Route path="/recipe" element={<App6 />}/>
        <Route path="/share" element={<App7 />}/>
      </Routes>
    </Router>
    
    

  </React.StrictMode>
);
reportWebVitals();

