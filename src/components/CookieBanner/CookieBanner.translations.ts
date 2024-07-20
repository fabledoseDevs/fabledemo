import { useEffect, useState } from 'react';

import { useLanguageContext } from '@/context/LanguageContext/LanguageContext.provider';

import type {
  CookieBannerTT,
  Translation,
  UseTranslation as UseTranslationType,
} from './CookieBanner.types';

export const CookieBannerTranslations: Translation = {
  en: {
    headline:
      'Did you bring any cookies to make your story time more enjoyable?',
    firstPart:
      'We brought our own, but these are not suitable for eating. Our cookies are small files that we save on your device to provide you with the best quality service',
    secondPart:
      'We store information about the application settings you have selected in them. If you do not agree to this, please leave this website. If you would like to find out more, feel free to contact us.',
  },
  pl: {
    headline:
      'Czy przyniosłeś ciasteczka, aby umilić sobie spotkanie z bajkami?',
    firstPart:
      'My przynieśliśmy swoje, ale te nie nadają się do jedzenia. Nasze ciasteczka to niewielkie pliki, które zapisujemy na Twoim urządzeniu, aby móc dostarczyć Ci usługę w najlepszej jakości.',
    secondPart:
      'Zapisujemy w nich informacje o ustawieniach aplikacji, jakie zostały przez ciebie wybrane. Jeżeli nie wyrażasz na to zgody, opuść tę stronę. Jeśli chciałbyś dowiedzeć się więcej, skontaktuj się z nami.',
  },
};

export const useTranslations: UseTranslationType = () => {
  const { languageInfo } = useLanguageContext();
  const [activeTranslations, setActiveTranslations] = useState<CookieBannerTT>(
    CookieBannerTranslations.en,
  );

  useEffect(() => {
    setActiveTranslations(
      CookieBannerTranslations[languageInfo] || CookieBannerTranslations.en,
    );
  }, [languageInfo]);

  const { headline, firstPart, secondPart } = activeTranslations;

  return {
    headline,
    firstPart,
    secondPart,
  };
};
