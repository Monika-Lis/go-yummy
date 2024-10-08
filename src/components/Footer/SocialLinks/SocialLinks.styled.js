import styled from '@emotion/styled';
import { theme } from '../theme';
import { BsFacebook,
        BsTwitter,
        BsYoutube,
        BsInstagram } from 'react-icons/bs';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 119px;
    margin-bottom: 18px;
    padding: 0;
    @media screen and (min-width: ${theme.breakpoints[1]}) {
        width: 134px;
        margin-bottom: 24px
 };

 @media screen and (min-width: ${theme.breakpoints[2]}) {
    width: 134px;
    margin-top: 41px;
    margin-bottom: 50px;
 }
 `;

 export const Link = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
`;
export const Facebook = styled(BsFacebook)`
  height: 20px;
  width: 20px;
  color: ${({ theme }) => theme.colors.green[200]};
   &:hover,
   &:focus {
    color: ${({ theme }) => theme.colors.white[100]};
  }
`;

export const Twitter= styled(BsTwitter)`
  height: 20px;
  width: 20px;
  color: ${({ theme }) => theme.colors.green[200]};
   &:hover,
   &:focus {
    color: ${({ theme }) => theme.colors.white[100]};
  }
`;

export const Youtube= styled(BsYoutube)`
  height: 20px;
  width: 20px;
  color: ${({ theme }) => theme.colors.green[200]};
   &:hover,
   &:focus {
    color: ${({ theme }) => theme.colors.white[100]};
  }
`;

export const Instagram= styled(BsInstagram)`
  height: 20px;
  width: 20px;
  color: ${({ theme }) => theme.colors.green[200]};
   &:hover,
   &:focus {
    color: ${({ theme }) => theme.colors.white[100]};
  }
`;