import clsx from 'clsx';
import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './SearchNavLink.module.css';
import MagnifyinGlass from '../MagnifyinGlass/MagnifyinGlass';
import { useMediaQuery } from '@mui/material';

const SearchNavLink = ({ to, title, closeMenu = () => {} }) => {
  const isMobile = useMediaQuery('(max-width: 1439px)');
  return (
    <NavLink
      to={to}
      onClick={() => closeMenu()}
      className={({ isActive }) =>
        clsx(css.navLink, { [css.activeLink]: isActive })
      }
    >
      <div className={css.glassWrapper}>
        <MagnifyinGlass />
      </div>
      {isMobile && title}
    </NavLink>
  );
};

export default SearchNavLink;
