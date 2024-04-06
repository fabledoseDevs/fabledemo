import styled from 'styled-components';

export const TagListBody = styled.div`
  display: flex;
  flex-direction: column;
  margin: 34px 0;

  @media ${({ theme }) => theme.media.laptop} {
    flex-direction: row;
  }
`;

export const MobileSorter = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TagsListUl = styled.ul`
  list-style: none;
  height: 50px;
  //overflow: hidden;
`;

export const SeparatorElement = styled.span`
  display: none;

  @media ${({ theme }) => theme.media.laptop} {
    display: block;
    width: 2px;
    height: 50px;
    background-color: ${({ theme }) => theme.palette.accent};
    margin: 0 15px 0;
  }
`;

export const TagsSummaryButton = styled.button`
  width: auto;
  height: 32px;
  padding: 0 14px;
  border-radius: 20px;
  border: none;
  margin-top: 24px;
  cursor: pointer;
  color: ${({ theme }) => theme.palette.background};
  background-color: ${({ theme }) => theme.palette.accent};

  @media ${({ theme }) => theme.media.laptop} {
    margin-top: 11px;
  }

  &:active {
    background-color: ${({ theme }) => theme.palette.accentActive};
  }

  svg {
    width: 19px;
    margin-right: 6px;
  }

  span {
    font-size: 11px;
  }
`;
