import type { ReactElement, ReactNode } from 'react';

export type Children =
  | ReactNode
  | Array<ReactNode>
  | ReactElement
  | Array<ReactElement>;
