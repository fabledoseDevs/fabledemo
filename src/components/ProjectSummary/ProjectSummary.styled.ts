import { css, styled } from 'styled-components';

const basicColumnStyle = css`
  width: 100%;

  @media ${({ theme }) => theme.media.laptop} {
    width: 50%;
  }

  p {
    line-height: 2;
    padding: 12px 48px;
  }
`;

export const SummaryBody = styled.section`
  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.media.laptop} {
    flex-direction: row;
  },
`;

export const LeftColumn = styled.div`
  ${basicColumnStyle}
`;

export const RightColumn = styled.div`
  ${basicColumnStyle}
`;
