import styled, { css } from 'styled-components';

const imageStyle = css`
  img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 15px;
    box-shadow: ${({ theme }) => theme.palette.wideShadow};
  }
`;

export const BookCardBody = styled.div<{ mobileSort: boolean }>`
  display: flex;
  flex-direction: ${({ mobileSort }) =>
    mobileSort ? 'column-reverse' : 'column'};
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  padding: 2%;
  margin: 5% 0;
  max-width: ${({ theme }) => theme.maxWidth};

  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: row;
  }
`;

export const LeftSide = styled.div`
  width: 100%;

  @media ${({ theme }) => theme.media.tablet} {
    width: 48%;
  }

  ${imageStyle};
`;

export const RightSide = styled.div`
  width: 100%;

  @media ${({ theme }) => theme.media.tablet} {
    width: 48%;
  }

  ${imageStyle};
`;

export const Author = styled.div`
  text-transform: uppercase;
  font-size: 22px;
  margin: 20px 0 5px;

  @media ${({ theme }) => theme.media.tablet} {
    margin: 0 0 5px;
  }
`;

export const Title = styled.div`
  font-family: ${({ theme }) => theme.fonts.poltawskiNowy};
  text-transform: uppercase;
  font-size: 48px;
  margin-bottom: 5px;
`;

export const Excerpt = styled.div`
  font-size: 18px;
  line-height: 1.7;
  margin-bottom: 20px;
`;

export const IconsBlock = styled.ul`
  list-style: none;
  margin-bottom: 20px;
`;

export const TagIcon = styled.li`
  padding: 5px;
  display: inline;
`;
