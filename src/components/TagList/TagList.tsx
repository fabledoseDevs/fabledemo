import { InfoCircle } from '@styled-icons/bootstrap/InfoCircle';
import { track } from '@vercel/analytics';
import React, { useState } from 'react';

import Tagbox from '@/components/Tagbox';
import { TagListTranslations, useTranslation } from '@/translations';
import type { TAG_NAMES } from '@/types/fairytale.types';

import TagElement from '../TagElement';
import {
  MobileSorter,
  SeparatorElement,
  TagListBody,
  TagListTitle,
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
  const { general, themes, details } = useTranslation(TagListTranslations);

  const openTagSummary = () => {
    track('Open modal: story tags');
    setInfoModalActive(prevState => !prevState);
  };

  return (
    <>
      <TagListBody>
        <MobileSorter>
          <TagsListUl>
            <TagListTitle>{general}</TagListTitle>
            {mainTags.map((tag: TAG_NAMES) => (
              <TagElement key={tag} tagName={tag} />
            ))}
          </TagsListUl>
          <SeparatorElement />
          <TagsListUl>
            <TagListTitle>{themes}</TagListTitle>
            {extraTags.map((tag: TAG_NAMES) => (
              <TagElement key={tag} tagName={tag} />
            ))}
          </TagsListUl>
          <SeparatorElement />
          <TagsListUl>
            <TagListTitle>{details}</TagListTitle>
            <li>
              <TagsSummaryButton onClick={openTagSummary}>
                <InfoCircle />
              </TagsSummaryButton>
            </li>
          </TagsListUl>
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
