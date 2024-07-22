import { useEffect, useState } from 'react';

import { useLanguageContext } from '@/context/LanguageContext/LanguageContext.provider';

import type {
  SocialIconsTT,
  Translation,
  UseTranslation as UseTranslationType,
} from './SocialIcons.types';

export const SocialIconsTranslation: Translation = {
  en: {
    cta: 'Follow us on:',
    fbLabel: 'Go to Facebook Page',
    fbLink: 'https://www.facebook.com/fabledose/',
    instLabel: 'Go to Instagram Page',
    instLink: 'https://instagram.com/fabledose',
    subLabel: 'Go to Substack',
    subLink: 'https://fabledose.substack.com/',
  },
  pl: {
    cta: 'Obserwuj nas na:',
    fbLabel: 'Przejdź na Facebook',
    fbLink: 'https://www.facebook.com/fabledosePolska',
    instLabel: 'Przejdź na Instagram',
    instLink: 'https://instagram.com/fabledose',
    subLabel: 'Przejdź na Substack',
    subLink: 'https://fabledose-polska.substack.com/',
  },
};

export const useTranslation: UseTranslationType = () => {
  const { languageInfo } = useLanguageContext();
  const [activeTranslations, setActiveTranslations] = useState<SocialIconsTT>(
    SocialIconsTranslation.en,
  );

  useEffect(() => {
    setActiveTranslations(
      SocialIconsTranslation[languageInfo] || SocialIconsTranslation.en,
    );
  }, [languageInfo]);

  const { cta, fbLabel, fbLink, instLabel, instLink, subLabel, subLink } =
    activeTranslations;

  return { cta, fbLabel, fbLink, instLabel, instLink, subLabel, subLink };
};
