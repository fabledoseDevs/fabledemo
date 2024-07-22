import { useEffect, useState } from 'react';

import { useLanguageContext } from '@/context/LanguageContext/LanguageContext.provider';

import type {
  FooterTT,
  Translation,
  UseTranslation as UseTranslationType,
} from './Footer.types';

export const FooterTranslations: Translation = {
  en: {
    mainCopyrights: 'Fabledose Team. All rights reserved.',
    copyrightsNote:
      'The copyrights on this page belong to the individuals participating in project:',
  },
  pl: {
    mainCopyrights: 'Zespół Fabledose. Wszelkie prawa zastrzeżone.',
    copyrightsNote:
      'Prawa autorskie na tej stronie należą do osób prywatnych tworzących projekt:',
  },
};

export const useTranslation: UseTranslationType = () => {
  const { languageInfo } = useLanguageContext();
  const [activeTranslations, setActiveTranslations] = useState<FooterTT>(
    FooterTranslations.en,
  );

  useEffect(() => {
    setActiveTranslations(
      FooterTranslations[languageInfo] || FooterTranslations.en,
    );
  }, [languageInfo]);

  const { mainCopyrights, copyrightsNote } = activeTranslations;

  return {
    mainCopyrights,
    copyrightsNote,
  };
};
