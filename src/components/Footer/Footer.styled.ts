import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #fff;
  padding: 24px 0;

  img {
    display: block;
    margin: 0 auto;
  }
`;

export const Copyrights = styled.p`
  text-align: center;
  font-size: 12px;
  line-height: 1.5;

  a {
    font-weight: bold;
    color: ${({ theme }) => theme.palette.darkgray};

    &:hover {
      color: ${({ theme }) => theme.palette.green};
    }
  }
`;
