import type { Dispatch, ReactElement, SetStateAction } from 'react';

export interface ExitboxProps {
  exitFunction: Dispatch<SetStateAction<boolean>>;
}

export type Exitbox = (props: ExitboxProps) => ReactElement;
