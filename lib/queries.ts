import { gql } from '@apollo/client';

export const COVER_ANIMATION_FRAGMENT = gql`
  fragment cAnimation on StoryPageCover {
    ldAnimation {
      url
    }
    sdAnimation {
      url
    }
    hdAnimation {
      url
    }
    fhdAnimation {
      url
    }
  }
`;

export const MAIN_ANIMATION_FRAGMENT = gql`
  fragment mAnimation on StoryPageAnimation {
    ldAnimation {
      url
    }
    sdAnimation {
      url
    }
    hdAnimation {
      url
    }
    fhdAnimation {
      url
    }
  }
`;

export const STORY_PAGE_FRAGMENT = gql`
  fragment storyPage on StoryPage {
    name
    id
    layout
    paragraphsCollection {
      items {
        paragraphContent
      }
    }
    animation {
      description
      backupImage {
        url
        width
        height
      }
      ...mAnimation
    }
  }
`;

export const STORY_CARD_FRAGMENT = gql`
  fragment storyCardFragment on Story {
    sys {
      id
    }
    title
    summary
    synopsis
    mainTags
    extendedTags
  }
`;

export const META_DATA = gql`
  fragment MetaData on MetaData {
    sys {
      id
    }
    title
    description
    ogTitle
    ogDescription
    ogImage {
      url
      width
      height
    }
  }
`;

export const STORY_FRAGMENT = gql`
  ${COVER_ANIMATION_FRAGMENT}
  ${MAIN_ANIMATION_FRAGMENT}
  ${STORY_PAGE_FRAGMENT}
  ${META_DATA}
  fragment storyFragment on Story {
    sys {
      id
    }
    metaData {
      ...MetaData
    }
    title
    adaptationAuthors
    picturesAuthors
    animation
    translation
    defaultColor
    thumbnail {
      url
    }
    decorator {
      url
    }
    cover {
      description
      blurImage {
        url
        width
        height
      }
      ...cAnimation
    }
    summary
    extendedSummary
    synopsis
    mainTags
    extendedTags
    storyPagesCollection {
      items {
        ...storyPage
      }
    }
  }
`;

export const GET_STORY_CARD = gql`
  ${STORY_FRAGMENT}
  query Story($preview: Boolean, $slug: String!) {
    storyCollection(preview: $preview, where: { slug: $slug }, limit: 1) {
      items {
        ...storyCardFragment
      }
    }
  }
`;

export const GET_STORY = gql`
  ${STORY_FRAGMENT}
  query Story($preview: Boolean, $slug: String!) {
    storyCollection(preview: $preview, where: { slug: $slug }, limit: 1) {
      items {
        ...storyFragment
      }
    }
  }
`;

export const GET_SLUGS = gql`
  query Story($preview: Boolean) {
    storyCollection(preview: $preview) {
      items {
        slug
      }
    }
  }
`;
