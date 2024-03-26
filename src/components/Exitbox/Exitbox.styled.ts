import { styled } from 'styled-components';

export const ExitboxContainer = styled.div`
  width: auto;
  height: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: center;
  justify-content: space-evenly;

  h3 {
    width: 100%;
    text-align: center;
    margin-bottom: 24px;
  }

  div {
    display: flex;
    flex-direction: row;
    gap: 24px;
  }
`;
