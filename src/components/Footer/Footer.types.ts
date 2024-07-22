import type { ReactElement } from 'react';

export interface FooterTT {
  mainCopyrights: string;
  copyrightsNote: string;
}

export interface Translation {
  en: FooterTT;
  pl: FooterTT;
}

export type UseTranslation = () => FooterTT;
export type Footer = () => ReactElement;
