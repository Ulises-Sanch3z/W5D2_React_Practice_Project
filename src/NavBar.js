import React from 'react';

function NavBar({ onNavigate }) {
  return (
    <nav>
      <button onClick={() => onNavigate('home')}>Home</button>
    </nav>
  );
}

export default NavBar;
