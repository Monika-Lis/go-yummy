import React from 'react';
import { useMediaQuery } from '@mui/material';
import { useLocation, Link } from 'react-router-dom';
import { ReactComponent as SvgLogo } from '../../../assets/SVG/Logo/logo.svg';
import { ReactComponent as SvgLogoInv } from '../../../assets/SVG/Logo/logoInv.svg';
import css from './HeaderLogo.module.css';

const HeaderLogo = ({ inv }) => {
  console.log('Rendering HeaderLogo');

  const location = useLocation();
  const isMobile = useMediaQuery('(max-width: 767px)');
  const path = location.pathname;

  console.log('isMobile:', isMobile);
  console.log('path:', path);

  const isInv = path === '/main' && isMobile;

  return (
    <Link to="/main" className={css.logoLink}>
      {isInv ? (
        <SvgLogoInv className={css.logo} />
      ) : (
        <SvgLogo className={css.logo} />
      )}
    </Link>
  );
};

export default HeaderLogo;
