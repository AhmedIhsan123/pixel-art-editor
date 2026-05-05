// our header with our home pixeal art aexielArt+ teirList Trading Card navagations bar

import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'; 
function Header() {
  return (
    <header className="header">
      <Link to="/">Home</Link>
      <Link to="/pixel-art">Pixel Art</Link>
      <Link to="/pixel-art+">Pixel Art+</Link>
      <Link to="/tier-list">Tier List</Link>
      <Link to="/trading-card">Trading Card</Link>

    </header>
    
    
  );
}