import { styled } from 'styled-components';

export const BannerBody = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 9999;
  width: 100dvw;
  height: auto;
  padding: 10px;
  background-color: ${({ theme }) => theme.palette.accentActive};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
`;

export const TextField = styled.div`
  width: 85%;
  max-width: 1120px;
  text-align: center;
  color: ${({ theme }) => theme.palette.secondary};

  h3 {
    margin: 6px;
    font-size: 18px;
  }

  p {
    margin: 6px;
    font-size: 14px;
  }
`;
