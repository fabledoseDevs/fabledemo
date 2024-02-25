import { styled } from 'styled-components';

export const ToolboxModal = styled.div`
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

export const ToolboxContainer = styled.div`
  width: 50dvw;
  height: 50dvh;
  background: antiquewhite;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: center;
  justify-content: space-evenly;

  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: row;
  }
`;

export const SettingWrapper = styled.div`
  width: 32%;
  height: auto;
  display: flex;
  flex-direction: column;
`;
