import { styled } from 'styled-components';

export const ExitboxContainer = styled.div`
  width: auto;
  height: 100dvh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin-top: -24px;

  @media ${({ theme }) => theme.media.laptop} {
    height: auto;
    margin-top: auto;
  }

  h3 {
    width: 100%;
    text-align: center;
    margin-bottom: 24px;
  }

  div {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;
