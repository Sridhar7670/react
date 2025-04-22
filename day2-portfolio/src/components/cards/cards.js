import React from 'react';
import './Card.css';

const Card = ({ icon, title, description, linkText, onLinkClick }) => {
  return (
    <div className="skill-card">
      <div className="card-icon">{icon}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <button className="card-link" onClick={onLinkClick}>
        {linkText || 'Read More'}
      </button>
    </div>
  );
};

export default Card;