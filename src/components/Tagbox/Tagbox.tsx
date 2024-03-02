import React from 'react';

import {
  Container,
  Headline,
  InfoLine,
  Synopsis,
  TagboxModal,
  TagColumn,
  TagSorter,
} from '@/components/Tagbox/Tagbox.styled';
import TagElement from '@/components/TagElement';
import type { TAG_NAMES } from '@/fables_library/library.types';

import type { Tagbox as TagboxType } from './Tagbox.types';

export const Tagbox: TagboxType = ({
  mainTags,
  extraTags,
  storyTitle,
  synopsis,
}) => (
  <TagboxModal>
    <Container>
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
    </Container>
  </TagboxModal>
);
