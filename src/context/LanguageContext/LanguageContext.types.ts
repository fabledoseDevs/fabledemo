import type { Dispatch, SetStateAction } from 'react';

export enum ACTIVE_LOCALIZATION {
  GLOBAL = 'global',
  ENGLISH_SPEAKING = 'english-speaking',
  POLISH = 'polish',
}

export enum ACTIVE_LANGUAGE {
  EN = 'en',
  PL = 'pl',
}

export interface LanguageContextProps {
  localization: string;
  activeLanguage: ACTIVE_LANGUAGE;
}

export type LanguageContext = {
  languageInfo: LanguageContextProps;
  setLanguageInfo: Dispatch<SetStateAction<LanguageContextProps>>;
};

export type UseLanguageContext = () => LanguageContext;
