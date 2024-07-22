import { useEffect, useState } from 'react';

import { useLanguageContext } from '@/context/LanguageContext/LanguageContext.provider';

import type {
  ModalWindowTT,
  Translation,
  UseTranslation as UseTranslationType,
} from './ModalWindow.types';

export const ModalWindowTranslations: Translation = {
  en: { exit: 'Close' },
  pl: { exit: 'Zamknij' },
};

export const useTranslation: UseTranslationType = () => {
  const { languageInfo } = useLanguageContext();
  const [activeTranslations, setActiveTranslations] = useState<ModalWindowTT>(
    ModalWindowTranslations.en,
  );

  useEffect(() => {
    setActiveTranslations(
      ModalWindowTranslations[languageInfo] || ModalWindowTranslations.en,
    );
  }, [languageInfo]);

  const { exit } = activeTranslations;

  return {
    exit,
  };
};
