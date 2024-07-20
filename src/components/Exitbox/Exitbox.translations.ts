import { useEffect, useState } from 'react';

import { useLanguageContext } from '@/context/LanguageContext/LanguageContext.provider';

import type {
  ExitboxTT,
  Translation,
  UseTranslation as UseTranslationType,
} from './Exitbox.types';

export const ExitboxTranslations: Translation = {
  en: {
    headline: 'Would you like to stop reading and return to the home page?',
    acceptButton: 'Yes, take me to the home page',
    declineButton: 'No, I want to keep reading',
  },
  pl: {
    headline: 'Czy chesz zakończyć czytanie i wrócić do strony głównej?',
    acceptButton: 'Tak, wracam do strony głównej',
    declineButton: 'Nie, chcę czytać dalej',
  },
};

export const useTranslation: UseTranslationType = () => {
  const { languageInfo } = useLanguageContext();
  const [activeTranslations, setActiveTranslations] = useState<ExitboxTT>(
    ExitboxTranslations.en,
  );

  useEffect(() => {
    setActiveTranslations(
      ExitboxTranslations[languageInfo] || ExitboxTranslations.en,
    );
  }, [languageInfo]);

  const { headline, acceptButton, declineButton } = activeTranslations;

  return {
    headline,
    acceptButton,
    declineButton,
  };
};
