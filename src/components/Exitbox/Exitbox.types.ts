import type { Dispatch, ReactElement, SetStateAction } from 'react';

export interface ExitboxTT {
  headline: string;
  acceptButton: string;
  declineButton: string;
}

export interface Translation {
  en: ExitboxTT;
  pl: ExitboxTT;
}

export interface ExitboxProps {
  exitFunction: Dispatch<SetStateAction<boolean>>;
}

export type UseTranslation = () => ExitboxTT;
export type Exitbox = (props: ExitboxProps) => ReactElement;
