import Image from 'next/image';
import { useEffect, useState } from 'react';

import { useLanguageContext } from '@/context/LanguageContext/LanguageContext.provider';
import { ACTIVE_LANGUAGE } from '@/context/LanguageContext/LanguageContext.types';

import { tagDataSelectorEN, tagDataSelectorPL } from './TagElement.helpers';
import {
  CustomLabel,
  DescriptionBox,
  IconBox,
  TagBody,
} from './TagElement.styled';
import type { TagElement as TagElementType } from './TagElement.types';

export const TagElement: TagElementType = ({ tagName, extendedTag }) => {
  const [labelActive, setLabelActive] = useState<boolean>(false);
  const { languageInfo } = useLanguageContext();
  const [activeTranslation, setActiveTranslation] = useState<'pl' | 'en' | ''>(
    '',
  );

  const tagDataEN = tagDataSelectorEN(tagName);
  const tagDataPL = tagDataSelectorPL(tagName);

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

  const handleMouseEnter = () => {
    setLabelActive(true);
    setTimeout(() => setLabelActive(false), 2000);
  };

  const handleMouseLeave = () => {
    setLabelActive(false);
  };

  if (extendedTag) {
    return (
      <TagBody extend={true}>
        <IconBox>
          <Image
            src={activeTranslation === 'pl' ? tagDataPL.icon : tagDataEN.icon}
            alt={activeTranslation === 'pl' ? tagDataPL.title : tagDataEN.title}
            width={50}
            height={50}
          />
          <h5>
            {activeTranslation === 'pl' ? tagDataPL.title : tagDataEN.title}
          </h5>
        </IconBox>
        <DescriptionBox>
          {activeTranslation === 'pl'
            ? tagDataPL.description
            : tagDataEN.description}
        </DescriptionBox>
      </TagBody>
    );
  }

  return (
    <TagBody
      extend={false}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={activeTranslation === 'pl' ? tagDataPL.icon : tagDataEN.icon}
        alt={activeTranslation === 'pl' ? tagDataPL.title : tagDataEN.title}
        width={50}
        height={50}
      />
      {labelActive && (
        <CustomLabel>
          {activeTranslation === 'pl' ? tagDataPL.title : tagDataEN.title}
        </CustomLabel>
      )}
    </TagBody>
  );
};
