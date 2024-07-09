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
  gap: 24px;
`;

export const BackgroundPicture = styled.div<{ isActive: boolean }>`
  position: relative;
  width: 94vw;
  height: 80vh;
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
  position: absolute;
  bottom: 1dvh;
  left: 1dvw;
  width: auto;
  padding: 4px;
  border-width: ${({ isActive }) => (isActive ? `6px` : 'none')};
  border-style: ${({ isActive }) => (isActive ? `solid` : 'none')};
  border-radius: 10px;
  animation: ${pulsingFrame} 3s infinite linear;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 6px;

  svg {
    width: 40px;
    height: 40px;
    color: ${({ theme }) => theme.palette.secondary};
    opacity: 0.65;
  }
`;

export const SlideSwitchActiveFrame = styled.div<{ isActive: boolean }>`
  position: absolute;
  bottom: 1dvh;
  right: 1dvw;
  width: auto;
  padding: 4px;
  border-width: ${({ isActive }) => (isActive ? `6px` : 'none')};
  border-style: ${({ isActive }) => (isActive ? `solid` : 'none')};
  border-radius: 10px;
  animation: ${pulsingFrame} 3s infinite linear;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 6px;

  svg {
    width: 40px;
    height: 40px;
    color: ${({ theme }) => theme.palette.secondary};
    opacity: 0.65;
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
  height: auto;
  overflow-y: auto;
  text-align: center;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  align-content: center;
  justify-content: center;
  margin-top: 2dvh;
  gap: 24px;

  div,
  p {
    font-size: 1.2vw;
    width: calc(90% - 148px);

    svg {
      display: inline;
      width: 28px;
      margin-top: -4px;
    }
  }

  div {
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    flex-direction: column;
    gap: 24px;
  }
`;

export const TipsSwitch = styled.button`
  width: 50px;
  height: 50px;
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
`;
