import type { Dispatch, ReactElement, SetStateAction } from 'react';

export interface ModalWindowTT {
  exit: string;
}

export interface Translation {
  en: ModalWindowTT;
  pl: ModalWindowTT;
}

export interface ModalWindowProps {
  exitFunction: Dispatch<SetStateAction<boolean>>;
  children: ReactElement | ReactElement[];
}

export type UseTranslation = () => ModalWindowTT;
export type ModalWindow = (props: ModalWindowProps) => ReactElement;
