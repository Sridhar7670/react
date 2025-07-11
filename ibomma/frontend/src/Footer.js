import React,{ useContext ,memo} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom"
import Context from "./Context";
import Cookies from "js-cookie"



const Footer = memo(() => {
const {active,setActive}=useContext(Context)
const token = Cookies.get('token');
  return (  
    <div className='footer'>
      <Link to="/">
        <span
          className={`material-symbols-outlined footer-icon ${active === 'home' ? 'active' : ''}`}
          onClick={() => {
          setActive('home');
          Cookies.set('activeTab', 'home');
          }}

        >
          home
        </span>
      </Link>

      <Link to="/favourite" >
      <span
        className={`material-symbols-outlined footer-icon ${active === 'favorite' ? 'active' : ''}`}
       onClick={() => {
          setActive('favorite');
          Cookies.set('activeTab', 'favorite');
          }}
      >
        favorite
      </span>
      </Link>

      { token ? <Link to="/logout">
      <span
          className={`footer-icon ${active === 'logout'?'active':''}`}
         onClick={() => {
          setActive('logout');
          Cookies.set('activeTab', 'logout');
          }}
          title="Logout"
        >
          <FontAwesomeIcon icon={faRightFromBracket} style={{ fontSize: '24px' }} />
        </span>
      </Link>:
      <Link to="/login">
      <span
        className={`material-symbols-outlined footer-icon ${active === 'person' ? 'active' : ''}`}
        onClick={() => {
          setActive('person');
          Cookies.set('activeTab', 'person');
          }}
      >
        person
      </span>
      </Link>}
    </div>
  );
});

export default React.memo(Footer);

