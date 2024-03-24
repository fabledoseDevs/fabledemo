import { styled } from 'styled-components';

export const ExitboxModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndex.high};
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
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
  background: none;
  opacity: 0;
`;

export const ExitboxContainer = styled.div`
  width: auto;
  height: auto;
  position: relative;
  padding: 24px;
  box-shadow: ${({ theme }) => theme.palette.wideShadow};
  border-radius: 15px;
  background: ${({ theme }) => theme.palette.background};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: center;
  justify-content: space-evenly;
  z-index: ${({ theme }) => theme.zIndex.standard};

  h3 {
    width: 100%;
    text-align: center;
    margin-bottom: 24px;
  }

  div {
    display: flex;
    flex-direction: row;
    gap: 24px;
  }
`;
