import React from 'react';
import './Button.css'; 

const Button = ({ children, onClick, type = 'button', variant , size , disabled = false,
className = ''}) => 
{
  return (
    <button type={type} className={`btn btn-${variant} btn-${size} ${className}`} onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;