import { FaPinterest } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { styled } from 'styled-components';

export const PinterestIcon = styled(FaPinterest)`
  width: 25px;
  height: 25px;
`;
export const TwitterIcon = styled(FaXTwitter)`
  width: 25px;
  height: 25px;
`;
export const FacebookIcon = styled(FaFacebook)`
  width: 25px;
  height: 25px;
`;

export const InstagramIcon = styled(FaInstagram)`
  width: 25px;
  height: 25px;
`;

export const YoutubeIcon = styled(FaYoutube)`
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

      &:hover {
        color: ${({ theme }) => theme.palette.accent};
      }
    }
  }
`;
