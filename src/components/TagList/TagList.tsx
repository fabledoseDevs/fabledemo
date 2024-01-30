import React from 'react';
import { TagListBody, TagsListUl, SeparatorElement } from './TagList.styled';
import TagElement, { TagElementProps } from '../TagElement';
import type  {TagList as TagListType}  from './TagList.types'

export const TagList: TagListType = ({mainTags, extraTags}) => {
  return (
    <TagListBody>
      <TagsListUl>
        {mainTags.map((tag: TagElementProps) => {
          return <TagElement {...tag} />
        })}
      </TagsListUl>
      <SeparatorElement />
      <TagsListUl>
        {extraTags.map((tag: TagElementProps) => {
          return <TagElement {...tag} />
        })}
      </TagsListUl>
    </TagListBody>
  )
}