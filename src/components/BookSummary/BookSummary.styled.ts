import Image from 'next/image';
import styled, { css } from 'styled-components';

export const BookCoverBody = styled.section`
  width: 100dvw;
  height: 100dvh;
  background-color: #184e18;
  box-sizing: border-box;
  overflow: clip;
`;

export const SummaryLayer = styled.div<{ layout: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: ${({ layout }) => (layout ? 'flex-end' : 'flex-start')};
  width: 100dvw;
  height: auto;
  padding: 5dvw;
  z-index: 2;
  overflow: clip;
`;

export const SummaryCard = styled.div<{ decor?: string }>`
  width: 40dvw;
  height: auto;
  border-radius: 10px;
  background-color: antiquewhite;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;

  ${({ decor }) =>
    decor &&
    css`
      background-image: url(${decor});
      background-position: bottom center;
      background-size: contain;
      background-repeat: repeat-x;
    `}
`;

export const Logo = styled(Image)`
  display: block;
  margin: 20px auto;
`;

export const MainContent = styled.div`
  padding: 40px 80px;
`;

export const Author = styled.p`
  text-transform: uppercase;
  font-size: 22px;
`;

export const Title = styled.h2`
  font-size: 46px;
`;

export const Credits = styled.p`
  font-size: 12px;
  margin: 5px 0;
`;

export const BookExcerpt = styled.p`
  font-size: 18px;
  line-height: 2;
  margin: 20px 0;
`;

export const ButtonsContaineer = styled.div`
  width: 100%;
  margin: 60px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  align-items: center;
  align-self: flex-end;
`;

export const SettingsButton = styled.button`
  background: none;
  border: none;
  padding: 10px 0 0 0;
  cursor: pointer;
`;
