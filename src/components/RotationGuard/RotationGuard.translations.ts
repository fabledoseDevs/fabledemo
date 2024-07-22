import { useEffect, useState } from 'react';

import { useLanguageContext } from '@/context/LanguageContext/LanguageContext.provider';

import type {
  RotationGuardTT,
  Translation,
  UseTranslation as UseTranslationType,
} from './RotationGuard.types';

export const RotationGuardTranslations: Translation = {
  en: {
    mainMessage: 'Rotate your device to view our fable.',
    detailedMessage: [
      'Our stories have been optimised for devices in a horizontal layout.',
      'Rotate your device (or enlarge the browser window) if you see this message.',
      'Tablets, laptops, and larger monitors will provide you with the best reading experience.',
      'If you are using a mobile phone, consider switching to a different device.',
    ],
  },
  pl: {
    mainMessage: 'Obróć urządzenie aby zobaczyć bajkę.',
    detailedMessage: [
      'Nasze bajki zostały zoptymalizowane pod urządzenia w ułożeniu horyzontalnym.',
      'Obróć swoje urządzenie (lub rozciągnij okno przegladarki) jeżeli widzisz ten komunikat.',
      'Tablety, laptopy i większe monitory zapewnią ci najlepsze doświadczenie podczas czytania.',
      'Jeżeli używasz telefonu komórkowego, rozważ zmianę urządzenia do oglądania naszych propozycji.',
    ],
  },
};

export const useTranslation: UseTranslationType = () => {
  const { languageInfo } = useLanguageContext();
  const [activeTranslations, setActiveTranslations] = useState<RotationGuardTT>(
    RotationGuardTranslations.en,
  );

  useEffect(() => {
    setActiveTranslations(
      RotationGuardTranslations[languageInfo] || RotationGuardTranslations.en,
    );
  }, [languageInfo]);

  const { mainMessage, detailedMessage } = activeTranslations;

  return {
    mainMessage,
    detailedMessage,
  };
};
