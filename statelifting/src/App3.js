import { useState } from 'react';
import LoginForm from './LoginForm';

function App3() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true); // State is updated in the parent
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Lift State Up Demo</h1>
      {isLoggedIn ? (
        <h2>Welcome! You are logged in.</h2>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App3;
