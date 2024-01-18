import styled from 'styled-components';

export const Wrapper = styled.header`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;

  svg {
    display: block;
    width: 200px;
  }

  @media ${({ theme }) => theme.media.tablet} {
    align-items: center;
    justify-content: unset;
    padding: 40px 60px;

    svg {
      display: block;
      width: 250px;
    }
  }
`;
