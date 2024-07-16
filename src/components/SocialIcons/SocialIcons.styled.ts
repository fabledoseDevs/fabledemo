import { SiFacebook } from 'react-icons/si';
import { SiInstagram } from 'react-icons/si';
import { SiSubstack } from 'react-icons/si';
import styled from 'styled-components';

export const SocialIconsBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: center;
  align-items: center;
  gap: 4px;
  font-size: 18px;

  p {
    line-height: 12px;
    font-size: 18px;
  }

  @media ${({ theme }) => theme.media.laptop} {
    flex-direction: row;
    gap: 12px;
  }
`;

export const FacebookIcon = styled(SiFacebook)`
  width: 25px;
  height: 25px;
`;

export const InstagramIcon = styled(SiInstagram)`
  width: 25px;
  height: 25px;
`;

export const SubstackIcon = styled(SiSubstack)`
  width: 25px;
  height: 25px;
`;

export const List = styled.ul`
  display: flex;
  gap: 15px;
  list-style: none;
  line-height: 12px;
  padding-bottom: 8px;

  li {
    a {
      transition: color 0.2s ease-in;
      height: 32px;
      padding-top: 10px;
      display: inline-block;
      color: ${({ theme }) => theme.palette.darkgray};

      &:hover {
        color: ${({ theme }) => theme.palette.accentActive};
      }
    }
  }
`;
