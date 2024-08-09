import React from 'react';
import { StyledFollow, SocialSVG, Link } from './FollowUs.styled';
// import FollowSymbol;
import PropTypes from 'prop-types';

export const FollowUs = ({title = true}) => {
  return (
    <StyledFollow>
      {title && <h3>Follow us</h3>}
      <ul>
        <li>
          <Link to="https://www.facebook.com/" target="_blank">
            <SocialSVG width="26" height="26" fill="#8BAA36">
              <use href={`${'url'}#icon-facebook`} />
            </SocialSVG>
          </Link>
        </li>
        <li>
          <Link to="https://www.youtube.com/" target="_blank">
            <SocialSVG width="28" height="22" fill="#8BAA36">
              <use href={`${'url'}#icon-youtube`} />
            </SocialSVG>
          </Link>
        </li>
        <li>
          <Link to="https://www.twitter.com/" target="_blank">
            <SocialSVG width="25" height="22" fill="#8BAA36">
              <use href={`${'url'}#icon-twitter`} />
            </SocialSVG>
          </Link>
        </li>
        <li>
          <Link to="https://www.instagram.com" target="_blank">
            <SocialSVG width="24" height="24" fill="#8BAA36">
              <use href={`${'url'}#icon-instagram`} />
            </SocialSVG>
          </Link>
        </li>
      </ul>
    </StyledFollow>
  );
};

FollowUs.propTypes = {
  title: PropTypes.bool,
};