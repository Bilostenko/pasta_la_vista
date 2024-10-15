import React from 'react';
import { useNavigate } from 'react-router-dom';
import './notFound.css'; 

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-container">
      <h2 className="oops">Oops...</h2>
      <h1 className="error-code">404</h1>
      <p className="error-message">PAGE NOT FOUND</p>
      <button onClick={() => navigate('/')} className="home-button">
        GO TO HOME
      </button>
      <svg className="background-svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="none" stroke="white" strokeWidth="2"
          d="M10,10 L190,10 L190,190 L10,190 L10,10"
        />
        <circle cx="100" cy="100" r="80" fill="none" stroke="white" strokeWidth="2" />
      </svg>
    </div>
  );
}

export default NotFound;