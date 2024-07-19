import { useEffect, useState } from 'react';

import { useLanguageContext } from '@/context/LanguageContext/LanguageContext.provider';

import type {
  TagboxTT,
  Translation,
  UseTranslation as UseTranslationType,
} from './Tagbox.types';

export const TagboxTranslations: Translation = {
  en: {
    tagboxTitle: 'Themes and recommendation for',
    tagboxSynopsis: 'Synopsis',
  },
  pl: {
    tagboxTitle: 'Motywy i rekomendacje dla utworu',
    tagboxSynopsis: 'Streszczenie',
  },
};

export const useTranslations: UseTranslationType = () => {
  const { languageInfo } = useLanguageContext();
  const [activeTranslations, setActiveTranslations] = useState<TagboxTT>(
    TagboxTranslations.en,
  );

  useEffect(() => {
    setActiveTranslations(
      TagboxTranslations[languageInfo] || TagboxTranslations.en,
    );
  }, [languageInfo]);

  const { tagboxTitle, tagboxSynopsis } = activeTranslations;

  return { tagboxTitle, tagboxSynopsis };
};
