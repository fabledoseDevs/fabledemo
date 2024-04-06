import { InfoCircle } from '@styled-icons/bootstrap/InfoCircle';
import React, { useState } from 'react';

import Tagbox from '@/components/Tagbox';
import type { TAG_NAMES } from '@/fablesLibrary/library.types';

import TagElement from '../TagElement';
import {
  MobileSorter,
  SeparatorElement,
  TagListBody,
  TagsListUl,
  TagsSummaryButton,
} from './TagList.styled';
import type { TagList as TagListType } from './TagList.types';

export const TagList: TagListType = ({
  mainTags,
  extraTags,
  storyTitle,
  synopsis,
}) => {
  const [isInfoModalActive, setInfoModalActive] = useState<boolean>(false);

  return (
    <>
      <TagListBody>
        <MobileSorter>
          <TagsListUl>
            {mainTags.map((tag: TAG_NAMES) => (
              <TagElement key={tag} tagName={tag} />
            ))}
          </TagsListUl>
          <SeparatorElement />
          <TagsListUl>
            {extraTags.map((tag: TAG_NAMES) => (
              <TagElement key={tag} tagName={tag} />
            ))}
          </TagsListUl>
          <SeparatorElement />
        </MobileSorter>
        <MobileSorter>
          <TagsSummaryButton
            onClick={() => setInfoModalActive(prevState => !prevState)}
          >
            <InfoCircle />
            <span>Dla rodzica</span>
          </TagsSummaryButton>
        </MobileSorter>
      </TagListBody>
      {isInfoModalActive && (
        <Tagbox
          exitFunction={setInfoModalActive}
          storyTitle={storyTitle}
          synopsis={synopsis}
          mainTags={mainTags}
          extraTags={extraTags}
        />
      )}
    </>
  );
};
