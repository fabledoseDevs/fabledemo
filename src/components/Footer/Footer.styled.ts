import styled from 'styled-components';

export const StyledFooter = styled.div`
  display: flex,
  flexDirection: column,
  justifyContent: center,
  alignItems: center,
  gap: 20px,
  padding: 25px 0,
  backgroundColor: theme.palette.secondary,

  @media ${({ theme }) => theme.media.tablet} {
    padding: 45px 0,
    gap: 40px,
  },
`;
