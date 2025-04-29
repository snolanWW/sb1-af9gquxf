import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <Link to="/" className={`flex items-center ${className}`}>
      <img 
        src="https://www.grundy.com/wp-content/uploads/Grundy_Final_Animated_logo_300x118.gif" 
        alt="Grundy Insurance"
        className="h-12 w-auto" // Increased from h-8 to h-12
      />
    </Link>
  );
}