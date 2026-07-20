import './Card.css';

/**
 * @param {number} index Position in the list. Used to delay this card's
 *   reveal slightly after the one before it, so a grid of cards appears
 *   one after another instead of all at once.
 */
const Card = ({ icon, title, description, linkText, linkUrl, index = 0 }) => {
  return (
    <div
      className="skill-card reveal"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
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
