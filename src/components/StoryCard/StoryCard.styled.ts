import Image from 'next/image';
import styled from 'styled-components';

import { BOOKCARD_LAYOUT } from '@/components/StoryCard/StoryCard.types';

export const MiniCoverImage = styled(Image)`
  display: block;
  width: 100%;
  height: auto;
  border-radius: 15px;
  box-shadow: ${({ theme }) => theme.palette.wideShadow};
`;

export const StoryCardBody = styled.div<{ mobileSort: boolean }>`
  display: flex;
  flex-direction: ${({ mobileSort }) =>
    mobileSort ? 'column-reverse' : 'column'};
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  padding: 12px 24px;
  margin: 24px auto;
  max-width: ${({ theme }) => theme.maxWidth};

  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: row;
  }
`;

export const LeftSide = styled.div<{ layoutInfo: BOOKCARD_LAYOUT }>`
  width: 100%;

  @media ${({ theme }) => theme.media.tablet} {
    width: ${({ layoutInfo }) =>
      layoutInfo === BOOKCARD_LAYOUT.IMAGE_LEFT ? '42%' : '54%'};
  }
`;

export const RightSide = styled.div<{ layoutInfo: BOOKCARD_LAYOUT }>`
  width: 100%;

  @media ${({ theme }) => theme.media.tablet} {
    width: ${({ layoutInfo }) =>
      layoutInfo === BOOKCARD_LAYOUT.IMAGE_RIGHT ? '42%' : '54%'};
  }
`;

export const Title = styled.div`
  font-family: ${({ theme }) => theme.fonts.poltawskiNowy};
  text-transform: uppercase;
  font-size: 24px;
  margin: 20px 0 5px;

  @media ${({ theme }) => theme.media.tablet} {
    font-size: 36px;
    margin: 0 0 5px;
  }
`;

export const Excerpt = styled.div`
  font-size: 18px;
  line-height: 1.7;
  margin-bottom: 20px;
`;

export const ButtonPositioner = styled.div`
  margin-top: 24px;

  @media ${({ theme }) => theme.media.tablet} {
    margin-top: 48px;
  }
`;
