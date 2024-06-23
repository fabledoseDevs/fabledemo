import type { ReactElement, ReactNode } from 'react';

export type Children =
  | ReactNode
  | Array<ReactNode>
  | ReactElement
  | Array<ReactElement>;

export type Mapper<T, ContentfulData> = (element: ContentfulData) => T | false;
