import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const [active, setActive] = useState('home');

  return (
    <div className='footer'>
      <span
        className={`footer-icon ${active === 'home' ? 'active' : ''}`}
        onClick={() => setActive('home')}
      >
        <FontAwesomeIcon icon={faHouse} style={{ fontSize: '24px' }} />
      </span>

      <span
        className={`material-symbols-outlined footer-icon ${active === 'stories' ? 'active' : ''}`}
        onClick={() => setActive('stories')}
      >
        web_stories
      </span>

      <span
        className={`material-symbols-outlined footer-icon ${active === 'favorite' ? 'active' : ''}`}
        onClick={() => setActive('favorite')}
      >
        favorite
      </span>

      <span
        className={`material-symbols-outlined footer-icon ${active === 'person' ? 'active' : ''}`}
        onClick={() => setActive('person')}
      >
        person
      </span>
    </div>
  );
};

export default Footer;
