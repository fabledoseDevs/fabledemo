import Button from '../Button';
import { TagList } from '../TagList';
import {
  Excerpt,
  LeftSide,
  MiniCoverImage,
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
  bookTitle,
  summary,
  synopsis,
  iconsBlock,
  ctaButton,
}) => (
  <>
    <Title>{bookTitle}</Title>
    <Excerpt>{summary}</Excerpt>
    <TagList
      storyTitle={bookTitle}
      synopsis={synopsis}
      mainTags={iconsBlock.mainTags}
      extraTags={iconsBlock.extraTags}
    />
    <Button {...ctaButton} />
  </>
);

export const StoryCard: StoryCardType = ({ layout, bookCover, content }) => (
  <StoryCardBody mobileSort={layout === BOOKCARD_LAYOUT.IMAGE_RIGHT}>
    <LeftSide>
      {layout === BOOKCARD_LAYOUT.IMAGE_LEFT ? (
        <MiniCoverImage {...bookCover} />
      ) : (
        <ContentBlock {...content} />
      )}
    </LeftSide>
    <RightSide>
      {layout === BOOKCARD_LAYOUT.IMAGE_RIGHT ? (
        <MiniCoverImage {...bookCover} />
      ) : (
        <ContentBlock {...content} />
      )}
    </RightSide>
  </StoryCardBody>
);
