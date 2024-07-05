import { styled } from 'styled-components';

export const BannerBody = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 99;
  width: 100dvw;
  height: auto;
  padding: 10px;
  background-color: ${({ theme }) => theme.palette.accentActive};
`;

export const ContentContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
`;

export const TextField = styled.div`
  width: 90%;
  max-width: 1120px;
  text-align: left;
  color: ${({ theme }) => theme.palette.secondary};

  h5 {
    margin: 6px;
    font-size: 16px;
  }

  p {
    margin: 6px;
    font-size: 14px;
  }
`;

export const ButtonPositioner = styled.div`
  padding: 0 24px;

  @media ${({ theme }) => theme.media.tablet} {
    padding: 0 48px;
  }

  @media ${({ theme }) => theme.media.laptop} {
    padding: 0 72px;
  }
`;
