import Image from 'next/image';
import styled, { css } from 'styled-components';

export const StoryCoverBody = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndex.veryTop};
  width: 100dvw;
  height: 100dvh;
  background-color: #184e18;
  box-sizing: border-box;
  overflow: clip;
`;

export const SummaryLayer = styled.div<{ layout: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: ${({ layout }) => (layout ? 'flex-end' : 'flex-start')};
  width: 100dvw;
  height: auto;
  padding: 5dvw;
  z-index: ${({ theme }) => theme.zIndex.medium};

  @media (orientation: portrait) {
    height: 100dvh;
    align-items: flex-end !important;
  }
`;

export const SummaryCard = styled.div<{ decor?: string }>`
  width: 50dvw;
  height: auto;
  max-height: 80dvh;
  overflow: clip;
  border-radius: 10px;
  background-color: antiquewhite;
  box-shadow: ${({ theme }) => theme.palette.wideShadow};

  @media ${({ theme }) => theme.media.tablet} {
    width: 45dvw;
  }

  @media ${({ theme }) => theme.media.desktop} {
    width: 40dvw;
  }

  @media (orientation: portrait) {
    width: 90dvw;
  }

  ${({ decor }) =>
    decor &&
    css`
      background-image: url(${decor});
      background-position: bottom center;
      background-size: contain;
      background-repeat: repeat-x;
    `}
`;

export const Logo = styled(Image)`
  display: block;
  margin: 5px auto;
  width: 120px;
  height: auto;

  @media ${({ theme }) => theme.media.tablet} {
    margin: 10px auto;
    width: 160px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    margin: 20px auto;
    width: 200px;
  }
`;

export const MainContent = styled.div`
  padding: 10px 10px;
  height: auto;
  max-height: 70dvh;
  overflow-x: clip;
  overflow-y: scroll;

  @media ${({ theme }) => theme.media.tablet} {
    padding: 10px 20px;
  }

  @media ${({ theme }) => theme.media.laptop} {
    padding: 20px 40px;
    overflow-y: hidden;
  }
`;

export const Author = styled.p`
  text-transform: uppercase;
  font-size: 14px;

  @media ${({ theme }) => theme.media.tablet} {
    font-size: 18px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    font-size: 22px;
  }
`;

export const Title = styled.h1`
  font-size: 24px;

  @media ${({ theme }) => theme.media.tablet} {
    font-size: 30px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    font-size: 44px;
  }
`;

export const Credits = styled.div`
  font-size: 8px;
  margin: 5px 0;

  @media ${({ theme }) => theme.media.tablet} {
    font-size: 10px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    font-size: 12px;
  }
`;

export const BookExcerpt = styled.p`
  font-size: 12px;
  line-height: 1.5;
  margin: 5px 0;

  @media ${({ theme }) => theme.media.tablet} {
    font-size: 14px;
    line-height: 1.75;
    margin: 10px 0;
  }

  @media ${({ theme }) => theme.media.desktop} {
    font-size: 16px;
    line-height: 2;
    margin: 20px 0;
  }
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  margin: 60px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  align-items: center;
  align-self: flex-end;
`;

export const SettingsButton = styled.button`
  background: none;
  border: none;
  padding: 10px 0 0 0;
  cursor: pointer;
`;
