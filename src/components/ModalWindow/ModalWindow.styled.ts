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
  z-index: ${({ theme }) => theme.zIndex.veryTop};
  ${flexboxCentered};
  width: 100dvw;
  background: ${({ theme }) => theme.palette.storyPage.textboxStandard};

  @media ${({ theme }) => theme.media.laptop} {
    height: 100dvh;
    overflow: hidden;
  }
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
  position: fixed;
  top: 0;
  right: 0;
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

  @media ${({ theme }) => theme.media.laptop} {
    position: absolute;
    top: -40px;
    right: 0;
    height: 50px;
    color: ${({ theme }) => theme.palette.secondary};
    background: none;
  }
`;

export const ModalContentContainer = styled.div`
  position: relative;
  width: 100dvw;
  height: 100dvh;
  overflow-y: scroll;
  padding: 24px;
  background: ${({ theme }) => theme.palette.background};

  @media ${({ theme }) => theme.media.laptop} {
    max-width: 70dvw;
    height: auto;
    max-height: 90dvh;
    border-radius: 10px;
    overflow: unset;
  }
`;
