import React from 'react';

import ModalWindow from '@/components/ModalWindow';
import TagElement from '@/components/TagElement';
import type { TAG_NAMES } from '@/types/fairytale.types';

import {
  Headline,
  InfoLine,
  Synopsis,
  TagColumn,
  TagSorter,
} from './Tagbox.styled';
import { useTranslations } from './Tagbox.translations';
import type { Tagbox as TagboxType } from './Tagbox.types';

export const Tagbox: TagboxType = ({
  exitFunction,
  mainTags,
  extraTags,
  storyTitle,
  synopsis,
}) => {
  const { tagboxTitle, tagboxSynopsis } = useTranslations();

  return (
    <>
      <ModalWindow exitFunction={exitFunction}>
        <Headline>
          <InfoLine>{tagboxTitle}</InfoLine>
          <h2>{storyTitle}</h2>
        </Headline>
        <TagSorter>
          <TagColumn>
            {mainTags.map((tag: TAG_NAMES) => (
              <TagElement key={tag} tagName={tag} extendedTag />
            ))}
          </TagColumn>
          <TagColumn>
            {extraTags.map((tag: TAG_NAMES) => (
              <TagElement key={tag} tagName={tag} extendedTag />
            ))}
          </TagColumn>
        </TagSorter>
        <InfoLine>{tagboxSynopsis}</InfoLine>
        <Synopsis>{synopsis}</Synopsis>
      </ModalWindow>
    </>
  );
};
