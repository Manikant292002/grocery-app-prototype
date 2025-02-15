import React from 'react';
import { buttonHover } from '../../utils/animations';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

export function Button({ 
  children, 
  variant = 'primary', 
  fullWidth,
  className = '',
  ...props 
}: ButtonProps) {
  const baseStyles = "py-2 px-4 rounded-lg font-semibold transition-all duration-300";
  const variantStyles = {
    primary: "bg-green-600 hover:bg-green-700 text-white",
    secondary: "bg-white text-gray-600 hover:bg-gray-50 border border-gray-300"
  };
  
  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${fullWidth ? 'w-full' : ''} ${buttonHover} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}