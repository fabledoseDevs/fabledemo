import { InfoCircle } from '@styled-icons/bootstrap/InfoCircle';
import React, { useState } from 'react';

import Tagbox from '@/components/Tagbox';
import type { TAG_NAMES } from '@/fables_library/library.types';

import TagElement from '../TagElement';
import {
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

  const modalHandler = () => {
    setInfoModalActive(prevState => !prevState);
  };

  return (
    <>
      <TagListBody>
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
        <TagsSummaryButton onClick={modalHandler}>
          <InfoCircle />
          <span>Sprawdź tagi</span>
        </TagsSummaryButton>
      </TagListBody>
      {isInfoModalActive && (
        <Tagbox
          storyTitle={storyTitle}
          synopsis={synopsis}
          mainTags={mainTags}
          extraTags={extraTags}
        />
      )}
    </>
  );
};
