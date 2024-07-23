import type { Dispatch, SetStateAction } from 'react';

export enum ACTIVE_LANGUAGE {
  EN = 'en',
  PL = 'pl',
}

export type LanguageContext = {
  languageInfo: ACTIVE_LANGUAGE;
  setLanguageInfo: Dispatch<SetStateAction<ACTIVE_LANGUAGE>>;
};

export type UseLanguageContext = () => LanguageContext;
