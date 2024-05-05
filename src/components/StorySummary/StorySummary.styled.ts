import Image from 'next/image';
import ReactPlayer from 'react-player/lazy';
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

export const SummaryLayer = styled.div<{ $layout: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: ${({ $layout }) => ($layout ? 'flex-end' : 'flex-start')};
  width: 100dvw;
  height: auto;
  padding: 0;
  z-index: ${({ theme }) => theme.zIndex.medium};

  @media ${({ theme }) => theme.media.laptop} {
    padding: 5dvw;
  }
`;

export const SummaryCard = styled.div<{ $decor?: string }>`
  width: 55vw;
  height: auto;
  overflow: clip;
  background-color: antiquewhite;
  box-shadow: ${({ theme }) => theme.palette.wideShadow};

  @media ${({ theme }) => theme.media.laptop} {
    width: 45vw;
    max-height: 80vh;
    border-radius: 10px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    width: 40dvw;
  }

  ${({ $decor }) =>
    $decor &&
    css`
      background-image: url(${$decor});
      background-position: bottom center;
      background-size: contain;
      background-repeat: repeat-x;
    `}
`;

export const Logo = styled(Image)`
  display: block;
  margin: 15px auto;
  width: 120px;
  height: auto;

  @media ${({ theme }) => theme.media.laptop} {
    margin: 10px auto;
    width: 160px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    margin: 20px auto;
    width: 200px;
  }
`;

export const MainContent = styled.div`
  padding: 20px;
  height: calc(100dvh - 28px);
  overflow-x: clip;
  overflow-y: scroll;

  @media ${({ theme }) => theme.media.laptop} {
    padding: 10px 20px;
    height: auto;
    max-height: 70dvh;
  }

  @media ${({ theme }) => theme.media.desktop} {
    padding: 20px 40px;
    overflow-y: hidden;
  }
`;

export const AnimatedPicture = styled(ReactPlayer)`
  position: fixed;
  top: 0;
  left: 0;
  object-fit: cover;
  z-index: ${({ theme }) => theme.zIndex.standard};

  video {
    object-fit: cover;
  }
`;

export const Title = styled.h1`
  font-size: 24px;

  @media ${({ theme }) => theme.media.laptop} {
    font-size: 30px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    font-size: 44px;
  }
`;

export const Credits = styled.div`
  font-size: 12px;
  margin: 5px 0;

  p {
    margin: 5px 0;
  }

  @media ${({ theme }) => theme.media.laptop} {
    font-size: 13px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    font-size: 14px;
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
