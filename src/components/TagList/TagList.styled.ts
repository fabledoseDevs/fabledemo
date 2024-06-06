import styled, { keyframes } from 'styled-components';

const heartBeat = keyframes`
  10% {
    transform: scale(1);
    animation-timing-function: ease-in;
  }
  50% {
    transform: scale(1.1);
    animation-timing-function: ease-out;
  }
  100% {
      transform: scale(1);
      animation-timing-function: ease-in;
  }
`;

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
  height: 70px;
`;

export const TagListTitle = styled.div`
  text-align: center;
  font-size: 12px;
  color: ${({ theme }) => theme.palette.accent};
  margin-bottom: 6px;
`;

export const SeparatorElement = styled.span`
  display: block;
  width: 2px;
  height: 32px;
  background-color: ${({ theme }) => theme.palette.accent};
  margin: 26px 15px 0;

  @media ${({ theme }) => theme.media.tablet} {
    height: 40px;
    margin: 26px 15px 0;
  }
`;

export const TagsSummaryButton = styled.button`
  width: 34px;
  height: 34px;
  border-radius: 22px;
  margin: 5px 0 0 4px;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.palette.background};
  background-color: ${({ theme }) => theme.palette.accent};
  transform: scale(1);
  animation: ${heartBeat} 2.5s ease-in-out infinite both;

  @media ${({ theme }) => theme.media.tablet} {
    width: 42px;
    height: 42px;
  }

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.palette.accentActive};
  }

  svg {
    width: 28px;
    height: 28px;

    @media ${({ theme }) => theme.media.tablet} {
      width: 32px;
      height: 32px;
    }
  }

  span {
    font-size: 11px;
  }
`;
