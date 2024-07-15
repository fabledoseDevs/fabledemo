import { css, styled } from 'styled-components';

const basicColumnStyle = css`
  width: 100%;
  padding: 24px;

  @media ${({ theme }) => theme.media.laptop} {
    width: 50%;
  }

  p {
    line-height: 2;
    padding: 12px 0;
  }
`;

export const SummaryBody = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;

  @media ${({ theme }) => theme.media.laptop} {
    flex-direction: row;
      text-align: left;
  },
`;

export const LeftColumn = styled.div`
  ${basicColumnStyle};
`;

export const RightColumn = styled.div`
  ${basicColumnStyle};
`;
