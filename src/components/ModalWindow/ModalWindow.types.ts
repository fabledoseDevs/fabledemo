import type { Dispatch, ReactElement, SetStateAction } from 'react';

export interface ModalWindowProps {
  exitFunction: Dispatch<SetStateAction<boolean>>;
  children: ReactElement | ReactElement[];
}

export type ModalWindow = (props: ModalWindowProps) => ReactElement;
