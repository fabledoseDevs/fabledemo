import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import { useLanguageContext } from '@/context/LanguageContext/LanguageContext.provider';
import { ACTIVE_LANGUAGE } from '@/context/LanguageContext/LanguageContext.types';
import FlagEN from '@/img/flags/icons8-great-britain.png';
import FlagPL from '@/img/flags/icons8-poland.png';

import {
  ExpandedStateWrapper,
  Lang,
  LanguageButton,
  LanguageSelectorBody,
  StaticIcon,
} from './LanguageSelector.styled';
import type {
  FlagSelector as FlagSelectorType,
  LanguageSelector as LanguageSelectorType,
} from './LanguageSelector.types';

export const LanguageSelector: LanguageSelectorType = () => {
  const { languageInfo, setLanguageInfo } = useLanguageContext();
  const [expandSelector, setExpandSelector] = useState<boolean>(false);
  const selectorRef = useRef<HTMLDivElement>(null);

  const switchToEnglish = () => {
    setLanguageInfo(ACTIVE_LANGUAGE.EN);
    setExpandSelector(false);
  };
  const switchToPolski = () => {
    setLanguageInfo(ACTIVE_LANGUAGE.PL);
    setExpandSelector(false);
  };

  const expandSelectorHandler = () => {
    setExpandSelector(prevState => !prevState);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      selectorRef.current &&
      !selectorRef.current.contains(event.target as Node)
    ) {
      setExpandSelector(false);
    }
  };

  useEffect(() => {
    if (expandSelector) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [expandSelector]);

  const flagSelector: FlagSelectorType = language => {
    switch (language) {
      case ACTIVE_LANGUAGE.EN:
        return (
          <Image src={FlagEN} alt={'English Language'} width={46} height={46} />
        );
      case ACTIVE_LANGUAGE.PL:
        return (
          <Image src={FlagPL} alt={'Język polski'} width={46} height={46} />
        );
      default:
        return (
          <Image src={FlagEN} alt={'English Language'} width={46} height={46} />
        );
    }
  };

  return (
    <LanguageSelectorBody ref={selectorRef}>
      <StaticIcon onClick={expandSelectorHandler}>
        {flagSelector(languageInfo)}
      </StaticIcon>
      {expandSelector && (
        <ExpandedStateWrapper>
          <LanguageButton onClick={switchToEnglish}>
            <Lang>English</Lang>
            <Image
              src={FlagEN}
              alt={'English Language'}
              width={36}
              height={36}
            />
          </LanguageButton>
          <LanguageButton onClick={switchToPolski}>
            <Lang>Polski</Lang>
            <Image src={FlagPL} alt={'Język polski'} width={36} height={36} />
          </LanguageButton>
        </ExpandedStateWrapper>
      )}
    </LanguageSelectorBody>
  );
};
