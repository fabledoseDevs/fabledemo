import { css, styled } from 'styled-components';

export const Stage = styled.div<{ defaultColor: string }>`
  width: 100dvw;
  height: 100dvh;
  position: fixed;
  top: 0;
  left: 0;
  line-height: 100dvh;
  background-color: ${({ defaultColor }) => defaultColor};
`;

export const Navigation = styled.div`
  position: absolute;
  bottom: 15px;
  right: 15px;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
`;

export const NavigationButton = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  opacity: 0.25;
  transition: all 300ms;
  width: 50px;
  border-radius: 20px;

  svg {
    color: ${({ theme }) => theme.palette.secondary};
  }

  &:hover {
    opacity: 1;
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

  input {
    width: 60px;
    height: 40px;
    font-size: 24px;
    text-align: center;
  }

  span {
    width: 60px;
    font-size: 24px;
    text-align: center;
    color: ${({ theme }) => theme.palette.secondary};
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
    color: ${({ theme }) => theme.palette.secondary};
  }
`;

export const ReturnToMainPage = styled.button`
  ${iconsCommon};
  bottom: 15px;
  left: 20px;

  @media ${({ theme }) => theme.media.laptop} {
    bottom: 10px;
    left: 10px;
  }
`;

export const SettingsButton = styled.button`
  ${iconsCommon};
  bottom: 15px;
  left: 50px;

  @media ${({ theme }) => theme.media.laptop} {
    bottom: 10px;
    left: 65px;
  }
`;

export const FullscreenButton = styled.button`
  ${iconsCommon};
  bottom: 15px;
  left: 80px;

  @media ${({ theme }) => theme.media.laptop} {
    bottom: 10px;
    left: 125px;
  }
`;
