import styled, { css } from 'styled-components';

export const TagBody = styled.li<{ extend: boolean }>`
  list-style: none;
  display: inline-block;
  position: relative;
  width: 50px;

  img {
    width: 50px;
    height: 50px;
    box-shadow: none;
  }

  ${({ extend }) =>
    extend &&
    css`
      display: flex;
      flex-direction: row;
      width: 100%;
      min-width: 200px;

      img {
        width: 70px;
        height: 70px;
        box-shadow: none;
      }
    `}
`;

export const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-items: center;
  width: 120px;
  height: 100px;
  overflow: hidden;

  h5 {
    font-size: 12px;
    color: ${({ theme }) => theme.palette.accent};
  }
`;

export const DescriptionBox = styled.p`
  display: flex;
  align-items: center;
  justify-items: center;
  padding-left: 24px;
  height: 80px;
  width: calc(100% - 120px);
`;
