import React from 'react';
import { NavLink } from 'react-router-dom';

const getLinkClass = ({ isActive }: { isActive: boolean }) =>
  `navbar-item ${isActive ? 'has-background-grey-lighter' : ''}`;

export const NavBar: React.FC = () => (
  <nav
    className="navbar is-light is-fixed-top is-mobile has-shadow"
    data-cy="Nav"
  >
    <div className="container">
      <div className="navbar-brand">
        <NavLink to="/" className={getLinkClass} end>
          Home
        </NavLink>

        <NavLink to="/people" className={getLinkClass}>
          People
        </NavLink>
      </div>
    </div>
  </nav>
);
