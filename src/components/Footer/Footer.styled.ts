import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 25px 0;
  background-color: #fff;
    
    img {
        display: block;
        margin: 0 auto;
    }

  @media ${({ theme }) => theme.media.tablet} {
    padding: 45px 0;
    gap: 40px;
  },
`;
