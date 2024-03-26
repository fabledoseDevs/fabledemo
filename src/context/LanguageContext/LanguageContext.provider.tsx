import React, { createContext, useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { type ReactNode } from 'react';
import { useCookies } from 'react-cookie';

import type {
  LanguageContext as LanguageContextType,
  LanguageContextProps,
  UseLanguageContext as UseLanguageContextType,
} from './LanguageContext.types';
import { ACTIVE_LANGUAGE, ACTIVE_LOCALIZATION } from './LanguageContext.types';

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cookies, setCookie] = useCookies(['language']);
  const activeLanguage = cookies.language;

  const [languageInfo, setLanguageInfo] = useState<LanguageContextProps>(
    () =>
      activeLanguage || {
        localization: ACTIVE_LOCALIZATION.GLOBAL,
        activeLanguage: ACTIVE_LANGUAGE.EN,
      },
  );

  useEffect(() => {
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
