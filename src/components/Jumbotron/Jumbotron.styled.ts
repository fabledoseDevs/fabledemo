import styled, { keyframes } from 'styled-components';

const heartBeat = keyframes`
  10% {
    transform: scale(1);
    animation-timing-function: ease-in;
  }
  50% {
    transform: scale(1.1);
    animation-timing-function: ease-out;
  }
  100% {
      transform: scale(1);
      animation-timing-function: ease-in;
  }
`;

export const JumbotronWrapper = styled.section`
  position: relative;
  height: 100vh;
  background: rgb(255, 254, 244);
  background: linear-gradient(
    45deg,
    rgba(255, 254, 244, 1) 0%,
    rgba(253, 250, 227, 1) 100%
  );

  div {
    height: 100vh;
  }

  div.mountains-layer {
    background-position: center bottom -160px !important;
    inset: 0 !important;

    @media ${({ theme }) => theme.media.laptop} {
      inset: -100px 0 !important;
      background-position: center bottom -200px !important;
    }
  }

  div.headline-layer {
    inset: 20px !important;

    @media ${({ theme }) => theme.media.tablet} {
      inset: 20px !important;
    }

    @media ${({ theme }) => theme.media.laptop} {
      inset: 60px !important;
    }

    @media ${({ theme }) => theme.media.desktop} {
      inset: 150px !important;
    }
  }

  a svg {
    width: 40px;
    height: 40px;
    position: absolute;
    bottom: 20px;
    left: calc(50% - 20px);
    color: ${({ theme }) => theme.palette.accentActive};
    animation: ${heartBeat} 2.5s ease-in-out infinite both;

    @media ${({ theme }) => theme.media.laptop} {
      width: 60px;
      height: 60px;
      bottom: 40px;
      left: calc(50% - 30px);
    }
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  text-transform: uppercase;
  text-align: center;

  h1 {
    margin-top: 24px;
    font-size: 12px;
    letter-spacing: 16px;
    font-weight: 400;
    width: 100%;

    img {
      width: 150px;

      @media ${({ theme }) => theme.media.laptop} {
        width: 300px;
      }
    }
  }

  h2 {
    width: 100%;
    font-size: 26px;
    font-weight: 400;
    margin: 12px auto 24px;
  }

  @media only screen and (orientation: landscape) {
    margin: 24px auto 0;
  }

  @media only screen and (orientation: portrait) {
    margin: 32px auto 0;
  }

  @media ${({ theme }) => theme.media.tablet} {
    h2 {
      font-size: 28px;
    }
  }

  @media ${({ theme }) => theme.media.laptop} {
    margin: -60px auto 0;

    h2 {
      font-size: 36px;
      margin: 24px auto;
    }
  }

  @media ${({ theme }) => theme.media.desktop} {
    margin: -120px auto 0;

    h2 {
      font-size: 36px;
      margin: 24px auto;
    }
  }
`;

export const RedSpan = styled.span`
  position: relative;
  margin-right: 10px;

  img {
    width: 118%;
    height: 170%;
    position: absolute;
    top: -8px;
    left: -10px;
  }

  @media ${({ theme }) => theme.media.tablet} {
    img {
      top: -12px;
      left: -15px;
    }
  }
`;
