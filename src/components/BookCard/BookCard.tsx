import Image from 'next/image';
import Button from '../Button';
import { COLOR_VARIANTS, FONT_VARIANTS, PURPOSE } from '../Button/Button.types';
import {
  Author,
  BookCardBody,
  Excerpt,
  IconsBlock,
  LeftSide,
  RightSide,
  TagIcon,
  Title,
} from './BookCard.styled';
import type {
  BookCard as BookCardType,
  ContentBlock as ContentBlockType,
} from './BookCard.types';
import { BOOKCARD_LAYOUT } from './BookCard.types';
import TagList from "../TagList";

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
      label='Cztyaj Bajkę'
      colorVariant={COLOR_VARIANTS.GREEN}
      fontVariant={FONT_VARIANTS.UPPERCASE}
      purpose={PURPOSE.FUNCTION_TRIGGER} //TODO: Update purpouse when ready!
      onclickAction={() => console.info('Openibg fairy tale...')} //TODO: Update this when ready!
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
