import { useEffect, useState } from 'react';

import { useLanguageContext } from '@/context/LanguageContext/LanguageContext.provider';

import type {
  TagListTT,
  Translation,
  UseTranslation as UseTranslationType,
} from './TagList.types';

export const TagListTranslations: Translation = {
  en: {
    general: 'General',
    themes: 'Themes',
    details: 'Details',
  },
  pl: {
    general: 'Utwór',
    themes: 'Motywy',
    details: 'Szczegóły',
  },
};

export const useTranslation: UseTranslationType = () => {
  const { languageInfo } = useLanguageContext();
  const [activeTranslations, setActiveTranslations] = useState<TagListTT>(
    TagListTranslations.en,
  );

  useEffect(() => {
    setActiveTranslations(
      TagListTranslations[languageInfo] || TagListTranslations.en,
    );
  }, [languageInfo]);

  const { general, themes, details } = activeTranslations;

  return {
    general,
    themes,
    details,
  };
};
