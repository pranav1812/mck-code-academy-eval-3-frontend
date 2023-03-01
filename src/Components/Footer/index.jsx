import React from 'react';
import './style.css';

const Navbar = () => {
  const possibleThemes = ['#000000', '#800080', '#0000FF', '#9B9999'];
  return (
    <footer className="footer">
      <span className="theme-span">Themes</span>
      {possibleThemes.map((theme, ind) => (
        <button
          className="theme-button"
          key={ind}
          style={{ backgroundColor: theme }}
          onClick={() => {}}
        />
      ))}
    </footer>
  );
};
export default Navbar;
