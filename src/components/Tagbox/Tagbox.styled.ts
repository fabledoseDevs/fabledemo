import { css, styled } from 'styled-components';

const flexboxCentered = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
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
