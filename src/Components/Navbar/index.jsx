import React from 'react';
import './style.css';

const Navbar = () => {
  const takeToHome = () => {
    window.location.href = '/';
  };
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <h1 onClick={takeToHome}>EVENTIFY</h1>
      </div>
    </header>
  );
};
export default Navbar;
