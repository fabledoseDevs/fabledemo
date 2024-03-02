import { css, styled } from 'styled-components';

const flexboxCentered = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
`;

export const TagboxModal = styled.div`
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

export const Container = styled.div`
  width: auto;
  max-width: 90dvw;
  height: auto;
  max-height: 80dvh;
  padding: 24px;
  overflow: clip;
  border-radius: 10px;
  background: antiquewhite;
  ${flexboxCentered};

  @media ${({ theme }) => theme.media.tablet} {
    max-width: 70dvw;
  }
`;

export const Headline = styled.div`
  text-align: center;
  margin-bottom: 24px;
`;

export const InfoLine = styled.sup`
  font-size: 12px;
  text-transform: uppercase;
  text-align: center;
`;

export const TagSorter = styled.div`
  ${flexboxCentered};
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 48px;

  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: row;
  }
`;

export const TagColumn = styled.div`
  width: 48%;
`;

export const Synopsis = styled.p`
  margin: 12px auto;
  font-size: 15px;
  line-height: 1.5;
  text-align: center;
`;
