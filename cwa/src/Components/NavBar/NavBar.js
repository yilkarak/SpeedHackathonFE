
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as routes from '../../routes/manifest';
import './Navbar.css';

function Navbar(props) {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a onClick={() => {navigate(routes.Dashboard)}} className="logo">{props.heading}</a>
      </div>
    </nav>
  );
}

export default Navbar;
