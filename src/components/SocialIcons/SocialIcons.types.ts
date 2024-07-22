import type { ReactElement } from 'react';

export interface SocialIconsTT {
  cta: string;
  fbLabel: string;
  fbLink: string;
  instLabel: string;
  instLink: string;
  subLabel: string;
  subLink: string;
}

export interface Translation {
  en: SocialIconsTT;
  pl: SocialIconsTT;
}

export type UseTranslation = () => SocialIconsTT;
export type SocialIcons = () => ReactElement;
