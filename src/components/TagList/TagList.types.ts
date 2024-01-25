import { ReactElement } from "react";
import {TagElementProps } from '../TagElement'

export interface TagListProps {
  mainTags: [TagElementProps, TagElementProps],
  extraTags: TagElementProps[],
}

export type TagList = (props: TagListProps) => ReactElement;






