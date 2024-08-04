import clsx from 'clsx';
import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './MainNavLink.module.css';

const MainNavLink = ({ to, title, closeMenu = () => {} }) => {
  return (
    <NavLink
      to={to}
      onClick={() => closeMenu()}
      className={({ isActive }) =>
        clsx(css.navLink, { [css.activeLink]: isActive })
      }
    >
      {title}
    </NavLink>
  );
};

export default MainNavLink;
