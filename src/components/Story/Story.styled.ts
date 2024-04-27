import ReactPlayer from 'react-player/lazy';
import { css, keyframes, styled } from 'styled-components';

export const Slider = styled.div<{ defaultColor: string }>`
  width: 100dvw;
  height: 100dvh;
  position: fixed;
  top: 0;
  left: 0;
  line-height: 100dvh;
  background-color: ${({ defaultColor }) => defaultColor};
`;

export const NextPicture = styled(ReactPlayer)`
  position: fixed;
  top: 0;
  left: 0;
  object-fit: cover;
  z-index: ${({ theme }) => theme.zIndex.standard};

  video {
    position: fixed;
    top: 0;
    left: 0;

    object-fit: cover;
  }
`;

export const SliderNavigation = styled.div`
  position: absolute;
  bottom: 5px;
  right: 5px;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
`;

export const SliderButton = styled.button`
  color: ${({ theme }) => theme.palette.background};
  background-color: black;
  border: 0;
  cursor: pointer;
  opacity: 0.25;
  transition: all 300ms;
  width: 40px;
  border-radius: 20px;

  &:hover {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.15);
  }
`;

export const Pagination = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 6px;
  justify-content: center;
  align-content: center;
  padding: 0 6px;

  button {
    width: 15px;
    height: 15px;
    border: 0;
    border-radius: 8px;
    background-color: black;
    cursor: pointer;
    opacity: 0.25;

    &:hover {
      background-color: white;
      opacity: 0.5;
    }
  }

  button.active {
    background-color: white;
    opacity: 1 !important;
  }
`;

const iconsCommon = css`
  position: fixed;
  z-index: ${({ theme }) => theme.zIndex.veryTop};
  width: 25px;
  height: 25px;
  background: none;
  border: 0;
  opacity: 0.25;
  transition: opacity 0.5s;

  @media ${({ theme }) => theme.media.laptop} {
    width: 50px;
    height: 50px;
  }

  &:hover {
    cursor: pointer;
    opacity: 1;
  }

  svg {
    color: #fff;
  }
`;

export const ReturnToMainPage = styled.button`
  ${iconsCommon};
  bottom: 5px;
  left: 10px;

  @media ${({ theme }) => theme.media.laptop} {
    bottom: 10px;
    left: 10px;
  }
`;

export const SettingsButton = styled.button`
  ${iconsCommon};
  bottom: 5px;
  left: 40px;

  @media ${({ theme }) => theme.media.laptop} {
    bottom: 10px;
    left: 65px;
  }
`;

export const FullscreenButton = styled.button`
  ${iconsCommon};
  bottom: 5px;
  left: 70px;

  @media ${({ theme }) => theme.media.laptop} {
    bottom: 10px;
    left: 125px;
  }
`;
