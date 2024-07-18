import React, { createContext, useContext, useEffect, useState } from 'react';
import { type ReactNode } from 'react';
import { useCookies } from 'react-cookie';

import type {
  LanguageContext as LanguageContextType,
  UseLanguageContext as UseLanguageContextType,
} from './LanguageContext.types';
import { ACTIVE_LANGUAGE } from './LanguageContext.types';

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cookies, setCookie] = useCookies(['language']);
  const activeLanguage = cookies.language;

  const [languageInfo, setLanguageInfo] =
    useState<ACTIVE_LANGUAGE>(activeLanguage);

  useEffect(() => {
    if (!cookies.language) {
      const browserLanguage = navigator.language.toLowerCase();

      switch (true) {
        case browserLanguage.startsWith('pl'):
          setLanguageInfo(ACTIVE_LANGUAGE.PL);
          break;
        case browserLanguage.startsWith('en'):
          setLanguageInfo(ACTIVE_LANGUAGE.EN);
          break;
        default:
          setLanguageInfo(ACTIVE_LANGUAGE.EN);
      }
    }

    setCookie('language', languageInfo, { maxAge: 2592000 });
  }, [languageInfo]);

  return (
    <LanguageContext.Provider value={{ languageInfo, setLanguageInfo }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext: UseLanguageContextType = () => {
  const languageContext = useContext(LanguageContext);
  if (!languageContext) {
    throw new Error(
      'useLanguageContext must be used within a LanguageProvider',
    );
  }
  return languageContext;
};
