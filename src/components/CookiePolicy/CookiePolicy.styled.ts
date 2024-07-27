import styled from 'styled-components';

export const CookiePolicyBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Headline = styled.h2`
  margin: 12px auto;
  text-align: center;
`;

export const Explanation = styled.p`
  margin-top: 24px;
`;

export const CookiesList = styled.ul`
  margin-top: 24px;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Cookie = styled.li`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 12px;

  svg {
    width: 60px;
    height: 60px;
  }
`;

export const CookieText = styled.div`
  width: calc(100% - 82px);
  h3 {
    font-size: 18px;
  }

  p {
    margin: 6px 0;
    font-size: 14px;
  }
`;

export const CookiesDelete = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 12px;

  p {
    width: calc(100% - 224px);
  }

  button {
    width: 200px;
    padding: 12px;
    gap: 12px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-items: center;
    align-items: center;
    cursor: pointer;
    background-color: ${({ theme }) => theme.palette.accent};

    &:disabled {
      cursor: not-allowed;
      background-color: ${({ theme }) => theme.palette.accentActive};
    }
  }

  svg {
    color: white;
    width: 90px;
  }

  span {
    color: white;
  }
`;
