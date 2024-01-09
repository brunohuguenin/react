import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink> | <NavLink to="sobre">Sobre</NavLink> |{' '}
        <NavLink to="login">Login</NavLink>
      </nav>
    </div>
  );
};

export default Header;
