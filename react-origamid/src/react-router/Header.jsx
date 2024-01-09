import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.log('Mudou a rota');
  }, [location]);

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
