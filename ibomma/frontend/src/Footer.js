import { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom"
import Context from "./Context";
const Footer = () => {
const {active,setActive}=useContext(Context)

  return (
    <div className='footer'>
      <Link to="/">
      <span
        className={`footer-icon ${active === 'home' ? 'active' : ''}`}
        onClick={() => setActive('home')}
      >
        <FontAwesomeIcon icon={faHouse} style={{ fontSize: '24px' }} />
      </span>
      </Link>

      <span
        className={`material-symbols-outlined footer-icon ${active === 'stories' ? 'active' : ''}`}
        onClick={() => setActive('stories')}
      >
        web_stories
      </span>

      <Link to="/favourite" >
      <span
        className={`material-symbols-outlined footer-icon ${active === 'favorite' ? 'active' : ''}`}
        onClick={() => setActive('favorite')}
      >
        favorite
      </span>
      </Link>

      <Link to="/login">
      <span
        className={`material-symbols-outlined footer-icon ${active === 'person' ? 'active' : ''}`}
        onClick={() => setActive('person')}
      >
        person
      </span>
      </Link>
    </div>
  );
};

export default Footer;
