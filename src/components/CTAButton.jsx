// src/components/CTAButton.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function CTAButton({ label, to, style }) {
  return (
    <Link to={to} style={{ ...defaultStyle, ...style }}>
      {label}
    </Link>
  );
}

const defaultStyle = {
  display: 'inline-block',
  backgroundColor: '#4CAF50', // example green color, adjust as needed
  color: '#fff',
  padding: '15px 30px',
  borderRadius: '4px',
  textDecoration: 'none',
  fontWeight: 'bold',
  transition: 'background-color 0.3s',
};

export default CTAButton;
