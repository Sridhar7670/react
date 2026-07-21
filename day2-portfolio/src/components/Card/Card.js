import './Card.css';

const Card = ({ icon, title, description, linkText, linkUrl }) => {
  return (
    <div className="skill-card">
      <div className="card-icon">{icon}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      {linkUrl && (
        <a className="card-link" href={linkUrl} target="_blank" rel="noopener noreferrer">
          {linkText || 'View Repository'}
        </a>
      )}
    </div>
  );
};

export default Card;
