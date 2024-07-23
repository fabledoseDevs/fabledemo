type UseActiveTranslationHook = () => 'pl' | 'en' | '';

import { useEffect, useState } from 'react';

import { useLanguageContext } from '@/context/LanguageContext/LanguageContext.provider';
import { ACTIVE_LANGUAGE } from '@/context/LanguageContext/LanguageContext.types';

export const useActiveTranslation: UseActiveTranslationHook = () => {
  const { languageInfo } = useLanguageContext();
  const [activeTranslation, setActiveTranslation] = useState<'pl' | 'en' | ''>(
    '',
  );

  useEffect(() => {
    switch (languageInfo) {
      case ACTIVE_LANGUAGE.PL:
        setActiveTranslation('pl');
        break;
      case ACTIVE_LANGUAGE.EN:
        setActiveTranslation('en');
        break;
      default:
        setActiveTranslation('en');
    }
  }, [languageInfo]);

  return activeTranslation;
};
