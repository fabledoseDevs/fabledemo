import Image from 'next/image';

import Button from '../Button';
import { COLOR_VARIANTS, FONT_VARIANTS, PURPOSE } from '../Button/Button.types';
import TagList from '../TagList';
import {
  Author,
  BookCardBody,
  Excerpt,
  LeftSide,
  RightSide,
  Title,
} from './BookCard.styled';
import type {
  BookCard as BookCardType,
  ContentBlock as ContentBlockType,
} from './BookCard.types';
import { BOOKCARD_LAYOUT } from './BookCard.types';

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
    <Button
      label="Cztyaj Bajkę"
      colorVariant={COLOR_VARIANTS.GREEN}
      fontVariant={FONT_VARIANTS.UPPERCASE}
      purpose={PURPOSE.FUNCTION_TRIGGER}
      onclickAction={() => console.info('Openibg fairy tale...')}
    />
  </>
);

export const BookCard: BookCardType = ({ layout, bookCover, content }) => (
  <BookCardBody mobileSort={layout === BOOKCARD_LAYOUT.IMAGE_RIGHT}>
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
  </BookCardBody>
);
