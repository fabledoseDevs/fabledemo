import Image from 'next/image';
import { useState } from 'react';

import { tagDataSelector } from './TagElement.helpers';
import {
  CustomLabel,
  DescriptionBox,
  IconBox,
  TagBody,
} from './TagElement.styled';
import type { TagElement as TagElementType } from './TagElement.types';

export const TagElement: TagElementType = ({ tagName, extendedTag }) => {
  const [labelActive, setLabelActive] = useState<boolean>(false);
  const tagData = tagDataSelector(tagName);

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
            src={tagData.icon}
            alt={tagData.title}
            width={70}
            height={70}
          />
          <h5>{tagData.title}</h5>
        </IconBox>
        <DescriptionBox>{tagData.description}</DescriptionBox>
      </TagBody>
    );
  }

  return (
    <TagBody
      extend={false}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image src={tagData.icon} alt={tagData.title} width={50} height={50} />
      {labelActive && <CustomLabel>{tagData.title}</CustomLabel>}
    </TagBody>
  );
};
