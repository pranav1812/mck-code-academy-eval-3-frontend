import React from 'react';
import './style.css';

const Navbar = () => {
  const takeToHome = () => {
    window.location.href = '/';
  };
  return (
    <header className="navbar">
      <h1 onClick={takeToHome}>EVENTIFY</h1>
    </header>
  );
};
export default Navbar;
