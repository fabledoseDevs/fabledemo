import { BOOKCARD_LAYOUT, BookCard as BookCardType, ContentBlock as ContentBlockType} from "./BookCard.types";
import {
  BookCardBody, LeftSide, RightSide,
  Author, Title, Excerpt, IconsBlock, TagIcon
} from './BookCard.styled'
import Image from "next/image";
import Button from "../Button";
import { COLOR_VARIANTS, FONT_VARIANTS, PURPOSE } from "../Button/Button.types";

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
    <IconsBlock>{iconsBlock.main.map((icon) => <TagIcon>{icon}</TagIcon>)} | {iconsBlock.details.map((icon) => <TagIcon>{icon}</TagIcon>)}</IconsBlock> {/* TODO: Switch this to real component IconsBlock! */}
    <Button
      label='Cztyaj Bajkę'
      colorVariant={COLOR_VARIANTS.GREEN}
      fontVariant={FONT_VARIANTS.UPPERCASE}
      purpose={PURPOSE.FUNCTION_TRIGGER} //TODO: Update purpouse when ready!
      onclickAction={() => console.info('Openibg fairy tale...')} //TODO: Update this when ready!
    />
  </>
)

export const BookCard: BookCardType = ({
  layout,
  bookCover,
  content,
}) => (
  <BookCardBody mobileSort={layout === BOOKCARD_LAYOUT.IMAGE_RIGHT}>
    <LeftSide>
      {
        layout === BOOKCARD_LAYOUT.IMAGE_LEFT ? 
        <Image {...bookCover}/> : 
        <ContentBlock {...content}/>
      }
    </LeftSide>
    <RightSide>
      {
        layout === BOOKCARD_LAYOUT.IMAGE_RIGHT ? 
        <Image {...bookCover}/> : 
        <ContentBlock {...content}/>
      }
    </RightSide>
  </BookCardBody>
)
