import styled, { css } from 'styled-components';

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
  left: 0dvw;
  background: ${({ theme }) => theme.palette.modalBackground};
  width: 100dvw;
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

export const BackgroundPicture = styled.div<{ isActive: boolean }>``;

export const TextBox = styled.div<{ isActive: boolean }>``;

export const OptionIcons = styled.div<{ isActive: boolean }>``;

export const SlideSwitch = styled.div<{ isActive: boolean }>``;

export const TipsWindow = styled.div``;

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

export const QuitTutorial = styled.div`
  position: fixed;
  top: 0vh;
  right: 0dvw;
`;
