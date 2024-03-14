import { Close } from '@styled-icons/ionicons-outline/Close';
import React from 'react';

import {
  ExitButton,
  ExitLayer,
  Headline,
  InfoLine,
  Synopsis,
  TagboxContainer,
  TagboxModal,
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
  <TagboxModal>
    <ExitLayer onClick={() => exitFunction(false)} />
    <TagboxContainer>
      <ExitButton onClick={() => exitFunction(false)}>
        <span>Zamknij</span>
        <Close />
      </ExitButton>
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
    </TagboxContainer>
  </TagboxModal>
);
