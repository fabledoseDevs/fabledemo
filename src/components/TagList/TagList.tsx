import React from 'react';

import type { TagElementProps } from '../TagElement';
import TagElement from '../TagElement';
import { SeparatorElement, TagListBody, TagsListUl } from './TagList.styled';
import type { TagList as TagListType } from './TagList.types';

export const TagList: TagListType = ({ mainTags, extraTags }) => (
  <TagListBody>
    <TagsListUl>
      {mainTags.map((tag: TagElementProps) => (
        <TagElement key={tag.tagName} {...tag} />
      ))}
    </TagsListUl>
    <SeparatorElement />
    <TagsListUl>
      {extraTags.map((tag: TagElementProps) => (
        <TagElement key={tag.tagName} {...tag} />
      ))}
    </TagsListUl>
  </TagListBody>
);
