import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

const Navbar = ({ setThemeColor }) => {
  const possibleThemes = ['#000000', '#800080', '#0000FF', '#9B9999'];
  return (
    <footer className="footer">
      <span className="theme-span">Themes</span>
      {possibleThemes.map((theme, ind) => (
        <button
          className="theme-button"
          key={ind}
          style={{ backgroundColor: theme }}
          onClick={() => {
            setThemeColor(possibleThemes[ind]);
          }}
        />
      ))}
    </footer>
  );
};

Navbar.propTypes = {
  setThemeColor: PropTypes.func.isRequired,
};
export default Navbar;
