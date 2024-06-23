import type { Story } from '@/types/fairytale.types';
import { LAYOUT_VARIANTS, TAG_NAMES } from '@/types/fairytale.types';
import type { Mapper } from '@/types/general';

import type { QStory } from './queries.types';

const mapToTagNamesEnum = (tag: string): TAG_NAMES => {
  const tagEnumValue =
    TAG_NAMES[tag.toUpperCase().replace(/-/g, '_') as keyof typeof TAG_NAMES];
  if (!tagEnumValue) {
    throw new Error(`Unknown tag: ${tag}`);
  }
  return tagEnumValue;
};

const mapToLayoutVariantsEnum = (layout: string): LAYOUT_VARIANTS => {
  const layoutEnumValue =
    LAYOUT_VARIANTS[
      layout.toUpperCase().replace(/-/g, '_') as keyof typeof LAYOUT_VARIANTS
    ];
  if (!layoutEnumValue) {
    throw new Error(`Unknown layout: ${layout}`);
  }
  return layoutEnumValue;
};

export const mapStory: Mapper<Story, QStory> = storyData => {
  try {
    return {
      info: {
        id: storyData.sys.id,
        title: storyData.title,
        ...(storyData.author && { author: storyData.author }),
        ...(storyData.adaptationAuthors && {
          adaptationAuthors: storyData.adaptationAuthors,
        }),
        ...(storyData.translation && { translation: storyData.translation }),
        pictures: storyData.picturesAuthors,
        animation: storyData.animation,
        thumb: storyData.thumbnail,
        decorator: storyData.decorator,
        defaultColor: storyData.defaultColor,
        cover: {
          description: storyData.cover.description,
          backup: {
            src: storyData.cover.blurImage.url,
            height: storyData.cover.blurImage.height,
            width: storyData.cover.blurImage.width,
          },
          picSizes: {
            ...(storyData.cover.fhdAnimation && {
              '1080': storyData.cover.fhdAnimation.url,
            }),
            '720': storyData.cover.hdAnimation.url,
            ...(storyData.cover.sdAnimation && {
              '480': storyData.cover.sdAnimation.url,
            }),
            ...(storyData.cover.ldAnimation && {
              '360': storyData.cover.ldAnimation.url,
            }),
          },
        },
        summary: storyData.summary,
        extendedSummary: storyData.extendedSummary,
        synopsis: storyData.synopsis,
        mainTags: storyData.mainTags.map(mapToTagNamesEnum) as [
          TAG_NAMES,
          TAG_NAMES,
        ],
        detailedTags: storyData.extendedTags.map(mapToTagNamesEnum),
      },
      content: storyData.storyPagesCollection.items.map(storySinglePage => ({
        slideId: storySinglePage.id,
        layout: mapToLayoutVariantsEnum(storySinglePage.layout),
        picture: {
          description: storySinglePage.animation.description,
          backup: {
            src: storySinglePage.animation.backupImage.url,
            height: storySinglePage.animation.backupImage.height,
            width: storySinglePage.animation.backupImage.width,
          },
          picSizes: {
            ...(storySinglePage.animation.fhdAnimation && {
              '1080': storySinglePage.animation.fhdAnimation.url,
            }),
            '720': storySinglePage.animation.hdAnimation.url,
            ...(storySinglePage.animation.sdAnimation && {
              '480': storySinglePage.animation.sdAnimation.url,
            }),
            ...(storySinglePage.animation.ldAnimation && {
              '360': storySinglePage.animation.ldAnimation.url,
            }),
          },
        },
        ...(storySinglePage.paragraphsCollection && {
          paragraphs: storySinglePage.paragraphsCollection.items.map(
            paragraph => paragraph.paragraphContent,
          ),
        }),
      })),
    };
  } catch (e) {
    console.error(e);
    console.error('ID pobieranego elementu: ' + storyData.sys.id);

    return false;
  }
};
