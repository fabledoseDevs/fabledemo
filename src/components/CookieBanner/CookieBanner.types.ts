import type { ReactElement } from 'react';

export interface CookieBannerTT {
  headline: string;
  firstPart: string;
  secondPart: string;
}

export interface Translation {
  en: CookieBannerTT;
  pl: CookieBannerTT;
}

export type UseTranslation = () => CookieBannerTT;
export type CookieBanner = () => ReactElement;
