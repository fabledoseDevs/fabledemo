import { FaSquareYoutube } from 'react-icons/fa6';
import { FaSquareFacebook } from 'react-icons/fa6';
import { FaSquareInstagram } from 'react-icons/fa6';
import { FaSquareXTwitter } from 'react-icons/fa6';
import styled from 'styled-components';

export const SocialIconsBody = styled.div`
  display: flex;
  justify-items: center;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-size: 18px;
`;

export const TwitterIcon = styled(FaSquareXTwitter)`
  width: 25px;
  height: 25px;
`;
export const FacebookIcon = styled(FaSquareFacebook)`
  width: 25px;
  height: 25px;
`;

export const InstagramIcon = styled(FaSquareInstagram)`
  width: 25px;
  height: 25px;
`;

export const YoutubeIcon = styled(FaSquareYoutube)`
  width: 25px;
  height: 25px;
`;

export const List = styled.ul`
  display: flex;
  gap: 15px;
  list-style: none;

  li {
    a {
      transition: color 0.2s ease-in;
      height: 32px;
      padding-top: 10px;
      display: inline-block;

      &:hover {
        color: ${({ theme }) => theme.palette.accent};
      }
    }
  }
`;
