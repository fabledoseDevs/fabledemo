import { css, styled } from 'styled-components';

const flexboxCentered = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
`;

export const ModalWindowBody = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndex.high};
  ${flexboxCentered};
  width: 100dvw;
  height: 100dvh;
  overflow: hidden;
  background: ${({ theme }) => theme.palette.storyPage.textbox60};
`;

export const ExitLayer = styled.button`
  position: fixed;
  top: 0;
  left: 0;
  width: 100dvw;
  height: 100dvh;
  overflow: hidden;
  border: none;
  background: ${({ theme }) => theme.palette.modalBackground};
`;

export const ExitButton = styled.button`
  position: absolute;
  top: -45px;
  right: 0;
  z-index: ${({ theme }) => theme.zIndex.veryTop};
  width: auto;
  height: 50px;
  bottom: 10px;
  background: none;
  border: 0;
  color: ${({ theme }) => theme.palette.secondary};
  cursor: pointer;

  svg {
    width: 30px;
    height: 30px;
    color: ${({ theme }) => theme.palette.secondary};
  }
`;

export const ModalContentContainer = styled.div`
  position: relative;
  width: auto;
  max-width: 90dvw;
  height: auto;
  max-height: 80dvh;
  padding: 24px;
  border-radius: 10px;
  background: ${({ theme }) => theme.palette.background};
  ${flexboxCentered};

  @media ${({ theme }) => theme.media.tablet} {
    max-width: 70dvw;
  }
`;
