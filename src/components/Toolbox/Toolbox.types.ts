import type { Dispatch, ReactElement, SetStateAction } from 'react';

export interface ToolboxProps {
  exitFunction: Dispatch<SetStateAction<boolean>>;
}

export type Toolbox = (props: ToolboxProps) => ReactElement;
