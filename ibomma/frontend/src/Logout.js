import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import React,{ useContext } from 'react';
import Context from './Context';



const Logout = () => {
  const navigate = useNavigate();
  const {setActive}=useContext(Context)
  const handleLogout = () => {
    Cookies.remove('token'); 
    navigate('/');
    setActive('home')
           
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.message}>It's hard to see you go 😢</h2>
      <button style={styles.linkButton} onClick={handleLogout}>
        Click here to Logout
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4f4f4',
  },
  message: {
    color: '#333',
    marginBottom: '20px',
    fontSize: '24px',
  },
  linkButton: {
    background: 'none',
    border: 'none',
    color: '#007bff',
    fontSize: '18px',
    cursor: 'pointer',
    textDecoration: 'underline',
  },
};

export default React.memo(Logout);
