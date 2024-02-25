import Image from 'next/image';

import Button from '../Button';
import { COLOR_VARIANTS, FONT_VARIANTS, PURPOSE } from '../Button/Button.types';
import { TagList } from '../TagList';
import {
  Author,
  Excerpt,
  LeftSide,
  RightSide,
  StoryCardBody,
  Title,
} from './StoryCard.styled';
import type {
  ContentBlock as ContentBlockType,
  StoryCard as StoryCardType,
} from './StoryCard.types';
import { BOOKCARD_LAYOUT } from './StoryCard.types';

const ContentBlock: ContentBlockType = ({
  author,
  bookTitle,
  bookExcerpt,
  iconsBlock,
  ctaButton,
}) => (
  <>
    <Author>{author}</Author>
    <Title>{bookTitle}</Title>
    <Excerpt>{bookExcerpt}</Excerpt>
    <TagList {...iconsBlock} />
    <Button {...ctaButton} />
  </>
);

export const StoryCard: StoryCardType = ({ layout, bookCover, content }) => (
  <StoryCardBody mobileSort={layout === BOOKCARD_LAYOUT.IMAGE_RIGHT}>
    <LeftSide>
      {layout === BOOKCARD_LAYOUT.IMAGE_LEFT ? (
        <Image {...bookCover} />
      ) : (
        <ContentBlock {...content} />
      )}
    </LeftSide>
    <RightSide>
      {layout === BOOKCARD_LAYOUT.IMAGE_RIGHT ? (
        <Image {...bookCover} />
      ) : (
        <ContentBlock {...content} />
      )}
    </RightSide>
  </StoryCardBody>
);
