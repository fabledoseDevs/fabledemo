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
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-content: center;

  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: row;
  }
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
  padding: 12px 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  gap: 12px;

  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: column;
    padding: 0 48px;
  }

  @media ${({ theme }) => theme.media.laptop} {
    padding: 0 72px;
  }
`;

export const CookieBannerButton = styled.button<{ variant: string }>`
  width: 80px;
  height: 30px;
  border: none;
  border-radius: 15px;
  cursor: pointer;

  background-color: ${({ variant }) =>
    variant === 'green' ? '#6C7716' : '#ffffff'};
  color: ${({ variant }) => (variant === 'green' ? '#ffffff' : '#000000')};
`;
