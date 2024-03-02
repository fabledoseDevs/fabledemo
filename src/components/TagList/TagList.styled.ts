import styled from 'styled-components';

export const TagListBody = styled.div`
  display: flex;
  flex-direction: row;
  margin: 34px 0;
`;

export const TagsListUl = styled.ul`
  list-style: none;
  height: 50px;
  overflow: hidden;
`;

export const SeparatorElement = styled.span`
  width: 2px;
  height: 50px;
  background-color: ${({ theme }) => theme.palette.accent};
  margin: 0 15px 0;
`;

export const TagsSummaryButton = styled.button`
  width: auto;
  height: 32px;
  padding: 0 14px;
  border-radius: 20px;
  margin-top: 11px;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.palette.background};
  background-color: ${({ theme }) => theme.palette.accent};

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

export const InfoModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndex.high};
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  width: 100dvw;
  height: 100dvh;
  overflow: hidden;
  background: ${({ theme }) => theme.palette.storyPage.textbox60};
`;
