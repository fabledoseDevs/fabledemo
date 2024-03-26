import React from 'react';

import ModalWindow from '@/components/ModalWindow';
import {
  Headline,
  InfoLine,
  Synopsis,
  TagColumn,
  TagSorter,
} from '@/components/Tagbox/Tagbox.styled';
import TagElement from '@/components/TagElement';
import type { TAG_NAMES } from '@/fablesLibrary/library.types';

import type { Tagbox as TagboxType } from './Tagbox.types';

export const Tagbox: TagboxType = ({
  exitFunction,
  mainTags,
  extraTags,
  storyTitle,
  synopsis,
}) => (
  <>
    <ModalWindow exitFunction={exitFunction}>
      <Headline>
        <InfoLine>Motywy i rekomendacje dla utworu</InfoLine>
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
      <InfoLine>Streszczenie</InfoLine>
      <Synopsis>{synopsis}</Synopsis>
    </ModalWindow>
  </>
);
