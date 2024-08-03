import styled from 'styled-components';

export const LegalBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Headline = styled.h3`
  font-size: 20px;
`;

export const Paragraph = styled.p`
  font-size: 14px;
  line-height: 1.5 !important;

  a {
    font-weight: 600;
    color: ${({ theme }) => theme.palette.green};

    &:hover,
    &:active {
      color: ${({ theme }) => theme.palette.accentActive};
    }
  }
`;

export const List = styled.ul`
  padding-left: 24px;
  margin-bottom: 24px;
  font-size: 14px;
  line-height: 1.5 !important;
`;

export const ButtonPositioner = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
