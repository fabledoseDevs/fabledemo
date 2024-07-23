import Image from 'next/image';
import { useState } from 'react';

import { useActiveTranslation } from '@/helpers/activeTranslation.hook';

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
  const activeTranslation = useActiveTranslation();

  const tagDataEN = tagDataSelectorEN(tagName);
  const tagDataPL = tagDataSelectorPL(tagName);

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
