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

export const ToolboxContainer = styled.div`
  width: 50dvw;
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
`;

export const Settings = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: center;
  justify-content: space-evenly;
  margin-bottom: 24px;

  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: row;
  }
`;

export const SettingWrapper = styled.div`
  width: 32%;
  height: auto;
  display: flex;
  padding: 0 12px;
  flex-direction: column;
`;

export const SettingName = styled.h4`
  width: 100%;
  font-size: 20px;
  font-weight: normal;
  text-align: center;
  margin-bottom: 24px;
`;

export const SettingElementWrapper = styled.label`
  position: relative;

  input {
    position: absolute;
    opacity: 0;
    color: ${({ theme }) => theme.palette.accent};

    &:checked ~ div {
      background-color: ${({ theme }) => theme.palette.accentActive};
    }
  }
`;

export const SettingButton = styled.div`
  border: none;
  padding: 0 40px;
  border-radius: 28px;
  height: 30px;
  margin-bottom: 6px;
  text-align: center;
  cursor: pointer;

  color: ${({ theme }) => theme.palette.secondary};
  background-color: ${({ theme }) => theme.palette.green};

  @media ${({ theme }) => theme.media.tablet} {
    font-size: 14px;
    line-height: 30px;
    padding: 0 40px;
  }
`;

export const Preview = styled.div`
  width: 100%;
  height: auto;
  min-height: 380px;
  padding: 24px;
  box-shadow: ${({ theme }) => theme.palette.innerShadow};
  background-image: url('/images/fairytale-thumb-placeholder-01.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
`;
