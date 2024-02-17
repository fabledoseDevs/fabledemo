import { css, styled } from 'styled-components';

const BasicColumnStyle = css`
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
  ${BasicColumnStyle}
`;

export const RightColumn = styled.div`
  ${BasicColumnStyle}

  img {
    display: block;
    margin-left: 40px;
    width: 80%;
    max-width: 500px;
    height: auto;

    @media ${({ theme }) => theme.media.laptop} {
      margin-left: -8px;
      padding: 24px 48px;
    },
  }
`;

export const EmailForm = styled.form`
  padding: 24px 48px;
  position: static;
  width: 100%;
  height: auto;
  max-width: 600px;

  @media ${({ theme }) => theme.media.tablet} {
    margin-top: 24px;
    position: relative;
    height: 40px;
  },
`;

export const EmailInput = styled.input`
  position: static;
  width: 100%;
  height: 40px;
  line-height: 2;
  padding: 0 12px;
  border: none;
  border-radius: 20px;

  @media ${({ theme }) => theme.media.tablet} {
    position: absolute;
    top: 0;
    left: 48px;
    width: calc(100% - 100px);
    max-width: 550px;
  },
`;

export const EmailSubmitButton = styled.button`
  display: block;
  margin: 12px auto;
  position: static;
  width: auto;
  height: 40px;
  padding: 0 24px;
  border: none;
  border-radius: 20px;
  color: ${({ theme }) => theme.palette.secondary};
  background-color: ${({ theme }) => theme.palette.green};

  @media ${({ theme }) => theme.media.tablet} {
    position: absolute;
    top: 0;
    right: 52px;
    margin: 0;
  }

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.palette.lightergreen};
  }
`;
