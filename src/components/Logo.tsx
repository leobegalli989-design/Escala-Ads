import React from 'react';

export const Logo = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={className}
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Top Bar - White Trapezoid */}
    <path 
      d="M20 32H62L58 42H20V32Z" 
      fill="white" 
    />
    {/* Middle Bar - Blue Arrow */}
    <path 
      d="M20 46H55V38L75 50L55 62V54H20V46Z" 
      fill="#14a3e5" 
    />
    {/* Bottom Bar - White Rectangle */}
    <path 
      d="M20 58H62V68H20V58Z" 
      fill="white" 
    />
  </svg>
);
