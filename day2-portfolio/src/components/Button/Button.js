import React from 'react';
import './Button.css'; // We'll create this CSS file next

const Button = ({ children, onClick, type = 'button', variant = 'primary', size = 'medium', disabled = false,
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