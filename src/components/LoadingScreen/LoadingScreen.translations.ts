import { useEffect, useState } from 'react';

import { useLanguageContext } from '@/context/LanguageContext/LanguageContext.provider';

import type {
  LoadingScreenTT,
  Translation,
  UseTranslation as UseTranslationType,
} from './LoadingScreen.types';

export const LoadingScreenTranslations: Translation = {
  en: {
    alt: 'Loading...',
    label: 'Loading Fable',
  },
  pl: {
    alt: 'Ładowanie...',
    label: 'Ładowanie Bajki',
  },
};

export const useTranslation: UseTranslationType = () => {
  const { languageInfo } = useLanguageContext();
  const [activeTranslations, setActiveTranslations] = useState<LoadingScreenTT>(
    LoadingScreenTranslations.en,
  );

  useEffect(() => {
    setActiveTranslations(
      LoadingScreenTranslations[languageInfo] || LoadingScreenTranslations.en,
    );
  }, [languageInfo]);

  const { label, alt } = activeTranslations;

  return {
    label,
    alt,
  };
};
