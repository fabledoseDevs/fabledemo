import styled, { css, keyframes } from 'styled-components';

import mockImage from '@/img/tutorial-mock.jpg';

const pulsingFrame = keyframes`
    0% {
        border-color: #CC2C28
    }
    25% {
        border-color: #DC4E49
    }
    50% {
        border-color: rgba(220, 78, 73, 0)
    }
    75% {
        border-color: #DC4E49
    }
    100% {
        border-color: #CC2C28
    }
`;

const flexboxCentered = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
`;

const activeFrameCommon = css`
  position: absolute;
  bottom: 1dvh;
  width: auto;
  padding: 4px;
  border-radius: 10px;
  animation: ${pulsingFrame} 3s infinite linear;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 6px;
`;

const svgIconsCommon = css`
  width: 40px;
  height: 40px;
  color: ${({ theme }) => theme.palette.secondary};
  opacity: 0.65;
`;

export const TutorialBody = styled.div`
  position: fixed;
  z-index: ${({ theme }) => theme.zIndex.guard};
  top: 0vh;
  left: 0vw;
  background: ${({ theme }) => theme.palette.modalBackground};
  width: 100vw;
  height: 100vh;
  ${flexboxCentered};
`;

export const GreeterWrapper = styled.div`
  padding: 24px;
  background: ${({ theme }) => theme.palette.background};
  border-radius: 15px;
`;

export const GreeterBody = styled.div`
  ${flexboxCentered};
  gap: 24px;
  text-align: center;
`;

export const ButtonsPositioner = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  align-items: center;
  align-content: center;
  justify-content: center;
`;

export const MainTutorial = styled.div`
  background-color: ${({ theme }) => theme.palette.background};
  position: relative;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  padding-top: 4dvh;
  gap: 2vw;
`;

export const BackgroundPicture = styled.div<{ isActive: boolean }>`
  position: relative;
  width: 94vw;
  height: 78vh;
  background-image: url(${mockImage.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow: ${({ theme }) => theme.palette.innerShadow};
  border-width: ${({ isActive }) => (isActive ? `6px` : 'none')};
  border-style: ${({ isActive }) => (isActive ? `solid` : 'none')};
  border-radius: 10px;
  animation: ${pulsingFrame} 3s infinite linear;
`;

export const TextBoxActiveFrame = styled.div<{ isActive: boolean }>`
  position: absolute;
  top: 2dvh;
  left: 2dvw;
  width: 50%;
  padding: 4px;
  border-width: ${({ isActive }) => (isActive ? `6px` : 'none')};
  border-style: ${({ isActive }) => (isActive ? `solid` : 'none')};
  border-radius: 10px;
  animation: ${pulsingFrame} 3s infinite linear;
`;

export const TextBox = styled.div<{ extraBackground: boolean }>`
  width: 100%;
  border-radius: 15px;
  padding: 8px 16px;
  font-size: ${({ extraBackground }) => (extraBackground ? '1.6vw' : '1.2vw')};
  line-height: 1.5;
  color: ${({ extraBackground, theme }) =>
    extraBackground ? theme.palette.secondary : theme.palette.primary};
  background-color: ${({ extraBackground, theme }) =>
    extraBackground
      ? theme.palette.storyPage.textboxStandard
      : theme.palette.storyPage.textboxNone};
`;

export const OptionsActiveFrame = styled.div<{ isActive: boolean }>`
  ${activeFrameCommon};
  left: 1dvw;
  border-width: ${({ isActive }) => (isActive ? `6px` : 'none')};
  border-style: ${({ isActive }) => (isActive ? `solid` : 'none')};

  svg {
    ${svgIconsCommon}
  }
`;

export const SlideSwitchActiveFrame = styled.div<{ isActive: boolean }>`
  ${activeFrameCommon};
  right: 1dvw;
  border-width: ${({ isActive }) => (isActive ? `6px` : 'none')};
  border-style: ${({ isActive }) => (isActive ? `solid` : 'none')};

  svg {
    ${svgIconsCommon}
  }

  p {
    font-size: 26px;
    letter-spacing: 2px;
    padding: 4px;
    color: ${({ theme }) => theme.palette.secondary};
    opacity: 0.65;
  }
`;

export const ExitButton = styled.button`
  position: fixed;
  top: 0vh;
  right: 0dvw;
  z-index: ${({ theme }) => theme.zIndex.veryTop};
  width: auto;
  height: 30px;
  bottom: 10px;
  padding: 2px 4px;
  border: 0;
  color: ${({ theme }) => theme.palette.primary};
  background-color: ${({ theme }) => theme.palette.secondary};
  cursor: pointer;

  svg {
    width: 30px;
    height: 30px;
    color: ${({ theme }) => theme.palette.accentActive};
  }
`;

export const TipsWindow = styled.div`
  width: 94vw;
  height: 20vh;
  overflow-y: auto;
  text-align: center;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 24px;
  margin-bottom: 2dvw;

  div,
  p {
    font-size: 1.6vw;
    width: calc(90% - 148px);

    @media ${({ theme }) => theme.media.tablet} {
      font-size: 1.4vw;
    }

    @media ${({ theme }) => theme.media.laptop} {
      font-size: 1.2vw;
    }

    svg {
      display: inline;
      width: 12px;
      margin-top: -4px;

      @media ${({ theme }) => theme.media.tablet} {
        width: 20px;
      }

      @media ${({ theme }) => theme.media.laptop} {
        width: 28px;
      }
    }
  }
`;

export const TipsSwitch = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 25px;
  color: ${({ theme }) => theme.palette.secondary};
  background: ${({ theme }) => theme.palette.green};
  cursor: pointer;

  &:hover,
  &:active {
    background: ${({ theme }) => theme.palette.lightergreen};
  }

  &:disabled {
    visibility: hidden;
  }

  @media ${({ theme }) => theme.media.tablet} {
    width: 40px;
    height: 40px;
    border-radius: 25px;
  }

  @media ${({ theme }) => theme.media.laptop} {
    width: 50px;
    height: 50px;
    border-radius: 25px;
  }
`;
